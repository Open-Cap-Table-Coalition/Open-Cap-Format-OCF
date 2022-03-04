import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface BooleanJson {
  description: string;
  type: "boolean";
}

export default class BooleanProperty extends InlineProperty {
  protected readonly json: BooleanJson;

  constructor(schema: Schema, json: BooleanJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => "`BOOLEAN`";
}
