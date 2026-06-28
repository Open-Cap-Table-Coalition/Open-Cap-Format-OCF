import { objectTypeValues } from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import { PropertyJson } from "./Property/Factory.js";

export interface ObjectSchemaNodeJson extends SchemaNodeJson {
  allOf: Array<{ $ref: string }>;
  properties: {
    object_type: { const: string } | { enum: string[] };
  } & { [key: string]: PropertyJson };
  additionalProperties: boolean;
  required?: string[];
}

/**
 * Represents an OCF "Object" schema node.
 */
export default class ObjectSchemaNode extends SchemaNode {
  protected readonly json: ObjectSchemaNodeJson;

  constructor(schema: Schema, json: ObjectSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  protected objectTypes = (): string[] =>
    objectTypeValues(this.json["properties"]?.["object_type"]);

  protected objectDataTypeDescriptionBlock = (): string => {
    const object_type_field = this.json["properties"]?.["object_type"] as
      | { const?: unknown; enum?: unknown }
      | undefined;

    if (object_type_field && Array.isArray(object_type_field.enum)) {
      return object_type_field.enum.reduce(
        (text_block: string, value) =>
          typeof value === "string"
            ? `${text_block}</br>- \`OCF Object - ${value.toUpperCase()}\``
            : text_block,
        "**Data Type:** `Includes Backwards Compatibility Alias(es)`"
      );
    }

    if (object_type_field && typeof object_type_field.const === "string") {
      return `**Data Type:** \`OCF Object - ${object_type_field.const.toUpperCase()}\``;
    }

    // A versioned shape that inherits object_type (a placeholder `{}` or a
    // `$ref`) composes to an object_type with no literal const/enum; render a
    // generic label rather than dereferencing a missing `const`.
    return "**Data Type:** `OCF Object`";
  };

  protected markdownExamples = () =>
    this.exampleItemsMarkdown(this.objectTypes());

  markdownTableType = (in_markdown_file_path: string) =>
    this.mdLinkToNodesMdDocs(in_markdown_file_path);

  markdownVersionBody = (
    forOutputPath: string = this.outputFileAbsolutePath()
  ) =>
    this.dataTypeWithPropertiesTable(
      this.objectDataTypeDescriptionBlock(),
      forOutputPath
    );

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

${this.objectDataTypeDescriptionBlock()}

**Composed From:**

${this.allOfMarkdown()}

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
