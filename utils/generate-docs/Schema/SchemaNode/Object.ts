import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import { PropertyJson } from "./Property/Factory.js";

export interface ObjectSchemaNodeJson extends SchemaNodeJson {
  allOf: Array<{ $ref: string }>;
  properties: {
    object_type: { const: string };
  } & { [key: string]: PropertyJson };
  additionalProperties: boolean;
  required?: string[];
}

/**
 * Represents an OCF "Object" schema node.
 */
export default class ObjectSchemaNode extends SchemaNode {
  protected readonly json: ObjectSchemaNodeJson;

  constructor(
    schema: Schema,
    json: ObjectSchemaNodeJson,
    docIndexPath: string,
    docsUrlRoot?: string,
    repoUrlRoot?: string,
    addFileExtension?: boolean
  ) {
    super(
      schema,
      json,
      docIndexPath,
      docsUrlRoot,
      repoUrlRoot,
      addFileExtension
    );
    this.json = json;
  }

  protected objectType = () => this.json["properties"]["object_type"]["const"];

  protected examples = () =>
    this.schema.findExampleItemsByObjectType(this.objectType());

  protected markdownExamples = () =>
    this.examples().length > 0
      ? `**Examples:**

\`\`\`json
${JSON.stringify(this.examples(), null, 2)}
\`\`\``
      : "";

  markdownTableType = () => this.markdownOutputLink();

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`OCF Object - ${this.objectType().toUpperCase()}\`

**Composed From:**

${this.allOfMarkdown()}

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
