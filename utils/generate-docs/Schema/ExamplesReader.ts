import readdirp, { EntryInfo } from "readdirp";

import { ExampleJson } from "./Examples.js";

import { pathToFileURL } from "url";

/**
 *  Reader parses a file tree of example implementations of JSON data conforming
 * to the OCF and loads into JS objects.
 */
export default class ExamplesReader {
  static read = (source: string) => {
    const reader = new ExamplesReader(source);
    return reader.read();
  };

  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  protected loadJsonFromEntryInfo = (
    entryInfo: EntryInfo
  ): Promise<ExampleJson> =>
    import(pathToFileURL(entryInfo.fullPath).href).then(
      (json: { default: ExampleJson }) => json["default"]
    );

  protected loadJsonFromEntryInfos = (
    entryInfos: EntryInfo[]
  ): Promise<ExampleJson[]> =>
    Promise.all(entryInfos.map(this.loadJsonFromEntryInfo));

  read = (): Promise<ExampleJson[]> =>
    readdirp.promise(this.source).then(this.loadJsonFromEntryInfos);
}
