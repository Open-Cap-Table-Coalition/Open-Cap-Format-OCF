import path from "node:path";
import { fileURLToPath } from "url";

import SchemaReader from "./SchemaReader.js";
import SchemaWriter from "./SchemaWriter.js";
import ExamplesReader from "./ExamplesReader.js";
import SupplementalsReader from "./SupplementalsReader.js";
import Supplementals from "./Supplementals.js";
import Examples, { ExampleJson } from "./Examples.js";
import SchemaNodeFactory, {
  SchemaNode,
  SchemaNodeJson,
} from "./SchemaNode/Factory.js";
import {
  composeAll,
  hasVersionSuffix,
  isVersionWrapper,
  versionRefsOf,
} from "../../schema-utils/SchemaComposer.js";

export type { SchemaNodeJson };
export type { ExampleJson };

export const REPO_ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../.."
);

/**
 *  Schema represents the OCF schema format.
 */
export default class Schema {
  static generateDocs = async () => {
    const schemaNodeJsons = await SchemaReader.read(
      path.join(REPO_ROOT, "schema")
    );
    const exampleJsons = await ExamplesReader.read(
      path.join(REPO_ROOT, "samples")
    );
    const supplementalMarkdowns = await SupplementalsReader.read(
      path.join(REPO_ROOT, "docs", "supplemental")
    );
    const schema = new Schema(
      schemaNodeJsons,
      exampleJsons,
      supplementalMarkdowns
    );
    await SchemaWriter.write(REPO_ROOT, schema);

    // Note - switched off generating TOCs per TWG discussion
  };

  readonly schemaNodes: SchemaNode[];
  readonly examples: Examples;
  readonly supplementals: Supplementals;
  /** `$id` -> node index for O(1) `findSchemaNodeById` (called once per allOf
   *  ref, property `$ref`, and version ref while rendering). */
  private readonly nodesById: Map<string, SchemaNode>;

  constructor(
    schemaNodeJsons: SchemaNodeJson[],
    exampleJsons: ExampleJson[] = [],
    supplementalMarkdowns: string[] = []
  ) {
    const { composed } = composeAll(schemaNodeJsons as any[], {
      onMissingRef: "skip",
    });

    // Map each versioned shape's `$id` -> the dispatcher that owns it (whose
    // `anyOf` references it). Ownership — not the `.v#` filename — decides
    // whether a shape is folded into a dispatcher's page or documented on its
    // own, so a dispatcher and its versions stay consistent.
    const versionShapeOwners = new Map<string, string>();
    for (const json of composed) {
      if (isVersionWrapper(json)) {
        for (const ref of versionRefsOf(json))
          versionShapeOwners.set(ref, json.$id);
      }
    }

    // A file that follows the versioned-shape (`.v#`) naming convention but is
    // referenced by no dispatcher would otherwise be folded away into a page
    // that never gets written — surface it loudly instead of dropping it.
    for (const json of composed) {
      if (
        hasVersionSuffix(json) &&
        !isVersionWrapper(json) &&
        !versionShapeOwners.has(json.$id)
      ) {
        console.warn(
          `Schema ${json.$id} follows the versioned-shape (.v#) naming convention but no version dispatcher references it; it will be documented as a standalone schema.`
        );
      }
    }

    this.schemaNodes = composed.map((json) =>
      SchemaNodeFactory.build(
        this,
        json as unknown as SchemaNodeJson,
        versionShapeOwners
      )
    );
    this.nodesById = new Map(this.schemaNodes.map((node) => [node.id(), node]));
    this.examples = new Examples(exampleJsons);
    this.supplementals = new Supplementals(supplementalMarkdowns);
  }

  findSchemaNodeById = (id: string) => {
    const schemaNode = this.nodesById.get(id);
    if (!schemaNode) {
      throw new Error(`Cannot find SchemaNode '${id}'`);
    }
    return schemaNode;
  };

  findExampleItemsByObjectTypes = (objectTypes: string[]) =>
    this.examples.findExampleItemsByObjectTypes(objectTypes);

  findSchemaNodeBySchemaRelativeId = (partialId: string) => {
    const parentType = partialId.split("/")[0];
    const candidates = this.filterSchemaNodesByParentType(parentType);
    if (partialId === "enums/ObjectType.schema.json") {
      console.log(parentType);
      console.log(candidates.map((c) => c.id()).join("\n"));
    }
    const schemaNode = candidates.find((node) => node.id().endsWith(partialId));

    if (!schemaNode) {
      throw new Error(`Cannot find SchemaNode '.../${partialId}'`);
    }
    return schemaNode;
  };

  findSupplementalMarkdownsByShortId = (shortId: string) =>
    this.supplementals.findSupplementalMarkdownByShortId(shortId);

  filterSchemaNodesByParentType = (parentType: string) =>
    this.schemaNodes.filter(
      (schemaNode) => schemaNode.parentType() === parentType
    );
}
