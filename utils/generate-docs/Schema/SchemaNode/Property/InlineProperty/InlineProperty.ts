import SchemaNode from "../../SchemaNode.js";
import Property from "../Property.js";
import { InlinePropertyJson } from "./Factory";
import Schema from "../SchemaLookupInterface";

export { InlinePropertyJson } from "./Factory";

export default abstract class InlineProperty extends Property {
  protected readonly idOverride?: string;

  constructor(schema: Schema, json: InlinePropertyJson, idOverride?: string) {
    super(schema, json);
    this.idOverride = idOverride;
  }

  protected type = () => ("type" in this.json ? this.json["type"] : null);

  id = () => this.idOverride || "";

  abstract markdownTableType(inMdFileAtPath?: string): string;
}
