import path from "node:path";
import { fileURLToPath } from "url";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import SchemaReader from "../Schema/SchemaReader.js";
import ExamplesReader from "../Schema/ExamplesReader.js";
import SchemaComposer from "./SchemaComposer.js";

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../../..");

describe("Schema Composition Validation", () => {
  let composedSchemas: Map<string, any>;
  let exampleFiles: Array<{ items: Array<any>; filePath?: string }>;
  let ajv: Ajv;

  beforeAll(async () => {
    console.log("\nLoading schemas...");
    // Load all schemas and compose them
    const schemaPath = path.join(REPO_ROOT, "schema");
    console.log(`Schema path: ${schemaPath}`);
    const schemaNodeJsons = await SchemaReader.read(schemaPath);
    console.log(`Loaded ${schemaNodeJsons.length} raw schemas`);
    const composer = new SchemaComposer(schemaNodeJsons);
    const composed = composer.composeAll();
    console.log(`Composed ${composed.length} schemas`);

    // Build a map of object_type -> composed schema
    composedSchemas = new Map();
    for (const schema of composed) {
      const data = schema.getData();
      const objectTypeProp = data.properties.get("object_type");

      if (objectTypeProp) {
        const jsonSchema = schema.toJSONSchema();

        // Handle both const and enum for object_type
        if ("const" in objectTypeProp.json) {
          const objectType = objectTypeProp.json.const as string;
          composedSchemas.set(objectType, jsonSchema);
        } else if (
          "enum" in objectTypeProp.json &&
          Array.isArray(objectTypeProp.json.enum)
        ) {
          // For schemas with multiple valid object_type values (like EquityCompensationIssuance),
          // register the schema under ALL enum values
          for (const objectType of objectTypeProp.json.enum) {
            composedSchemas.set(objectType as string, jsonSchema);
          }
        }
      }
    }

    // Load all example files
    const samplesPath = path.join(REPO_ROOT, "samples");
    const examplesJson = await ExamplesReader.read(samplesPath);
    // ExamplesReader returns full file objects with "items" array
    exampleFiles = examplesJson.filter(
      (ex: any) => ex.items && Array.isArray(ex.items)
    ) as Array<{ items: Array<any> }>;

    // Set up AJV validator with formats and all schemas loaded
    ajv = new Ajv({
      strict: false,
      validateFormats: true,
      allErrors: true,
    });
    addFormats(ajv);

    // Load ALL raw schemas into Ajv so it can resolve $ref URLs
    // The raw schemas have $id like "https://raw.githubusercontent.com/..."
    // so Ajv will use them to resolve references
    for (const schema of schemaNodeJsons) {
      try {
        ajv.addSchema(schema);
      } catch (err) {
        // Skip duplicates or invalid schemas
      }
    }

    console.log(`\nLoaded ${composedSchemas.size} composed schemas`);
    console.log(`Loaded ${exampleFiles.length} example files with items`);

    // Debug: show some object types
    const objectTypes = Array.from(composedSchemas.keys());
    console.log(`\nSample object types (first 10):`);
    objectTypes.slice(0, 10).forEach((type) => console.log(`  - ${type}`));
  });

  describe("Every example must validate against its composed schema", () => {
    it("finds example files to test", () => {
      expect(exampleFiles.length).toBeGreaterThan(0);
    });

    it("has composed schemas for validation", () => {
      expect(composedSchemas.size).toBeGreaterThan(0);
    });

    it("validates all examples against their composed schemas", () => {
      const failures: Array<{
        objectType: string;
        example: any;
        errors: any;
      }> = [];
      const skipped: Array<{
        objectType: string;
        exampleId: string;
        filePath: string;
      }> = [];
      let totalExamples = 0;
      let validatedExamples = 0;

      // Iterate through all example files
      for (const exampleFile of exampleFiles) {
        for (const item of exampleFile.items) {
          totalExamples++;
          const objectType = item.object_type;

          // Find the composed schema for this object type
          const composedSchema = composedSchemas.get(objectType);

          if (!composedSchema) {
            skipped.push({
              objectType,
              exampleId: item.id || "(no id)",
              filePath: exampleFile.filePath || "unknown",
            });
            continue;
          }

          // Compile and validate
          // Create a clean schema without $id to avoid conflicts with raw schemas in Ajv
          const cleanSchema = { ...composedSchema };
          delete cleanSchema.$id;

          try {
            const validate = ajv.compile(cleanSchema);
            const valid = validate(item);

            if (!valid) {
              failures.push({
                objectType,
                example: item,
                errors: validate.errors,
              });
            } else {
              validatedExamples++;
            }
          } catch (error: any) {
            failures.push({
              objectType,
              example: item,
              errors: [{ message: `Compilation error: ${error.message}` }],
            });
          }
        }
      }

      // Report results
      console.log(`\n${"=".repeat(80)}`);
      console.log(`VALIDATION RESULTS`);
      console.log(`${"=".repeat(80)}`);
      console.log(`Total examples tested: ${totalExamples}`);
      console.log(`Successfully validated: ${validatedExamples}`);
      console.log(`Skipped (no schema): ${skipped.length}`);
      console.log(`Failed validation: ${failures.length}`);
      console.log(`${"=".repeat(80)}\n`);

      // Show detailed skipped list
      if (skipped.length > 0) {
        console.log(`\nSkipped Examples (No Schema Found):`);
        console.log(`${"=".repeat(80)}`);
        const skippedByType = new Map<string, number>();
        skipped.forEach(({ objectType }) => {
          skippedByType.set(
            objectType,
            (skippedByType.get(objectType) || 0) + 1
          );
        });
        Array.from(skippedByType.entries())
          .sort((a, b) => b[1] - a[1])
          .forEach(([objectType, count]) => {
            console.log(`  ${objectType}: ${count} example(s)`);
          });
        console.log(`${"=".repeat(80)}\n`);
      }

      // If there are failures, show detailed error info
      if (failures.length > 0) {
        console.error(`\nValidation Failures Detected:\n`);
        failures.forEach(({ objectType, example, errors }, index) => {
          console.error(`\n[${index + 1}] Object Type: ${objectType}`);
          console.error(`Example ID: ${example.id || "(no id)"}`);
          console.error(`Errors:`);
          errors.forEach((err: any) => {
            console.error(`  - ${err.instancePath || "root"}: ${err.message}`);
            if (err.params) {
              console.error(`    Params:`, JSON.stringify(err.params, null, 2));
            }
          });
        });
        console.error(`\n${"=".repeat(80)}\n`);
      }

      // Assert validation results
      expect(failures).toHaveLength(0);
      expect(validatedExamples).toBeGreaterThan(0);
    });
  });

  describe("Specific schema composition correctness checks", () => {
    it("composed schemas preserve required fields from allOf chain", () => {
      // Find a schema that uses allOf (like Issuer)
      const issuerSchema = Array.from(composedSchemas.values()).find(
        (schema) => schema.$id && schema.$id.includes("Issuer.schema.json")
      );

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.required).toBeDefined();
      expect(issuerSchema.required).toContain("id"); // From Object primitive
      expect(issuerSchema.required).toContain("object_type"); // From Issuer
    });

    it("composed schemas include inherited properties", () => {
      // Every object should have 'id' and 'comments' from Object primitive
      const issuerSchema = Array.from(composedSchemas.values()).find(
        (schema) => schema.$id && schema.$id.includes("Issuer.schema.json")
      );

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.properties).toBeDefined();
      expect(issuerSchema.properties.id).toBeDefined(); // Inherited
      expect(issuerSchema.properties.comments).toBeDefined(); // Inherited
      expect(issuerSchema.properties.legal_name).toBeDefined(); // Direct
    });

    it("composed schemas have correct object_type constants", () => {
      const issuerSchema = composedSchemas.get("ISSUER");

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.properties.object_type).toBeDefined();
      expect(issuerSchema.properties.object_type.const).toBe("ISSUER");
    });
  });

  describe("Schema composition metadata integrity", () => {
    it("preserves $id from original schema", () => {
      const issuerSchema = composedSchemas.get("ISSUER");

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.$id).toBeDefined();
      expect(issuerSchema.$id).toContain("Issuer.schema.json");
    });

    it("preserves title and description", () => {
      const issuerSchema = composedSchemas.get("ISSUER");

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.title).toBeDefined();
      expect(issuerSchema.description).toBeDefined();
    });

    it("preserves copyright comment", () => {
      const issuerSchema = composedSchemas.get("ISSUER");

      expect(issuerSchema).toBeDefined();
      expect(issuerSchema.$comment).toBeDefined();
      expect(issuerSchema.$comment).toContain("Copyright");
    });
  });
});
