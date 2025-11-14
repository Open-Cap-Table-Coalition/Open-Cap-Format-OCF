import fse from "fs-extra";
import path from "node:path";
import { markdownTable } from "markdown-table";
import { format } from "date-fns";
import ComposedSchemaNode, {
  ComposedSchemaProperty,
} from "./ComposedSchema.js";
import Examples, { ExampleJson } from "../Schema/Examples.js";
import Supplementals from "../Schema/Supplementals.js";
import PropertyFactory from "../Schema/SchemaNode/Property/Factory.js";
import { relativePathToOtherPath } from "../../schema-utils/PathTools.js";

/**
 * Stage 2: Generate markdown documentation from composed schemas.
 * This replaces SchemaWriter but works with ComposedSchemaNode instead of SchemaNode.
 */
export default class MarkdownGenerator {
  private readonly outputPath: string;
  private readonly composedSchemas: ComposedSchemaNode[];
  private readonly schemasById: Map<string, ComposedSchemaNode>;
  private readonly examples: Examples;
  private readonly supplementals: Supplementals;

  constructor(
    outputPath: string,
    composedSchemas: ComposedSchemaNode[],
    exampleJsons: ExampleJson[] = [],
    supplementalMarkdowns: string[] = []
  ) {
    this.outputPath = outputPath;
    this.composedSchemas = composedSchemas;
    this.examples = new Examples(exampleJsons);
    this.supplementals = new Supplementals(supplementalMarkdowns);

    // Build lookup index
    this.schemasById = new Map();
    for (const schema of composedSchemas) {
      this.schemasById.set(schema.getId(), schema);
    }
  }

  /**
   * Static factory: Generate markdown documentation
   */
  static async generate(
    outputPath: string,
    composedSchemas: ComposedSchemaNode[],
    exampleJsons: ExampleJson[] = [],
    supplementalMarkdowns: string[] = []
  ): Promise<void> {
    const generator = new MarkdownGenerator(
      outputPath,
      composedSchemas,
      exampleJsons,
      supplementalMarkdowns
    );
    await generator.write();
  }

  /**
   * Delete existing markdown files
   */
  private async deleteExistingFiles(): Promise<void> {
    await fse.emptyDir(this.outputPath);
  }

  /**
   * Write markdown for a single schema
   */
  private async writeMarkdownFile(schema: ComposedSchemaNode): Promise<void> {
    try {
      const schemaPath = schema.getSchemaPath();
      const fullPath = path.join(this.outputPath, `${schemaPath}.md`);
      const mdContent = this.generateMarkdown(schema);

      await fse.outputFile(fullPath, mdContent);
    } catch (e: any) {
      console.error(
        `\nERROR: Failure generating markdown for ${schema.getId()}\n`
      );
      throw e;
    }
  }

  /**
   * Get the output markdown file path for a schema
   */
  private getMarkdownPath(schema: ComposedSchemaNode): string {
    const schemaPath = schema.getSchemaPath();
    // Output path format: docs/schema_markdown/{schemaPath}.md
    return path.join("docs", "schema_markdown", `${schemaPath}.md`);
  }

  /**
   * Generate markdown content for a schema
   */
  private generateMarkdown(schema: ComposedSchemaNode): string {
    const schemaType = schema.getSchemaType();

    switch (schemaType) {
      case "object":
        return this.generateObjectMarkdown(schema);
      case "type":
        return this.generateTypeMarkdown(schema);
      case "primitive":
        return this.generatePrimitiveMarkdown(schema);
      case "file":
        return this.generateFileMarkdown(schema);
      case "enum":
        return this.generateEnumMarkdown(schema);
      default:
        throw new Error(`Unknown schema type: ${schemaType}`);
    }
  }

  /**
   * Generate markdown for Object schemas
   */
  private generateObjectMarkdown(schema: ComposedSchemaNode): string {
    // Check if this is a compatibility wrapper
    if (schema.getIsCompatibilityWrapper()) {
      return this.generateCompatibilityWrapperMarkdown(schema);
    }

    const data = schema.getData();
    const objectTypes = this.extractObjectTypes(schema);

    return `${this.markdownHeader(schema)}

**Description:** _${data.description}_

${this.objectDataTypeDescriptionBlock(schema, objectTypes)}

**Composed From:**

${this.allOfMarkdown(schema)}

**Properties:**

${this.markdownPropertiesTable(schema)}

${this.markdownFooter(schema, objectTypes)}`;
  }

