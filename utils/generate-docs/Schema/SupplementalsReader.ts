import fse from "fs-extra";
import readdirp, { EntryInfo } from "readdirp";

/**
 *  Reader loads all supplemental documentation markdown strings into an array.
 */
export default class SupplementalsReader {
  static read = (source: string) => {
    const reader = new SupplementalsReader(source);
    return reader.read();
  };

  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  protected loadSupplementalMarkdown = (
    entryInfo: EntryInfo
  ): Promise<Buffer> => fse.readFile(entryInfo.fullPath);

  protected loadSupplementalMarkdownFromEntryInfos = (
    entryInfos: EntryInfo[]
  ): Promise<Buffer[]> =>
    Promise.all(entryInfos.map(this.loadSupplementalMarkdown));

  read = (): Promise<string[]> =>
    readdirp
      .promise(this.source)
      .then(this.loadSupplementalMarkdownFromEntryInfos)
      .then((buffers) => buffers.map((buffer) => buffer.toString()));
}
