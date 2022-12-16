import fse from "fs-extra";
import path from "path";

import Schema from "./Schema.js";
import SchemaNode from "./SchemaNode/SchemaNode.js";

const README_INSERT_START = "## Schemas are divided into";
const README_INSERT_END = "## Developer Information";

/**
 * Uses a Schema object to create a table of contents in markdown for inserting
 * into the project's README.
 */
export default class TableOfContents {
  static write = (
    schema: Schema,
    repoRootDir: string,
    repoPathToMd: string
  ) => {
    const tableOfContents = new TableOfContents(schema);
    const readmeString = fse
      .readFileSync(path.join(repoRootDir, repoPathToMd))
      .toString();

    return fse.writeFile(
      path.join(repoRootDir, repoPathToMd),
      tableOfContents.replaceTocInReadmeString(readmeString, repoPathToMd)
    );
  };

  static write_index = (
    schema: Schema,
    repoRootDir: string,
    repoPathToMd: string
  ) => {
    const tableOfContents = new TableOfContents(schema);
    const toc_string = tableOfContents.markdown(repoPathToMd);
    return fse.writeFile(path.join(repoRootDir, repoPathToMd), toc_string);
  };

  protected readonly schema: Schema;

  constructor(schema: Schema) {
    this.schema = schema;
  }

  protected markdownFromSchemaNode = (
    schemaNode: SchemaNode,
    links_rel_to_path: string
  ) => `- **${schemaNode.title()}**

  - **Id:** \`${schemaNode.id()}\`
  - **Description:** ${schemaNode
    .description()
    .replace(/\n/g, "\n  ")
    .replace(/ \n/g, "\n")}
  - **View more:** ${schemaNode.mdLinkToNodesMdDocs(links_rel_to_path)}`;

  protected markdownForSchemaNodesOfParentType = (
    parentType: string,
    target_index_path: string
  ) =>
    this.schema
      .filterSchemaNodesByParentType(parentType)
      .map((node: SchemaNode) =>
        this.markdownFromSchemaNode(node, target_index_path)
      ).join(`

`);

  markdown = (
    links_relative_to_path: string
  ) => `## Schemas are divided into five folders:

### Files

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

${this.markdownForSchemaNodesOfParentType("files", links_relative_to_path)}

### Objects

_Describing the structure of OCF -- these contain the common object properties \`id\` and \`comments\`_

${this.markdownForSchemaNodesOfParentType("objects", links_relative_to_path)}

### Enums

_Key enumerations used throughout the schemas_

${this.markdownForSchemaNodesOfParentType("enums", links_relative_to_path)}

### Types

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

${this.markdownForSchemaNodesOfParentType("types", links_relative_to_path)}

### Primitives

_Used for object property composition and enforcing uniform properties across parts of the schema._

${this.markdownForSchemaNodesOfParentType("primitives", links_relative_to_path)}

`;

  replaceTocInReadmeString = (readmeString: string, readmePath: string) =>
    readmeString.slice(0, readmeString.indexOf(README_INSERT_START)) +
    this.markdown(readmePath) +
    readmeString.slice(readmeString.indexOf(README_INSERT_END));
}
