import { markdownTable } from "markdown-table";
import path from "node:path";
import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";
import {
  DEFAULT_STABILITY,
  Stability,
  STABILITY_BADGE,
  STABILITY_NOTE,
  stabilityOf,
} from "../../../schema-utils/SchemaComposer.js";

import { format } from "date-fns";
import Schema from "../Schema.js";
import PropertyFactory, { PropertyJson } from "./Property/Factory.js";

export interface SchemaNodeJson {
  $id: string;
  title: string;
  description: string;
  type?: string;
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

  type = () => (this.json?.type ? this.json.type : "DOC GENERATOR ERROR");

  protected basename = () => path.basename(this.id(), ".schema.json");

  protected directory = () => {
    const id = this.id();
    const splitter = id.includes("/schema/")
      ? { indicator: "/schema/", slashIndex: 0 } // handles GitHub paths
      : { indicator: "/v/", slashIndex: 1 }; // handles schema.opencaptablecoalition.com paths

    const subpath = id
      .split(splitter.indicator)[1]
      .split("/")
      .slice(splitter.slashIndex)
      .join("/");
    return path.dirname(`schema/${subpath}`);
  };

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

  protected markdownExamples = (): string | null => null;

  protected supplementalMarkdowns = (): string[] =>
    this.schema.findSupplementalMarkdownsByShortId(this.shortId());

  rawJson = () => this.json;

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
    Object.entries(this.json["properties"] || {}).map(
      ([id, json]: [string, PropertyJson]) =>
        PropertyFactory.build(this.schema, json, id)
    );

  required = (): string[] => this.json["required"] || [];

  /** This schema's structured stability flag (defaults to `stable`). */
  stability = (): Stability => stabilityOf(this.json as any);

  /**
   * A one-line stability "pill" rendered under a schema's header for any
   * non-`stable` shape, so a reader sees at a glance that it is pre-release or
   * on its way out (e.g. a `planned_deprecation` type). Empty for the default
   * `stable`, so ordinary pages are unchanged. Reuses the same badge/note text
   * the version-dispatcher sections use, for one consistent vocabulary.
   */
  protected markdownStabilityPill = (): string => {
    const stability = this.stability();
    if (stability === DEFAULT_STABILITY) return "";
    return `> ${STABILITY_BADGE[stability]} — ${STABILITY_NOTE[stability]}`;
  };

  markdownHeader = () => {
    const pill = this.markdownStabilityPill();
    return `### ${this.title()}

\`${this.id()}\`${pill ? `\n\n${pill}` : ""}`;
  };

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

  markdownPropertiesTable = (
    forOutputPath: string = this.outputFileAbsolutePath()
  ) =>
    markdownTable([
      ["Property", "Type", "Description", "Required"],
      ...this.properties().map((property) => [
        property.id(),
        property.markdownTableType(forOutputPath),
        property.markdownTableDescription(),
        this.required().includes(property.id()) ? "`REQUIRED`" : "-",
      ]),
    ]);

  /**
   * Whether this node is written to its own standalone markdown file. Almost
   * every node is; versioned subschemas are the exception — they are folded
   * into their parent dispatcher's page instead of getting a disconnected page
   * of their own (see `VersionedSubschemaNode`).
   */
  writesOwnDoc = (): boolean => true;

  /**
   * The body of this node when it is folded into a version dispatcher's page as
   * a section (the content between the section heading and the source link),
   * with links resolved relative to `forOutputPath` (the parent page). This is
   * what lets a dispatcher render versioned shapes of ANY kind — object, type,
   * or enum — uniformly: each partition overrides this to render its own
   * payload. The default covers scalar / other shapes.
   */
  markdownVersionBody = (
    forOutputPath: string = this.outputFileAbsolutePath()
  ): string => {
    const properties = this.propertiesJson();
    const parts = [`**Data Type:** \`${this.type().toUpperCase()}\``];
    if (properties && Object.keys(properties).length > 0) {
      parts.push(
        `**Properties:**\n\n${this.markdownPropertiesTable(forOutputPath)}`
      );
    }
    return parts.join("\n\n");
  };

  /**
   * A version-section / object body of a `**Data Type:** …` line followed by a
   * properties table — the shape shared by object and type-object renderings.
   * Callers supply the already-formatted data-type markdown so each kind keeps
   * its own label (e.g. `OCF Object - X` vs `OCF TYPE`).
   */
  protected dataTypeWithPropertiesTable = (
    dataTypeMarkdown: string,
    forOutputPath: string = this.outputFileAbsolutePath()
  ): string =>
    `${dataTypeMarkdown}

**Properties:**

${this.markdownPropertiesTable(forOutputPath)}`;

  /**
   * The `**Examples:**` block for a set of `object_type` values, pulling the
   * matching sample items from the schema. Empty string when there are none,
   * so a node with no samples contributes nothing. Shared by object nodes and
   * the version dispatcher so both surface real-world samples.
   */
  protected exampleItemsMarkdown = (objectTypes: string[]): string => {
    const items = this.schema.findExampleItemsByObjectTypes(objectTypes);
    return items.length > 0
      ? `**Examples:**

\`\`\`json
${JSON.stringify(items, null, 2)}
\`\`\``
      : "";
  };

  abstract markdownOutput(): string;

  mdLinkToSourceSchema = () =>
    `[${this.shortId()}](${this.relativePathToSource()})`;

  mdLinkToNodesMdDocs = (relative_to_absolute_path: string) =>
    `[${this.shortId()}](${this.relativePathToOutputDocumentation(
      relative_to_absolute_path
    )})`;
}
