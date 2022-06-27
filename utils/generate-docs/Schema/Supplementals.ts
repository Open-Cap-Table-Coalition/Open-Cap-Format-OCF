/**
 * Represents supplemental markdown documentation and the nodes
 * to which the documentation applies.
 */
export default class Supplementals {
  protected readonly supplementalMarkdowns: string[];

  constructor(supplementalMarkdowns: string[]) {
    this.supplementalMarkdowns = supplementalMarkdowns;
  }

  findSupplementalMarkdownByShortId = (shortId: string) =>
    this.supplementalMarkdowns.filter((supplementalMarkdown) =>
      supplementalMarkdown.includes(shortId)
    );
}
