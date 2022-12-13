import SchemaNode from "../../SchemaNode.js";
import PropertyFactory from "../Factory.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface MultiTypeJson {
  description: string;
  type: string[];
  items: { $ref: string };
}

export default class MultiTypeProperty extends InlineProperty {
  protected readonly json: MultiTypeJson;

  constructor(schema: Schema, json: MultiTypeJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected refProperty = () =>
    PropertyFactory.build(this.schema, this.json["items"]);

  markdownTableType = (inMdFileAtPath: string): string =>
    `[ ${this.refProperty().markdownTableType(inMdFileAtPath)} ]`;
}
