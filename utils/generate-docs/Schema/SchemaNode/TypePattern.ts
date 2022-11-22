import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface TypePatternSchemaNodeJson extends SchemaNodeJson {
  type: "string";
  pattern: string;
}

/**
 * Represents an OCF "Type" schema node with a type of "string" that represents a pattern.
 */
export default class TypePatternSchemaNode extends SchemaNode {
  protected readonly json: TypePatternSchemaNodeJson;

  constructor(
    schema: Schema,
    json: TypePatternSchemaNodeJson,
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

  protected pattern = () => this.json["pattern"];

  markdownTableType = () => `[${this.shortId()}](${this.docMdLink()})`;

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Primitive\`

**Value:** \`${this.type().toUpperCase()}\` - _Must Match Regex Pattern: \`${this.pattern()}\`_

${this.markdownFooter()}`;
}
