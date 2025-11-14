import { PropertyJson } from "../Schema/SchemaNode/Property/Factory.js";

/**
 * Represents a single property in a composed schema with provenance tracking
 */
export interface ComposedSchemaProperty {
  /** Property identifier/name */
  id: string;

  /** Original JSONSchema property definition (may contain $ref, oneOf, etc.) */
  json: PropertyJson;

  /** Whether this property was defined directly or inherited from a primitive */
  source: "direct" | "inherited";

  /** If inherited, the $id of the primitive schema it came from */
  inheritedFrom?: string;

  /** Property description (may come from property json or inherited) */
  description?: string;
}

/**
 * Enriched schema representation that captures fully-resolved composition.
 * This is the "maximally descriptive" data structure that can be serialized to JSONSchema.
 */
export interface ComposedSchema {
  // ========================================
  // Original Metadata (preserved from source)
  // ========================================

  /** JSONSchema $id URL */
  $id: string;

  /** Copyright notice comment */
  $comment?: string;

  /** Schema title */
  title: string;

  /** Schema description */
  description: string;

  /** JSONSchema type (object, string, etc.) */
  type?: string | string[];

  // ========================================
  // Composition Metadata
  // ========================================

  /** Array of $id URLs from the allOf composition chain */
  composedFrom: string[];

  /** OCF schema categorization */
  schemaType: "object" | "type" | "primitive" | "file" | "enum";

  /** Original schema path relative to /schema folder */
  schemaPath: string;

  /** Whether this is a backwards compatibility wrapper (1 property, 1 allOf) */
  isCompatibilityWrapper?: boolean;

  // ========================================
  // Resolved Properties (allOf merged)
  // ========================================

  /** Fully merged properties with provenance */
  properties: Map<string, ComposedSchemaProperty>;

  /** Merged required fields from all levels of composition */
  required: string[];

  /** Whether additional properties are allowed */
  additionalProperties?: boolean;

  // ========================================
  // Type-Specific Fields (preserved as-is)
  // ========================================

  /** For const types (enums, file_type, object_type) */
  const?: any;

  /** For enum types */
  enum?: any[];

  /** For format-based types (date-time, email, etc.) */
  format?: string;

  /** For pattern-based types (regex validation) */
  pattern?: string;

  /** For array types */
  items?: PropertyJson;

  /** Minimum items in array */
  minItems?: number;

  /** Maximum items in array */
  maxItems?: number;

  /** For oneOf at schema level (not property level) */
  oneOf?: PropertyJson[];

  /** For anyOf at schema level */
  anyOf?: PropertyJson[];

  /** Minimum value for numeric types */
  minimum?: number;

  /** Maximum value for numeric types */
  maximum?: number;
}

/**
 * ComposedSchema class with serialization capabilities
 */
export default class ComposedSchemaNode {
  private data: ComposedSchema;

  constructor(data: ComposedSchema) {
    this.data = data;
  }

  /**
   * Get the underlying composed schema data
   */
  getData(): ComposedSchema {
    return this.data;
  }

  /**
   * Get schema ID
   */
  getId(): string {
    return this.data.$id;
  }

  /**
   * Get schema type (object, primitive, etc.)
   */
  getSchemaType(): string {
    return this.data.schemaType;
  }

  /**
   * Get schema path
   */
  getSchemaPath(): string {
    return this.data.schemaPath;
  }

  /**
   * Check if this is a backwards compatibility wrapper
   */
  getIsCompatibilityWrapper(): boolean {
    return this.data.isCompatibilityWrapper || false;
  }

  /**
   * Get the wrapped schema ID for compatibility wrappers
   */
  getWrappedSchemaId(): string | null {
    if (
      !this.data.isCompatibilityWrapper ||
      this.data.composedFrom.length === 0
    ) {
      return null;
    }
    return this.data.composedFrom[0];
  }

  /**
   * Get all properties
   */
  getProperties(): Map<string, ComposedSchemaProperty> {
    return this.data.properties;
  }

  /**
   * Get required field names
   */
  getRequired(): string[] {
    return this.data.required;
  }

  /**
   * Get composition chain (allOf sources)
   */
  getComposedFrom(): string[] {
    return this.data.composedFrom;
  }

  /**
   * Serialize to fully-resolved JSONSchema.
   * This produces a JSONSchema with NO allOf references - all properties are inline.
   */
  toJSONSchema(): Record<string, any> {
    const schema: Record<string, any> = {
      $id: this.data.$id,
      title: this.data.title,
      description: this.data.description,
    };

    // Add $comment if present
    if (this.data.$comment) {
      (schema as any).$comment = this.data.$comment;
    }

    // Add type if present
    if (this.data.type) {
      schema.type = this.data.type;
    }

    // Serialize properties
    if (this.data.properties.size > 0) {
      schema.properties = {};
      for (const [id, prop] of this.data.properties.entries()) {
        // Merge description into property JSON if it's not already there
        const propJson: any = { ...prop.json };
        if (prop.description && !("description" in propJson)) {
          propJson.description = prop.description;
        }
        schema.properties[id] = propJson;
      }
    }

    // Add required if present
    if (this.data.required.length > 0) {
      schema.required = this.data.required;
    }

    // Add additionalProperties if defined
    if (this.data.additionalProperties !== undefined) {
      (schema as any).additionalProperties = this.data.additionalProperties;
    }

    // Add type-specific fields
    if (this.data.const !== undefined) {
      (schema as any).const = this.data.const;
    }

    if (this.data.enum) {
      (schema as any).enum = this.data.enum;
    }

    if (this.data.format) {
      (schema as any).format = this.data.format;
    }

    if (this.data.pattern) {
      (schema as any).pattern = this.data.pattern;
    }

    if (this.data.items) {
      (schema as any).items = this.data.items;
    }

    if (this.data.minItems !== undefined) {
      (schema as any).minItems = this.data.minItems;
    }

    if (this.data.maxItems !== undefined) {
      (schema as any).maxItems = this.data.maxItems;
    }

    if (this.data.oneOf) {
      (schema as any).oneOf = this.data.oneOf;
    }

    if (this.data.anyOf) {
      (schema as any).anyOf = this.data.anyOf;
    }

    if (this.data.minimum !== undefined) {
      (schema as any).minimum = this.data.minimum;
    }

    if (this.data.maximum !== undefined) {
      (schema as any).maximum = this.data.maximum;
    }

    return schema;
  }

  /**
   * Get a property by ID
   */
  getProperty(id: string): ComposedSchemaProperty | undefined {
    return this.data.properties.get(id);
  }

  /**
   * Check if a property is required
   */
  isPropertyRequired(id: string): boolean {
    return this.data.required.includes(id);
  }

  /**
   * Get all properties that came from composition (inherited)
   */
  getInheritedProperties(): ComposedSchemaProperty[] {
    return Array.from(this.data.properties.values()).filter(
      (prop) => prop.source === "inherited"
    );
  }

  /**
   * Get all properties defined directly in this schema
   */
  getDirectProperties(): ComposedSchemaProperty[] {
    return Array.from(this.data.properties.values()).filter(
      (prop) => prop.source === "direct"
    );
  }
}
