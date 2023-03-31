import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import { PropertyJson } from "./Property/Factory.js";
import { OneOfArrayJson } from "./Property/InlineProperty/OneOfArray.js";
import { ObjectConstJson } from "./Property/InlineProperty/ObjectConst.js";
import { OneOfJson } from "./Property/InlineProperty/OneOf.js";

export interface ObjectSchemaNodeJson extends SchemaNodeJson {
  allOf: Array<{ $ref: string }>;
  properties: {
    object_type: { const: string } | OneOfJson<ObjectConstJson>;
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

  protected objectTypes = (): string[] => {
    let object_type = this.json["properties"]["object_type"];
    if ("oneOf" in object_type) {
      return object_type["oneOf"].map((item) => item.const);
    } else {
      return [object_type["const"]];
    }
  };

  protected objectDataTypeDescriptionBlock = (): string => {
    let text_block = "**Data Type:** `";
    let object_type_field = this.json["properties"]["object_type"];
    if ("oneOf" in object_type_field) {
      text_block += "Multiple Supported for Backwards Compatibility`</br>";
      for (let i = 0; i < object_type_field["oneOf"].length; i++) {
        let object_type_obj = object_type_field["oneOf"][i];
        text_block +=
          "`OCF Object - " + object_type_obj["const"].toUpperCase() + "`";
      }
      return text_block;
    } else {
      text_block +=
        "OCF Object - " + object_type_field["const"].toUpperCase() + "`";
    }
    return text_block;
  };

  protected examples = () =>
    this.schema.findExampleItemsByObjectTypes(this.objectTypes());

  protected markdownExamples = () =>
    this.examples().length > 0
      ? `**Examples:**

\`\`\`json
${JSON.stringify(this.examples(), null, 2)}
\`\`\``
      : "";

  markdownTableType = (in_markdown_file_path: string) =>
    this.mdLinkToNodesMdDocs(in_markdown_file_path);

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

${this.objectDataTypeDescriptionBlock()}

**Composed From:**

${this.allOfMarkdown()}

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
