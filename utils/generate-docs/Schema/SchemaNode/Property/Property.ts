import SchemaNode from "../SchemaNode.js";
import { InlinePropertyJson } from "./InlineProperty/Factory.js";
import { RefPropertyJson } from "./RefProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export type PropertyJson = InlinePropertyJson | RefPropertyJson;

export default abstract class Property {
  protected readonly json: PropertyJson;
  protected readonly schema: Schema;

  constructor(schema: Schema, json: PropertyJson) {
    this.schema = schema;
    this.json = json;
  }

  description = () =>
    "description" in this.json && this.json["description"]
      ? this.json["description"]
      : "";

  abstract id(): string;

  markdownTableId = () => this.id();

  markdownTableDescription() {
    return this.description().replace(/\r?\n|\r/g, "</br>");
  }

  abstract markdownTableType(inMdFileAtPath?: string): string;
}
