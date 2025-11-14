import ComposedSchemaNode, { ComposedSchema } from "./ComposedSchema.js";

describe("ComposedSchema", () => {
  describe("toJSONSchema", () => {
    it("serializes a simple composed schema back to JSONSchema", () => {
      const composedData: ComposedSchema = {
        $id: "https://example.com/schema/objects/TestObject.schema.json",
        $comment: "Copyright notice",
        title: "Test Object",
        description: "A test object",
        type: "object",
        composedFrom: [],
        schemaType: "object",
        schemaPath: "schema/objects/TestObject",
        properties: new Map([
          [
            "id",
            {
              id: "id",
              json: { type: "string", description: "The ID" },
              source: "direct",
              description: "The ID",
            },
          ],
        ]),
        required: ["id"],
      };

      const node = new ComposedSchemaNode(composedData);
      const jsonSchema = node.toJSONSchema();

      expect(jsonSchema.$id).toBe(
        "https://example.com/schema/objects/TestObject.schema.json"
      );
      expect(jsonSchema.title).toBe("Test Object");
      expect(jsonSchema.type).toBe("object");
      expect(jsonSchema.properties).toHaveProperty("id");
      expect(jsonSchema.required).toEqual(["id"]);
    });

    it("preserves type-specific fields", () => {
      const composedData: ComposedSchema = {
        $id: "https://example.com/schema/enums/TestEnum.schema.json",
        title: "Test Enum",
        description: "A test enum",
        composedFrom: [],
        schemaType: "enum",
        schemaPath: "schema/enums/TestEnum",
        properties: new Map(),
        required: [],
        enum: ["A", "B", "C"],
      };

      const node = new ComposedSchemaNode(composedData);
      const jsonSchema = node.toJSONSchema();

      expect(jsonSchema.enum).toEqual(["A", "B", "C"]);
    });

    it("preserves array type fields", () => {
      const composedData: ComposedSchema = {
        $id: "https://example.com/schema/types/TestArray.schema.json",
        title: "Test Array",
        description: "A test array type",
        type: "array",
        composedFrom: [],
        schemaType: "type",
        schemaPath: "schema/types/TestArray",
        properties: new Map(),
        required: [],
        items: { type: "string", description: "Array item" },
        minItems: 1,
        maxItems: 10,
      };

      const node = new ComposedSchemaNode(composedData);
      const jsonSchema = node.toJSONSchema();

      expect(jsonSchema.type).toBe("array");
      expect(jsonSchema.items).toEqual({
        type: "string",
        description: "Array item",
      });
      expect(jsonSchema.minItems).toBe(1);
      expect(jsonSchema.maxItems).toBe(10);
    });
  });

  describe("getters", () => {
    it("provides access to composed data", () => {
      const composedData: ComposedSchema = {
        $id: "https://example.com/schema/objects/Test.schema.json",
        title: "Test",
        description: "A test",
        composedFrom: [
          "https://example.com/schema/primitives/Base.schema.json",
        ],
        schemaType: "object",
        schemaPath: "schema/objects/Test",
        properties: new Map([
          [
            "field1",
            {
              id: "field1",
              json: { type: "string", description: "Field 1" },
              source: "direct",
              description: "Field 1",
            },
          ],
          [
            "field2",
            {
              id: "field2",
              json: { type: "string", description: "Field 2" },
              source: "inherited",
              inheritedFrom:
                "https://example.com/schema/primitives/Base.schema.json",
              description: "Field 2",
            },
          ],
        ]),
        required: ["field1", "field2"],
      };

      const node = new ComposedSchemaNode(composedData);

      expect(node.getId()).toBe(
        "https://example.com/schema/objects/Test.schema.json"
      );
      expect(node.getSchemaType()).toBe("object");
      expect(node.getSchemaPath()).toBe("schema/objects/Test");
      expect(node.getComposedFrom()).toEqual([
        "https://example.com/schema/primitives/Base.schema.json",
      ]);
      expect(node.getRequired()).toEqual(["field1", "field2"]);
      expect(node.getProperties().size).toBe(2);
    });

    it("distinguishes direct and inherited properties", () => {
      const composedData: ComposedSchema = {
        $id: "https://example.com/schema/objects/Test.schema.json",
        title: "Test",
        description: "A test",
        composedFrom: [],
        schemaType: "object",
        schemaPath: "schema/objects/Test",
        properties: new Map([
          [
            "direct",
            {
              id: "direct",
              json: { type: "string", description: "Direct" },
              source: "direct",
              description: "Direct",
            },
          ],
          [
            "inherited",
            {
              id: "inherited",
              json: { type: "string", description: "Inherited" },
              source: "inherited",
              inheritedFrom: "https://example.com/schema/primitives/Base",
              description: "Inherited",
            },
          ],
        ]),
        required: [],
      };

      const node = new ComposedSchemaNode(composedData);

      const directProps = node.getDirectProperties();
      const inheritedProps = node.getInheritedProperties();

      expect(directProps).toHaveLength(1);
      expect(directProps[0].id).toBe("direct");

      expect(inheritedProps).toHaveLength(1);
      expect(inheritedProps[0].id).toBe("inherited");
      expect(inheritedProps[0].inheritedFrom).toBe(
        "https://example.com/schema/primitives/Base"
      );
    });
  });

  describe("compatibility wrapper detection", () => {
    it("identifies compatibility wrappers", () => {
      const wrapperData: ComposedSchema = {
        $id: "https://example.com/schema/objects/Wrapper.schema.json",
        title: "Wrapper",
        description: "A wrapper",
        composedFrom: ["https://example.com/schema/objects/Actual.schema.json"],
        schemaType: "object",
        schemaPath: "schema/objects/Wrapper",
        properties: new Map([
          [
            "object_type",
            {
              id: "object_type",
              json: { const: "WRAPPER" },
              source: "direct",
            },
          ],
        ]),
        required: [],
        isCompatibilityWrapper: true,
      };

      const node = new ComposedSchemaNode(wrapperData);

      expect(node.getIsCompatibilityWrapper()).toBe(true);
      expect(node.getWrappedSchemaId()).toBe(
        "https://example.com/schema/objects/Actual.schema.json"
      );
    });

    it("returns null for non-wrappers", () => {
      const normalData: ComposedSchema = {
        $id: "https://example.com/schema/objects/Normal.schema.json",
        title: "Normal",
        description: "A normal object",
        composedFrom: [],
        schemaType: "object",
        schemaPath: "schema/objects/Normal",
        properties: new Map(),
        required: [],
      };

      const node = new ComposedSchemaNode(normalData);

      expect(node.getIsCompatibilityWrapper()).toBe(false);
      expect(node.getWrappedSchemaId()).toBeNull();
    });
  });
});
