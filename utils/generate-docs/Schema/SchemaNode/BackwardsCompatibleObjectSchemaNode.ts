import { format } from "date-fns";
import path from "node:path";
import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";

import { repo_raw_url_root } from "../../../schema-utils/Constants.js";
import Schema from "../Schema.js";
import { PropertyJson } from "./Property/Factory.js";
import SchemaNode from "./SchemaNode.js";

export interface BackwardsCompatibleObjectSchemaNodeJson {
  $id: string;
  title: string;
  description: string;
  allOf: {
    $ref: string;
  }[];
  properties: {
    object_type: { const: string };
  };
}

/**
 * Abstract class for any schema node. Houses useful, shared behavior.
 */
export default class BackwardsCompatibleObjectSchemaNode extends SchemaNode {
  protected readonly replacementSchemaId: string;

  constructor(schema: Schema, json: BackwardsCompatibleObjectSchemaNodeJson) {
    super(schema, json);

    if (this.json && this.json.allOf && this.json.allOf.length > 0) {
      this.replacementSchemaId = this.json.allOf[0]["$ref"];
    } else {
      throw new Error(
        "BackwardsCompatibleObjectSchemaNode must have an allOf array with at least 1 elements."
      );
    }
  }

  type = () => this.schema.findSchemaNodeById(this.replacementSchemaId).type();

  protected basename = () => path.basename(this.id(), ".schema.json");

  protected directory = () =>
    path.dirname(this.id().slice(`${repo_raw_url_root}/main/`.length));

  protected allOf = (): SchemaNode[] => [];

  protected allOfMarkdown = (): string => "";

  /**
   * Only those properties that are defined directly in the JSON (as opposed to
   * those that are left blank and meant to be inherited from the allOf array).
   */
  protected directProperties = () => {
    return {};
  };

  protected allOfPropertiesJson = (): { [id: string]: PropertyJson } => {
    return {};
  };

  protected markdownExamples = (): string | null => null;

  protected supplementalMarkdowns = (): string[] => [];

  id = () => this.json["$id"];

  rawJson = () => this.json;

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

  protected objectDataTypeDescriptionBlock = (): string => {
    let text_block = "**Data Type:** `";
    let object_type_field = (
      this.json as BackwardsCompatibleObjectSchemaNodeJson
    ).properties.object_type;
    text_block +=
      "OCF Object - " + object_type_field["const"].toUpperCase() + "`";
    return text_block;
  };

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

  relativeLinkToParent = () => {
    let parent = this.schema.findSchemaNodeById(this.replacementSchemaId);
    let path_to_parent = parent.relativePathToOutputDocumentation(
      this.outputFileAbsolutePath()
    );
    return `[${parent.shortId()}](${path_to_parent})`;
  };

  markdownHeader = () => `### ${this.title()}

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

  markdownTableType = () => `\`${this.type().toUpperCase()}\``;

  markdownTableDescription = () => this.description().replace(/\n/g, "</br>");

  markdownOutput = () => `${this.markdownHeader()}

  **Description:** _${this.description()}_

  ${this.objectDataTypeDescriptionBlock()}

  **Compatiblity Wrapper For:** ${this.relativeLinkToParent()}

  ${this.markdownFooter()}`;

  mdLinkToSourceSchema = () =>
    `[${this.shortId()}](${this.relativePathToSource()})`;

  mdLinkToNodesMdDocs = (relative_to_absolute_path: string) =>
    `[${this.shortId()}](${this.relativePathToOutputDocumentation(
      relative_to_absolute_path
    )})`;
}
