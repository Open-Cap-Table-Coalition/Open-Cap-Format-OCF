import Supplementals from "./Supplementals.js";

const RELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE = `
# This is a test of supplemental documentation

BODY BODY BODY

# See Also:

- [schema/objects/Issuer](/docs/schema/objects/Issuer.md)
`;

const IRRELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE = `
# This is a test of supplemental documentation

BODY BODY BODY

# See Also:

- [schema/objects/Stakeholder](/docs/schema/objects/Stakeholder.md)
`;

describe("Supplementals", () => {
  describe("#findSupplementalMarkdownsByShortId", () => {
    it("returns all markdowns that include the shortId string somewhere in the body", () => {
      const supplementals = new Supplementals([
        RELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE,
        IRRELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE,
      ]);

      const actual = supplementals.findSupplementalMarkdownByShortId(
        "schema/objects/Issuer"
      );

      expect(actual).toEqual(
        expect.arrayContaining([RELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE])
      );
      expect(actual).not.toEqual(
        expect.arrayContaining([IRRELEVANT_SUPPLEMENTAL_MARKDOWN_FIXTURE])
      );
    });
  });
});
