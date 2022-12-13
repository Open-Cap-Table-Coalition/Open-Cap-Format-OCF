import Property from "./Property.js";
import SchemaNode from "../SchemaNode.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface RefPropertyJson {
  $ref: string;
  description?: string;
}

export default class RefProperty extends Property {
  protected readonly referenced: SchemaNode;
  protected readonly idOverride?: string;

  constructor(schema: Schema, json: RefPropertyJson, idOverride?: string) {
    super(schema, json);
    this.referenced = schema.findSchemaNodeById(json["$ref"]);
    this.idOverride = idOverride;
  }

  id = () => this.idOverride || this.referenced.id();

  markdownTableDescription() {
    return (
      super.markdownTableDescription() ||
      this.referenced.markdownTableDescription()
    );
  }

  markdownTableType = (inMdFileAtPath: string) =>
    this.referenced.markdownTableType(inMdFileAtPath);
}
