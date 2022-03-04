import readdirp, { EntryInfo } from "readdirp";

import { SchemaNodeJson } from "./Schema.js";

/**
 *  Reader parses a file tree of JSON schema files and converts them into
 *  SchemaNode objects.
 */
export default class SchemaReader {
  static read = (source: string) => {
    const reader = new SchemaReader(source);
    return reader.read();
  };

  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  protected loadJsonFromEntryInfo = (
    entryInfo: EntryInfo
  ): Promise<SchemaNodeJson> =>
    import(entryInfo.fullPath).then(
      (json: { default: SchemaNodeJson }) => json["default"]
    );

  protected loadJsonFromEntryInfos = (
    entryInfos: EntryInfo[]
  ): Promise<SchemaNodeJson[]> =>
    Promise.all(entryInfos.map(this.loadJsonFromEntryInfo));

  read = (): Promise<SchemaNodeJson[]> =>
    readdirp.promise(this.source).then(this.loadJsonFromEntryInfos);
}
