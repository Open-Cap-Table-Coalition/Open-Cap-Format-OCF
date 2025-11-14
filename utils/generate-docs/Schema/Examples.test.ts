import Examples from "./Examples.js";

describe("Examples", () => {
  describe("#findExampleItemsByObjectTypes", () => {
    it("returns all items matching the given object types", () => {
      const examplesJson = [
        {
          items: [
            { object_type: "STOCK_ISSUANCE" },
            { object_type: "STOCK_TRANSFER" },
            { object_type: "VESTING_START" },
          ],
        },
        {
          items: [
            { object_type: "STOCK_ISSUANCE" },
            { object_type: "CONVERTIBLE_ISSUANCE" },
          ],
        },
      ];

      const examples = new Examples(examplesJson);
      const actual = examples.findExampleItemsByObjectTypes(["STOCK_ISSUANCE"]);

      expect(actual).toHaveLength(2);
      expect(actual).toEqual([
        { object_type: "STOCK_ISSUANCE" },
        { object_type: "STOCK_ISSUANCE" },
      ]);
    });

    it("returns empty array when no examples match", () => {
      const examplesJson = [
        {
          items: [
            { object_type: "STOCK_ISSUANCE" },
            { object_type: "STOCK_TRANSFER" },
          ],
        },
      ];

      const examples = new Examples(examplesJson);
      const actual = examples.findExampleItemsByObjectTypes([
        "NONEXISTENT_TYPE",
      ]);

      expect(actual).toHaveLength(0);
    });

    it("handles empty examples array", () => {
      const examples = new Examples([]);
      const actual = examples.findExampleItemsByObjectTypes(["STOCK_ISSUANCE"]);

      expect(actual).toHaveLength(0);
    });

    it("handles examples without items property", () => {
      const examplesJson = [{}];
      const examples = new Examples(examplesJson);
      const actual = examples.findExampleItemsByObjectTypes(["STOCK_ISSUANCE"]);

      expect(actual).toHaveLength(0);
    });
  });
});
