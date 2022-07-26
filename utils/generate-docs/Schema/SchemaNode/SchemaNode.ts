import path from "node:path";
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
      .map((schemaNode) => `- ${schemaNode.markdownOutputLink()}`)
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

  sourcePath = () => `/${this.shortId()}.schema.json`;

  outputPath = () => `/docs/${this.shortId()}.md`;

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

  markdownHeader = () => `:house: [Documentation Home](/README.md)

---

### ${this.title()}

\`${this.id()}\``;

  markdownFooter = () =>
    [
      this.supplementalMarkdowns().length > 0
        ? this.supplementalMarkdowns()
        : null,
      `**Source Code:** ${this.markdownSourceLink()}`,
      this.markdownExamples() ? this.markdownExamples() : null,
      `Copyright © ${format(new Date(), "Y")} Open Cap Table Coalition.`,
    ]
      .flat()
      .filter(Boolean)
      .join("\n\n") + "\n";

  markdownTableType = () => `\`${this.type().toUpperCase()}\``;

  markdownTableDescription = () => this.description().replace(/\n/g, "</br>");

  markdownPropertiesTable = () =>
    markdownTable([
      ["Property", "Type", "Description", "Required"],
      ...this.properties().map((property) => [
        property.id(),
        property.markdownTableType(),
        property.markdownTableDescription(),
        this.required().includes(property.id()) ? "`REQUIRED`" : "-",
      ]),
    ]);

  abstract markdownOutput(): string;

  markdownSourceLink = () => `[${this.shortId()}](${this.sourcePath()})`;

  markdownOutputLink = () => `[${this.shortId()}](${this.outputPath()})`;
}