  /**
   * Generate markdown for Type schemas
   */
  private generateTypeMarkdown(schema: ComposedSchemaNode): string {
    const data = schema.getData();
    const hasAllOf = data.composedFrom.length > 0;

    if (hasAllOf || data.properties.size > 0) {
      // Type with composition or properties (like ConversionTrigger variants)
      return `${this.markdownHeader(schema)}

_${data.description}_

**Data Type:** \`OCF TYPE\`

**Properties:**

${this.markdownPropertiesTable(schema)}

${this.markdownFooter(schema)}`;
    } else {
      // Simple type (like Date, Numeric, etc.)
      // Check if it has pattern or format for special handling
      const hasPattern = data.pattern;
      const hasFormat = data.format;

      if (hasPattern) {
        // TypePattern: Show as Primitive with pattern
        return `${this.markdownHeader(schema)}

**Description:** _${data.description}_

**Data Type:** \`Primitive\`

**Value:** \`${this.formatDataType(data)}\` - _Must Match Regex Pattern: \`${
          data.pattern
        }\`_

${this.markdownFooter(schema)}`;
      } else if (hasFormat) {
        // TypeFormat: Show with format info
        return `${this.markdownHeader(schema)}

**Description:** _${data.description}_

**Data Type:** \`Primitive\`

**Value:** \`${this.formatDataType(data)} - _Must match JSONSchema Format: ${(
          data.format || ""
        ).toUpperCase()}_\`

${this.markdownFooter(schema)}`;
      } else {
        // Regular simple type
        return `${this.markdownHeader(schema)}

_${data.description}_

**Data Type:** \`${this.formatDataType(data)}\`

${this.markdownFooter(schema)}`;
      }
    }
  }

  /**
   * Generate markdown for Primitive schemas
   */
  private generatePrimitiveMarkdown(schema: ComposedSchemaNode): string {
    const data = schema.getData();

    return `${this.markdownHeader(schema)}

**Description** _${data.description}_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

${this.markdownPropertiesTable(schema)}

${this.markdownFooter(schema)}`;
  }

  /**
   * Generate markdown for File schemas
   */
  private generateFileMarkdown(schema: ComposedSchemaNode): string {
    const data = schema.getData();
    const fileTypeProp = schema.getProperty("file_type");
    const fileTypeConst =
      fileTypeProp?.json && "const" in fileTypeProp.json
        ? (fileTypeProp.json as any).const
        : "OCF File";

    return `${this.markdownHeader(schema)}

**Description:** _${data.description}_

**Data Type:** \`${fileTypeConst.toUpperCase()}\`

**Composed From:**

${this.allOfMarkdown(schema)}

**Properties:**

${this.markdownPropertiesTable(schema)}

${this.markdownFooter(schema)}`;
  }

  /**
   * Generate markdown for Enum schemas
   */
  private generateEnumMarkdown(schema: ComposedSchemaNode): string {
    const data = schema.getData();
    const enumList = data.enum
      ? data.enum.map((v) => `</br>&bull; ${v}`).join(" ")
      : "";

    return `${this.markdownHeader(schema)}

**Description:** _${data.description}_

**ONE OF:**${enumList}

${this.markdownFooter(schema)}`;
  }

  /**
   * Generate markdown for backwards compatibility wrapper schemas
   */
  private generateCompatibilityWrapperMarkdown(
    schema: ComposedSchemaNode
  ): string {
    const data = schema.getData();
    const wrappedSchemaId = schema.getWrappedSchemaId();

    if (!wrappedSchemaId) {
      throw new Error(
        `Compatibility wrapper has no wrapped schema: ${data.$id}`
      );
    }

    const wrappedSchema = this.schemasById.get(wrappedSchemaId);
    if (!wrappedSchema) {
      throw new Error(`Cannot find wrapped schema: ${wrappedSchemaId}`);
    }

    const wrappedSchemaPath = wrappedSchema.getSchemaPath();
    const markdownPath = this.getMarkdownPath(schema);
    const wrappedMarkdownPath = this.getMarkdownPath(wrappedSchema);
    const relativePath = relativePathToOtherPath(
      markdownPath,
      wrappedMarkdownPath
    );

    // Add the filename to the relative path
    const wrappedFilename = path.basename(wrappedSchemaPath) + ".md";
    const fullRelativePath =
      relativePath === "."
        ? `./${wrappedFilename}`
        : path.join(relativePath, wrappedFilename);

    const objectTypeProp = data.properties.get("object_type");
    const objectTypeConst =
      objectTypeProp?.json && "const" in objectTypeProp.json
        ? (objectTypeProp.json.const as string)
        : undefined;
    const dataTypeBlock = objectTypeConst
      ? `**Data Type:** \`OCF Object - ${objectTypeConst.toUpperCase()}\``
      : "";

    return `${this.markdownHeader(schema)}

  **Description:** _${data.description}_

  ${dataTypeBlock}

  **Compatibility Wrapper For:** [${wrappedSchemaPath}](${fullRelativePath})

  ${this.markdownFooter(schema)}`;
  }

