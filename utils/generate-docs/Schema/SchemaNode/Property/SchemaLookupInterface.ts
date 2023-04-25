import SchemaNode from "../SchemaNode.js";

interface SchemaLookupInterface {
  findSchemaNodeById: (id: string) => SchemaNode;
  findSchemaNodeBySchemaRelativeId: (id: string) => SchemaNode;
}

export default SchemaLookupInterface;
