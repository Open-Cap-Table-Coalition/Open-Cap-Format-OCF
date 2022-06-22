import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import PropertyFactory, { PropertyJson } from "./Property/Factory.js";

export interface PrimitiveSchemaNodeJson extends SchemaNodeJson {
  properties: { [key: string]: PropertyJson };
  required: string[];
}

/**
 * Represents an OCF "Primitive" schema node.
 */
export default class PrimitiveSchemaNode extends SchemaNode {
  protected readonly json: PrimitiveSchemaNodeJson;

  constructor(schema: Schema, json: PrimitiveSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  properties = () =>
    Object.entries(this.json["properties"]).map(([id, propertyJson]) =>
      PropertyFactory.build(this.schema, propertyJson, id)
    );

  markdownOutput = () => `${this.markdownHeader()}

**Description** _${this.description()}_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically \"types\" and \"objects\". :warning:**

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
