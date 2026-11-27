import type { RawSchemaJson } from "./SchemaComposer.js";
import { basenameFromId } from "./TypeScriptGenerator.js";

/** Read source notices from the original schema collection, before dispatchers
 *  are collapsed and the version files lose their individual identities. */
export function sourceNotices(
  schemas: RawSchemaJson[],
  prefix: "#" | "//"
): string[] {
  const groups = new Map<string, string[]>();
  for (const schema of schemas) {
    if (typeof schema.$comment !== "string") continue;
    const attribution = schema.$comment
      .trim()
      .match(/^(Copyright [^\r\n]+) \/ Original File: (\S+)$/);
    if (!attribution) continue;
    const [, notice, url] = attribution;
    const title = (schema.title ?? basenameFromId(schema.$id))
      .replace(/\s+/g, " ")
      .trim();
    const entries = groups.get(notice) ?? [];
    entries.push(`${prefix} ${title}\n${prefix}   ${url}`);
    groups.set(notice, entries);
  }

  const blocks: string[] = [];
  for (const notice of [...groups.keys()].sort()) {
    blocks.push(
      [
        `${prefix} ${notice}.`,
        `${prefix} This module includes material copied from or derived from the following OCF schema collection.`,
        ...groups.get(notice)!.sort(),
      ].join("\n")
    );
  }
  return blocks;
}
