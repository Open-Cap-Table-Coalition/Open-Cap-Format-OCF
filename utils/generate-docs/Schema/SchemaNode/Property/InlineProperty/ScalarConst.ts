import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface ScalarConstJson {
  const: string | number | boolean;
}

export default class ScalarConstProperty extends InlineProperty {
  protected readonly json: ScalarConstJson;

  constructor(schema: Schema, json: ScalarConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected const = () => this.json["const"];

  markdownTableType = () =>
    `**Constant:** \`${String(this.const()).toUpperCase()}\``;

  markdownTableDescription = () => "Scalar Constant";
}
