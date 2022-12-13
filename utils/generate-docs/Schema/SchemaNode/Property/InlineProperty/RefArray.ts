import SchemaNode from "../../SchemaNode.js";
import PropertyFactory from "../Factory.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface RefArrayJson {
  description: string;
  type: "array";
  items: { $ref: string };
}

export default class RefArrayProperty extends InlineProperty {
  protected readonly json: RefArrayJson;

  constructor(schema: Schema, json: RefArrayJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected refProperty = () =>
    PropertyFactory.build(this.schema, this.json["items"]);

  markdownTableType = (inMdFileAtPath: string): string =>
    `[ ${this.refProperty().markdownTableType(inMdFileAtPath)} ]`;
}
