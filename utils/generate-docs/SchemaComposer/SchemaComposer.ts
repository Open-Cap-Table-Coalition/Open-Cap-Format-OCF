import path from "node:path";
import SchemaReader from "../Schema/SchemaReader.js";
import { SchemaNodeJson } from "../Schema/SchemaNode/SchemaNode.js";
import ComposedSchemaNode, {
  ComposedSchema,
  ComposedSchemaProperty,
} from "./ComposedSchema.js";

/**
 * SchemaComposer handles Stage 1: Reading raw schemas and producing fully-composed schemas.
 * It walks allOf trees, merges properties, and tracks composition provenance.
 */
export default class SchemaComposer {
  private schemaNodeJsons: SchemaNodeJson[];
  private schemaById: Map<string, SchemaNodeJson>;

  constructor(schemaNodeJsons: SchemaNodeJson[]) {
    this.schemaNodeJsons = schemaNodeJsons;
    this.schemaById = new Map();

    // Build lookup index
    for (const schema of schemaNodeJsons) {
      this.schemaById.set(schema.$id, schema);
    }
  }

  /**
   * Static factory: Read schemas from directory and compose them
   */
  static async compose(schemaPath: string): Promise<ComposedSchemaNode[]> {
    const schemaNodeJsons = await SchemaReader.read(schemaPath);
    const composer = new SchemaComposer(schemaNodeJsons);
    return composer.composeAll();
  }

  /**
   * Compose all schemas
   */
  composeAll(): ComposedSchemaNode[] {
    return this.schemaNodeJsons.map((json) => this.composeSchema(json));
  }

  /**
   * Compose a single schema by walking its allOf tree and merging properties
   */
  private composeSchema(json: SchemaNodeJson): ComposedSchemaNode {
    const composedFrom: string[] = [];
    const properties = new Map<string, ComposedSchemaProperty>();
    const required: string[] = [];

    // Detect compatibility wrapper: 1 property (object_type), 1 allOf
    const isCompatibilityWrapper = this.isCompatibilityWrapper(json);

    // Walk allOf chain to collect inherited properties
    if ("allOf" in json && json.allOf) {
      for (const allOfItem of json.allOf) {
        if ("$ref" in allOfItem) {
          const refId = allOfItem.$ref;
          composedFrom.push(refId);

          const parentSchema = this.schemaById.get(refId);
          if (!parentSchema) {
            throw new Error(`Cannot find schema: ${refId}`);
          }

          // Recursively get all properties from parent (and its parents)
          const parentComposed = this.composeSchema(parentSchema);
          const parentData = parentComposed.getData();

          // Add inherited properties (later allOf items override earlier ones)
          for (const [propId, prop] of parentData.properties.entries()) {
            // Override if exists - later primitives in allOf chain take precedence
            properties.set(propId, {
              ...prop,
              source: "inherited",
              inheritedFrom: refId,
            });
          }

          // Merge required fields
          for (const req of parentData.required) {
            if (!required.includes(req)) {
              required.push(req);
            }
          }
        }
      }
    }

    // Add direct properties (defined in this schema, not inherited)
    if ("properties" in json && json.properties) {
      for (const [propId, propJson] of Object.entries(json.properties)) {
        // Only add if it has actual content (not just {})
        if (Object.keys(propJson).length > 0) {
          // Get description from property JSON, or fall back to inherited description
          let description: string | undefined =
            "description" in propJson ? propJson.description : undefined;

          // If no description in direct property, try to get it from inherited property
          if (!description && properties.has(propId)) {
            const inheritedProp = properties.get(propId);
            description = inheritedProp?.description;
          }

          // Merge description into propJson if it's missing
          // EXCEPT for const-only properties (let ScalarConstProperty use "Scalar Constant")
          const enrichedPropJson: any = { ...propJson };
          const isConstOnly =
            "const" in propJson && !("description" in propJson);
          if (
            description &&
            !("description" in enrichedPropJson) &&
            !isConstOnly
          ) {
            enrichedPropJson.description = description;
          }

          properties.set(propId, {
            id: propId,
            json: enrichedPropJson,
            source: "direct",
            description,
          });
        } else {
          // Property is {} - keep inherited property but ensure it's marked as required if needed
          // The inherited property should already be in the map from allOf processing
          // No action needed here as the inherited property is already present
        }
      }
    }

    // Add this schema's required fields
    if ("required" in json && json.required) {
      for (const req of json.required) {
        if (!required.includes(req)) {
          required.push(req);
        }
      }
    }

    // Determine schema type from path
    const schemaType = this.inferSchemaType(json.$id);
    const schemaPath = this.extractSchemaPath(json.$id);

    // Build composed schema
    const composedSchema: ComposedSchema = {
      $id: json.$id,
      $comment: "$comment" in json ? (json.$comment as string) : undefined,
      title: json.title,
      description: json.description,
      type: "type" in json ? json.type : undefined,
      composedFrom,
      schemaType,
      schemaPath,
      properties,
      required,
      additionalProperties:
        "additionalProperties" in json
          ? (json.additionalProperties as boolean)
          : undefined,
      isCompatibilityWrapper,
    };

    // Copy type-specific fields
    this.copyTypeSpecificFields(json, composedSchema);

    return new ComposedSchemaNode(composedSchema);
  }