  // ========================================
  // Markdown Sections
  // ========================================

  /**
   * Generate markdown header
   */
  private markdownHeader(schema: ComposedSchemaNode): string {
    const data = schema.getData();
    return `### ${data.title}\n\n\`${data.$id}\``;
  }

  /**
   * Generate markdown footer
   */
  private markdownFooter(
    schema: ComposedSchemaNode,
    objectTypes?: string[]
  ): string {
    const data = schema.getData();
    const parts: string[] = [];

    // Add supplemental markdowns
    const supplementals = this.findSupplementalMarkdowns(schema);
    if (supplementals.length > 0) {
      parts.push(...supplementals);
    }

    // Add source code link
    parts.push(`**Source Code:** ${this.mdLinkToSourceSchema(schema)}`);

    // Add examples (only for objects)
    if (objectTypes && objectTypes.length > 0) {
      const examples = this.findExamples(objectTypes);
      if (examples.length > 0) {
        parts.push(
          `**Examples:**\n\n\`\`\`json\n${JSON.stringify(
            examples,
            null,
            2
          )}\n\`\`\``
        );
      }
    }

    // Add copyright
    parts.push(
      `Copyright © ${format(new Date(), "Y")} Open Cap Table Coalition.`
    );

    return parts.join("\n\n") + "\n";
  }

  /**
   * Generate allOf composition markdown
   */
  private allOfMarkdown(schema: ComposedSchemaNode): string {
    const composedFrom = schema.getComposedFrom();

    if (composedFrom.length === 0) {
      return "_None_";
    }

    return composedFrom
      .map((id) => {
        const composedSchema = this.schemasById.get(id);
        if (!composedSchema) {
          return `- \`${id}\``;
        }
        return `- ${this.mdLinkToSchema(composedSchema, schema)}`;
      })
      .join("\n");
  }

  /**
   * Generate properties table markdown
   */
  private markdownPropertiesTable(schema: ComposedSchemaNode): string {
    const properties = Array.from(schema.getProperties().values());
    const required = schema.getRequired();

    if (properties.length === 0) {
      return "_No properties defined_";
    }

    const mdPath = this.getMarkdownPath(schema);

    return markdownTable([
      ["Property", "Type", "Description", "Required"],
      ...properties.map((prop) => [
        prop.id,
        this.propertyTypeMarkdown(prop, mdPath),
        this.propertyDescriptionMarkdown(prop),
        required.includes(prop.id) ? "`REQUIRED`" : "-",
      ]),
    ]);
  }

  /**
   * Generate property type markdown
   */
  private propertyTypeMarkdown(
    prop: ComposedSchemaProperty,
    currentMdPath: string
  ): string {
    // Use the existing Property class to handle type rendering
    const propertyInstance = PropertyFactory.build(
      this as any, // SchemaLookupInterface
      prop.json,
      prop.id
    );
    return propertyInstance.markdownTableType(currentMdPath);
  }

  /**
   * Generate property description markdown
   */
  private propertyDescriptionMarkdown(prop: ComposedSchemaProperty): string {
    // Use the existing Property class to handle description rendering
    // This allows ScalarConstProperty to return "Scalar Constant" etc.
    const propertyInstance = PropertyFactory.build(
      this as any, // SchemaLookupInterface
      prop.json,
      prop.id
    );
    return propertyInstance.markdownTableDescription();
  }

  /**
   * Format data type for display
   */
  private formatDataType(data: any): string {
    if (data.type) {
      if (typeof data.type === "string") {
        return data.type.toUpperCase();
      } else if (Array.isArray(data.type)) {
        return data.type.map((t: string) => t.toUpperCase()).join(" | ");
      }
    }
    if (data.format) {
      return `STRING with format: ${data.format}`;
    }
    if (data.pattern) {
      return `STRING with pattern`;
    }
    return "UNKNOWN";
  }

  /**
   * Extract object_type values from schema
   */
  private extractObjectTypes(schema: ComposedSchemaNode): string[] {
    const objectTypeProp = schema.getProperty("object_type");
    if (!objectTypeProp) {
      return [];
    }

    const json = objectTypeProp.json as any;
    if ("const" in json) {
      return [json.const];
    } else if ("enum" in json) {
      return json.enum;
    }

    return [];
  }

