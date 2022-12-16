import path from "node:path";
import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";
import { markdownTable } from "markdown-table";
import { format } from "date-fns";

import Schema from "../Schema.js";
import PropertyFactory, { PropertyJson } from "./Property/Factory.js";

export interface SchemaNodeJson {
  $id: string;
  title: string;
  description: string;
  type: string;
  properties?: { [id: string]: PropertyJson };
  required?: string[];
  allOf?: Array<{ $ref: string }>;
}

/**
 * Abstract class for any schema node. Houses useful, shared behavior.
 */
export default abstract class SchemaNode {
  protected readonly schema: Schema;
  protected readonly json: SchemaNodeJson;

  constructor(schema: Schema, json: SchemaNodeJson) {
    this.schema = schema;
    this.json = json;
  }

  protected type = () => this.json["type"];

  protected basename = () => path.basename(this.id(), ".schema.json");

  protected directory = () =>
    path.dirname(this.id().slice("https://opencaptablecoalition.com/".length));

  protected allOf = (): SchemaNode[] =>
    "allOf" in this.json && this.json["allOf"]
      ? this.json["allOf"].map((schemaNodeRefJson) =>
          this.schema.findSchemaNodeById(schemaNodeRefJson["$ref"])
        )
      : [];

  protected allOfMarkdown = (): string =>
    this.allOf()
      .map(
        (schemaNode) =>
          `- ${schemaNode.mdLinkToNodesMdDocs(this.outputFileAbsolutePath())}`
      )
      .join("\n");

  /**
   * Only those properties that are defined directly in the JSON (as opposed to
   * those that are left blank and meant to be inherited from the allOf array).
   */
  protected directProperties = () =>
    Object.fromEntries(
      Object.entries(this.json["properties"] || {}).filter(
        ([_id, json]) => Object.keys(json).length > 0
      )
    );

  protected allOfPropertiesJson = (): { [id: string]: PropertyJson } =>
    this.allOf().reduce(
      (previousPropertiesJson, schemaNode) => ({
        ...previousPropertiesJson,
        ...schemaNode.propertiesJson(),
      }),
      {}
    );

  protected markdownExamples = (): string | null => null;

  protected supplementalMarkdowns = (): string[] =>
    this.schema.findSupplementalMarkdownsByShortId(this.shortId());

  id = () => this.json["$id"];

  parentType = () => this.shortId().split("/")[1];

  shortId = () => `${this.directory()}/${this.basename()}`;

  title = () => this.json["title"];

  description = () => this.json["description"];

  /**
   * Within the resulting /docs folder, what is the absolute path for the resulting markdown file when written to disk?
   * @returns "absolute" path from the /docs folder to resulting MD.
   */
  outputFileAbsolutePath = () => `docs/schema_markdown/${this.shortId()}.md`;

  /**
   * Using repo root as root, what is the absolute path of the schema used to generate this MD file?
   * @returns "absolute" path from the repo root to the source schema use to generate the MD.
   */
  sourceSchemaAbsolutePath = () => `${this.shortId()}.schema.json`;

  // schema/primitives/types/conversion_rights/ConversionRight.schema.json
  // docs/markdown/INDEX.md
  relativePathToSource = () =>
    `${relativePathToOtherPath(
      this.sourceSchemaAbsolutePath(),
      this.outputFileAbsolutePath()
    )}/${this.basename()}.schema.json`;

  relativePathToOutputDocumentation = (relative_to_absolute_path: string) =>
    `${relativePathToOtherPath(
      this.outputFileAbsolutePath(),
      relative_to_absolute_path
    )}/${this.basename()}.md`;

  propertiesJson = () => this.json["properties"];

  properties = () =>
    Object.entries({
      ...this.allOfPropertiesJson(),
      ...this.directProperties(),
    }).map(([id, json]: [string, PropertyJson]) =>
      PropertyFactory.build(this.schema, json, id)
    );

  required = (): string[] => [
    ...(this.json["required"] || []),
    ...this.allOf().flatMap((schemaNode) => schemaNode.required()),
  ];

  markdownHeader =
    () => `:house: [Documentation Home](${relativePathToOtherPath(
      "../README.md",
      this.directory()
    )}/README.md)

---

### ${this.title()}

\`${this.id()}\``;

  markdownFooter = () =>
    [
      this.supplementalMarkdowns().length > 0
        ? this.supplementalMarkdowns()
        : null,
      `**Source Code:** ${this.mdLinkToSourceSchema()}`,
      this.markdownExamples() ? this.markdownExamples() : null,
      `Copyright © ${format(new Date(), "Y")} Open Cap Table Coalition.`,
    ]
      .flat()
      .filter(Boolean)
      .join("\n\n") + "\n";

  markdownTableType = (in_markdown_file_path: string) =>
    `\`${this.type().toUpperCase()}\``;

  markdownTableDescription = () => this.description().replace(/\n/g, "</br>");

  markdownPropertiesTable = () =>
    markdownTable([
      ["Property", "Type", "Description", "Required"],
      ...this.properties().map((property) => [
        property.id(),
        property.markdownTableType(this.outputFileAbsolutePath()),
        property.markdownTableDescription(),
        this.required().includes(property.id()) ? "`REQUIRED`" : "-",
      ]),
    ]);

  abstract markdownOutput(): string;

  mdLinkToSourceSchema = () =>
    `[${this.shortId()}](${this.relativePathToSource()})`;

  mdLinkToNodesMdDocs = (relative_to_absolute_path: string) =>
    `[${this.shortId()}](${this.relativePathToOutputDocumentation(
      relative_to_absolute_path
    )})`;
}
