import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface ObjectConstJson {
  const?: string;
  enum?: string[];
  description?: string;
  $comment?: string;
}

export default class ObjectConstProperty extends InlineProperty {
  protected readonly json: ObjectConstJson;

  constructor(schema: Schema, json: ObjectConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  /**
   * Return the type constant of this object
   * @returns The value of the `const` property, or the first value of the `enum` property if `const` is not present.
   */
  protected const = () => {
    if ("const" in this.json) {
      return this.json["const"];
    } else if (
      "enum" in this.json &&
      Array.isArray(this.json["enum"]) &&
      this.json["enum"].length > 0
    ) {
      return this.json["enum"][0];
    }
    throw new Error("ObjectConstProperty: const not found");
  };

  protected objectTypeEnumSchemaNode = () =>
    this.schema.findSchemaNodeById(
      "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/ObjectType.schema.json"
    );

  markdownTableType = (inMdFileAtPath: string) => {
    if (this.json && "const" in this.json && this.json.const) {
      return `**Constant:** \`${this.json.const.toUpperCase()}\`</br>_Defined in ${this.objectTypeEnumSchemaNode().mdLinkToNodesMdDocs(
        inMdFileAtPath
      )}_${
        this.json.$comment ? "(_Comment: " + this.json.$comment + "_)" : ""
      }`;
    } else if ("enum" in this.json && this.json.enum) {
      return `**Constants (Backwards Compatibility):** \`${this.json.enum.join(
        ", "
      )}\`</br>_Defined in ${this.objectTypeEnumSchemaNode().mdLinkToNodesMdDocs(
        inMdFileAtPath
      )}_${
        this.json.$comment ? "(_Comment: " + this.json.$comment + "_)" : ""
      }`;
    } else {
      throw new Error("ObjectConstProperty: const not found");
    }
  };

  markdownTableDescription = () => "Object type field";
}
