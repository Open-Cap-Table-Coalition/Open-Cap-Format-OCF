import SchemaNode from "../../SchemaNode.js";
import Property from "../Property.js";
import { InlinePropertyJson } from "./Factory";

export { InlinePropertyJson } from "./Factory";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

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
