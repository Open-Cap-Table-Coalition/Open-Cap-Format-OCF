import { markdownTable } from "markdown-table";

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

  protected sourceFilename = (suffix: string) => {
    const filename = this.id().split("/").at(-1);
    if (!filename) {
      throw new Error(`Could not parse filename from id: ${this.id()}`);
    }
    return (
      filename
        .split("_")
        .map((str) => str[0].toUpperCase() + str.slice(1))
        .join("") + suffix
    );
  };

  protected outputFilename = () => {
    const baseName = this.shortId().split("/").slice(1).join("-");
    if (!baseName) {
      throw new Error(`Could not parse filename from id: ${this.id()}`);
    }
    return `schema-${baseName}.md`;
  };

  protected directory = () => this.shortId().split("/").slice(0, -1).join("/");

  protected allOf = (): SchemaNode[] =>
    "allOf" in this.json && this.json["allOf"]
      ? this.json["allOf"].map((schemaNodeRefJson) =>
          this.schema.findSchemaNodeById(schemaNodeRefJson["$ref"])
        )
      : [];

  protected allOfMarkdown = (): string =>
    this.allOf().map(
      (schemaNode) => `- [${schemaNode.shortId()}](${schemaNode.outputPath()})`
    ).join(`
`);

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

  id = () => this.json["$id"];

  parentType = () => this.shortId().split("/")[1];

  shortId = () => this.id().slice("https://opencaptablecoalition.com/".length);

  title = () => this.json["title"];

  description = () => this.json["description"];

  sourcePath = () =>
    `${this.directory()}/${this.sourceFilename(".schema.json")}`;

  outputPath = () => `${this.directory()}/${this.outputFilename()}`;

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

  markdownTableType = () => `\`${this.type().toUpperCase()}\``;

  markdownTableDescription = () =>
    this.description().replace(/\r?\n|\r/, "</br>");

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

  markdownSourceLink = () => `[${this.shortId()}](/${this.sourcePath()})`;
}
