import SchemaComposer from "./SchemaComposer.js";
import { SchemaNodeJson } from "../Schema/SchemaNode/SchemaNode.js";

describe("SchemaComposer", () => {
  describe("composition", () => {
    it("composes a simple schema without allOf", () => {
      const schemaJson: SchemaNodeJson = {
        $id: "https://example.com/schema/objects/TestObject.schema.json",
        title: "Test Object",
        description: "A test object",
        type: "object",
        properties: {
          id: { type: "string", description: "The ID" },
          name: { type: "string", description: "The name" },
        },
        required: ["id"],
      };

      const composer = new SchemaComposer([schemaJson]);
      const composed = composer.composeAll();

      expect(composed).toHaveLength(1);
      expect(composed[0].getId()).toBe(
        "https://example.com/schema/objects/TestObject.schema.json"
      );
      expect(composed[0].getData().title).toBe("Test Object");
      expect(composed[0].getSchemaType()).toBe("object");

      const properties = Array.from(composed[0].getProperties().keys());
      expect(properties).toContain("id");
      expect(properties).toContain("name");
    });

    it("composes schema with allOf inheritance", () => {
      const primitiveSchema: SchemaNodeJson = {
        $id: "https://example.com/schema/primitives/TestPrimitive.schema.json",
        title: "Test Primitive",
        description: "A test primitive",
        type: "object",
        properties: {
          base_field: { type: "string", description: "Base field" },
        },
        required: ["base_field"],
      };

      const objectSchema: SchemaNodeJson = {
        $id: "https://example.com/schema/objects/TestObject.schema.json",
        title: "Test Object",
        description: "A test object",
        type: "object",
        allOf: [
          {
            $ref: "https://example.com/schema/primitives/TestPrimitive.schema.json",
          },
        ],
        properties: {
          object_field: { type: "string", description: "Object field" },
        },
        required: ["object_field"],
      };

      const composer = new SchemaComposer([primitiveSchema, objectSchema]);
      const composed = composer.composeAll();

      const objectComposed = composed.find(
        (s) =>
          s.getId() ===
          "https://example.com/schema/objects/TestObject.schema.json"
      );

      expect(objectComposed).toBeDefined();

      const properties = Array.from(objectComposed!.getProperties().keys());
      expect(properties).toContain("base_field");
      expect(properties).toContain("object_field");

      const required = objectComposed!.getRequired();
      expect(required).toContain("base_field");
      expect(required).toContain("object_field");
    });

    it("detects compatibility wrapper pattern", () => {
      const actualSchema: SchemaNodeJson = {
        $id: "https://example.com/schema/objects/ActualObject.schema.json",
        title: "Actual Object",
        description: "The actual object",
        type: "object",
        properties: {
          field: { type: "string", description: "A field" },
        },
      };

      const wrapperSchema: SchemaNodeJson = {
        $id: "https://example.com/schema/objects/WrapperObject.schema.json",
        title: "Wrapper Object",
        description: "A compatibility wrapper",
        type: "object",
        allOf: [
          {
            $ref: "https://example.com/schema/objects/ActualObject.schema.json",
          },
        ],
        properties: {
          object_type: { const: "WRAPPER_OBJECT" },
        },
      };

      const composer = new SchemaComposer([actualSchema, wrapperSchema]);
      const composed = composer.composeAll();

      const wrapper = composed.find(
        (s) =>
          s.getId() ===
          "https://example.com/schema/objects/WrapperObject.schema.json"
      );

      expect(wrapper).toBeDefined();
      expect(wrapper!.getIsCompatibilityWrapper()).toBe(true);
      expect(wrapper!.getWrappedSchemaId()).toBe(
        "https://example.com/schema/objects/ActualObject.schema.json"
      );
    });

    it("infers schema type from path", () => {
      const schemas: any[] = [
        {
          $id: "https://example.com/schema/objects/Test.schema.json",
          title: "Test",
          description: "Test",
          type: "object",
        },
        {
          $id: "https://example.com/schema/enums/TestEnum.schema.json",
          title: "Test Enum",
          description: "Test",
          enum: ["A", "B"],
        },
        {
          $id: "https://example.com/schema/types/TestType.schema.json",
          title: "Test Type",
          description: "Test",
          type: "string",
        },
        {
          $id: "https://example.com/schema/primitives/TestPrimitive.schema.json",
          title: "Test Primitive",
          description: "Test",
          type: "object",
        },
        {
          $id: "https://example.com/schema/files/TestFile.schema.json",
          title: "Test File",
          description: "Test",
          type: "object",
        },
      ];

      const composer = new SchemaComposer(schemas);
      const composed = composer.composeAll();

      expect(
        composed.find((s) => s.getId().includes("/objects/"))?.getSchemaType()
      ).toBe("object");
      expect(
        composed.find((s) => s.getId().includes("/enums/"))?.getSchemaType()
      ).toBe("enum");
      expect(
        composed.find((s) => s.getId().includes("/types/"))?.getSchemaType()
      ).toBe("type");
      expect(
        composed
          .find((s) => s.getId().includes("/primitives/"))
          ?.getSchemaType()
      ).toBe("primitive");
      expect(
        composed.find((s) => s.getId().includes("/files/"))?.getSchemaType()
      ).toBe("file");
    });
  });
});
