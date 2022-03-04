import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface StringJson {
  description: string;
  type: "string";
}

export default class StringProperty extends InlineProperty {
  protected readonly json: StringJson;

  constructor(schema: Schema, json: StringJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => "`STRING`";
}