  /**
   * Generate object data type description block
   */
  private objectDataTypeDescriptionBlock(
    schema: ComposedSchemaNode,
    objectTypes: string[]
  ): string {
    if (objectTypes.length === 0) {
      return "**Data Type:** `OCF Object`";
    }

    if (objectTypes.length === 1) {
      return `**Data Type:** \`OCF Object - ${objectTypes[0].toUpperCase()}\``;
    }

    // Multiple object types (backwards compatibility)
    let text = "**Data Type:** `Includes Backwards Compatibility Alias(es)`";
    for (const objectType of objectTypes) {
      text += `</br>- \`OCF Object - ${objectType.toUpperCase()}\``;
    }
    return text;
  }

  /**
   * Find schema by ID (implements SchemaLookupInterface)
   */
  findSchemaNodeById(id: string): any {
    const schema = this.schemasById.get(id);
    if (!schema) {
      throw new Error(`Cannot find schema: ${id}`);
    }

    const mdGenerator = this;
    const data = schema.getData();

    // Return a wrapper that implements the interface expected by Property classes
    return {
      id: () => id,
      title: () => data.title,
      description: () => data.description,
      markdownTableDescription: () =>
        data.description.replace(/\r?\n|\r/g, "</br>"),
      markdownTableType: (inMdFileAtPath?: string) => {
        // Special handling for enums - expand inline like old system
        if (schema.getSchemaType() === "enum" && data.enum) {
          const enumList = data.enum.map((v) => `</br>&bull; ${v}`).join(" ");
          const descriptionForTable = data.description.replace(
            /\r?\n|\r/g,
            "</br>"
          );
          return `\`${data.title}\`</br></br>_Description:_ ${descriptionForTable}</br></br>**ONE OF:** ${enumList}`;
        }
        return mdGenerator.mdLinkToSchema(schema, null, inMdFileAtPath);
      },
      mdLinkToNodesMdDocs: (inMdFileAtPath: string) =>
        mdGenerator.mdLinkToSchema(schema, null, inMdFileAtPath),
    };
  }

  /**
   * Find schema by relative ID (implements SchemaLookupInterface)
   */
  findSchemaNodeBySchemaRelativeId(partialId: string): any {
    const parentType = partialId.split("/")[0];
    const candidates = this.composedSchemas.filter((s) => {
      const schemaPath = s.getSchemaPath();
      return schemaPath.includes(parentType);
    });

    const schema = candidates.find((s) => s.getId().endsWith(partialId));
    if (!schema) {
      throw new Error(`Cannot find schema: .../${partialId}`);
    }

    return this.findSchemaNodeById(schema.getId());
  }

  /**
   * Generate markdown link to source schema
   */
  private mdLinkToSourceSchema(schema: ComposedSchemaNode): string {
    const schemaPath = schema.getSchemaPath();
    const schemaBasename = path.basename(schemaPath);
    const mdPath = this.getMarkdownPath(schema);

    // Source schema absolute path from repo root
    const sourceAbsolutePath = `${schemaPath}.schema.json`;

    const relativePath = relativePathToOtherPath(sourceAbsolutePath, mdPath);
    return `[${schemaPath}](${relativePath}/${schemaBasename}.schema.json)`;
  }

  /**
   * Generate markdown link to another schema's docs
   */
  private mdLinkToSchema(
    targetSchema: ComposedSchemaNode,
    fromSchema: ComposedSchemaNode | null,
    fromMdPath?: string
  ): string {
    const targetPath = targetSchema.getSchemaPath();
    const targetBasename = path.basename(targetPath);

    const currentPath =
      fromMdPath || (fromSchema ? this.getMarkdownPath(fromSchema) : "");

    if (!currentPath) {
      return `[${targetPath}](${targetPath}.md)`;
    }

    const relativePath = relativePathToOtherPath(
      this.getMarkdownPath(targetSchema),
      currentPath
    );
    return `[${targetPath}](${relativePath}/${targetBasename}.md)`;
  }

  /**
   * Find examples for object types
   */
  private findExamples(objectTypes: string[]): any[] {
    return this.examples.findExampleItemsByObjectTypes(objectTypes);
  }

  /**
   * Find supplemental markdowns for schema
   */
  private findSupplementalMarkdowns(schema: ComposedSchemaNode): string[] {
    const shortId = schema.getSchemaPath();
    return this.supplementals.findSupplementalMarkdownByShortId(shortId);
  }

  /**
   * Write all markdown files
   */
  async write(): Promise<void> {
    console.log(`Writing markdown to: ${this.outputPath}`);

    await this.deleteExistingFiles();

    await Promise.all(
      this.composedSchemas.map((schema) => this.writeMarkdownFile(schema))
    );

    console.log(
      `Finished writing ${this.composedSchemas.length} markdown files.`
    );
  }
}