  /**
   * Copy type-specific fields from original JSON to composed schema
   */
  private copyTypeSpecificFields(
    json: SchemaNodeJson,
    composedSchema: ComposedSchema
  ): void {
    const jsonAny = json as any;

    if ("const" in jsonAny) {
      composedSchema.const = jsonAny.const;
    }

    if ("enum" in jsonAny) {
      composedSchema.enum = jsonAny.enum;
    }

    if ("format" in jsonAny) {
      composedSchema.format = jsonAny.format;
    }

    if ("pattern" in jsonAny) {
      composedSchema.pattern = jsonAny.pattern;
    }

    if ("items" in jsonAny) {
      composedSchema.items = jsonAny.items;
    }

    if ("minItems" in jsonAny) {
      composedSchema.minItems = jsonAny.minItems;
    }

    if ("maxItems" in jsonAny) {
      composedSchema.maxItems = jsonAny.maxItems;
    }

    if ("oneOf" in jsonAny) {
      composedSchema.oneOf = jsonAny.oneOf;
    }

    if ("anyOf" in jsonAny) {
      composedSchema.anyOf = jsonAny.anyOf;
    }

    if ("minimum" in jsonAny) {
      composedSchema.minimum = jsonAny.minimum;
    }

    if ("maximum" in jsonAny) {
      composedSchema.maximum = jsonAny.maximum;
    }
  }

  /**
   * Infer schema type from $id path
   */
  private inferSchemaType(
    id: string
  ): "object" | "type" | "primitive" | "file" | "enum" {
    const pathPart = this.extractSchemaPath(id);
    const parts = pathPart.split("/");

    // Check primitives FIRST before objects/types, since paths like
    // "primitives/objects/..." would match "objects" incorrectly
    if (parts.includes("primitives")) return "primitive";
    if (parts.includes("objects")) return "object";
    if (parts.includes("types")) return "type";
    if (parts.includes("files")) return "file";
    if (parts.includes("enums")) return "enum";

    throw new Error(`Cannot infer schema type from: ${id}`);
  }

  /**
   * Extract schema path from $id URL
   */
  private extractSchemaPath(id: string): string {
    const splitter = id.includes("/schema/")
      ? { indicator: "/schema/", slashIndex: 0 }
      : { indicator: "/v/", slashIndex: 1 };

    const subpath = id
      .split(splitter.indicator)[1]
      .split("/")
      .slice(splitter.slashIndex)
      .join("/");

    // Include 'schema/' prefix to match old system
    return (
      path.dirname(`schema/${subpath}`) +
      "/" +
      path.basename(subpath, ".schema.json")
    );
  }

  /**
   * Detect if a schema is a backwards compatibility wrapper.
   * Criteria:
   * - Exactly 1 property: object_type
   * - Exactly 1 allOf reference
   */
  private isCompatibilityWrapper(json: SchemaNodeJson): boolean {
    if (!json || typeof json !== "object") {
      return false;
    }

    const properties = "properties" in json ? json.properties : undefined;
    if (!properties || typeof properties !== "object") {
      return false;
    }

    const keys = Object.keys(properties);
    if (keys.length !== 1) {
      return false;
    }

    const objectType = properties.object_type;
    if (!objectType || typeof objectType !== "object") {
      return false;
    }

    const allOf = "allOf" in json ? json.allOf : undefined;
    if (!Array.isArray(allOf) || allOf.length !== 1) {
      return false;
    }

    const ref = allOf[0].$ref;
    if (!ref || typeof ref !== "string") {
      return false;
    }

    return true;
  }
}
