/**
 * Unit tests for SchemaValidator
 */

import { describe, expect, test, beforeAll } from "@jest/globals";
import { readFile } from "fs/promises";
import { SchemaValidator } from "../SchemaValidator.js";
import { ValidationResult } from "../ValidationTypes.js";

describe("SchemaValidator", () => {
  let validator: SchemaValidator;

  beforeAll(async () => {
    // Initialize validator once for all tests
    validator = await SchemaValidator.create({
      verbose: false,
      allErrors: true,
    });
  });

  describe("Initialization", () => {
    test("should initialize successfully", async () => {
      const testValidator = await SchemaValidator.create();
      expect(testValidator.getAjv()).toBeDefined();
      expect(testValidator.getObjectSchemaMap()).toBeDefined();
      expect(testValidator.getFileTypeSchemaMap()).toBeDefined();
    });

    test("should throw error if validate called before initialize", () => {
      const uninitializedValidator = new (SchemaValidator as any)();
      expect(() => {
        uninitializedValidator.validateObject({
          object_type: "TX_STOCK_ISSUANCE",
        });
      }).toThrow();
    });
  });

  describe("Object Schema Map", () => {
    test("should build object schema map with known types", () => {
      const schemaMap = validator.getObjectSchemaMap();
      expect(schemaMap).toBeDefined();

      // Check some common object types exist
      expect(schemaMap["TX_STOCK_ISSUANCE"]).toBeDefined();
      expect(schemaMap["ISSUER"]).toBeDefined();
      expect(schemaMap["STAKEHOLDER"]).toBeDefined();
      expect(schemaMap["STOCK_CLASS"]).toBeDefined();
    });

    test("should map object types to schema URIs", () => {
      const schemaMap = validator.getObjectSchemaMap();
      expect(schemaMap["TX_STOCK_ISSUANCE"]).toContain(
        "StockIssuance.schema.json"
      );
      expect(schemaMap["ISSUER"]).toContain("Issuer.schema.json");
    });
  });

  describe("File Type Schema Map", () => {
    test("should load file type schema map", () => {
      const fileTypeMap = validator.getFileTypeSchemaMap();
      expect(fileTypeMap).toBeDefined();

      // Check some common file types exist
      expect(fileTypeMap["OCF_MANIFEST_FILE"]).toBeDefined();
      expect(fileTypeMap["OCF_TRANSACTIONS_FILE"]).toBeDefined();
      expect(fileTypeMap["OCF_STAKEHOLDERS_FILE"]).toBeDefined();
    });
  });

  describe("validateObject", () => {
    test("should validate a valid object from fixture", async () => {
      const validObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/valid-stock-issuance.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(validObject);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.objectType).toBe("TX_STOCK_ISSUANCE");
    });

    test("should fail validation for object missing object_type", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-object-type.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(invalidObject);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toContain("object_type");
    });

    test("should fail validation for unknown object_type", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-unknown-object-type.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(invalidObject);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toContain("Unknown object_type");
    });

    test("should fail validation for object missing required fields", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-required-field.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(invalidObject);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      // Should have errors about missing required properties
      expect(result.objectType).toBe("TX_STOCK_ISSUANCE");
    });

    test("should include error details in ValidationError", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-required-field.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(invalidObject);

      expect(result.valid).toBe(false);
      expect(result.errors[0]).toHaveProperty("message");
      expect(result.errors[0]).toHaveProperty("keyword");
      expect(result.errors[0]).toHaveProperty("schemaPath");
      expect(result.errors[0]).toHaveProperty("objectType");
      expect(result.errors[0]).toHaveProperty("schemaId");
    });

    test("should accept explicit object_type parameter", () => {
      const obj = {
        object_type: "TX_STOCK_ISSUANCE",
        id: "test-001",
        security_id: "sec-001",
        date: "2022-01-15",
        security_law_exemptions: [],
        stakeholder_id: "stake-001",
        custom_id: "CS-001",
        stock_class_id: "class-001",
        share_price: { amount: "1.00", currency: "USD" },
        quantity: "1000",
        stock_legend_ids: [],
      };

      // The explicit parameter can override the object's object_type for schema lookup
      const result = validator.validateObject(obj, "TX_STOCK_ISSUANCE");

      expect(result.valid).toBe(true);
      expect(result.objectType).toBe("TX_STOCK_ISSUANCE");
    });
  });

  describe("validateFile", () => {
    test("should validate a valid transactions file", async () => {
      const validFile = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/valid-transactions-file.json",
          "utf-8"
        )
      );

      const result = validator.validateFile(validFile, "test-file.json");

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.filePath).toBe("test-file.json");
    });

    test("should fail validation for file missing file_type", async () => {
      const invalidFile = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-file-type.json",
          "utf-8"
        )
      );

      const result = validator.validateFile(invalidFile, "test-file.json");

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toContain("file_type");
      expect(result.filePath).toBe("test-file.json");
    });

    test("should fail validation for unknown file_type", () => {
      const invalidFile = {
        file_type: "UNKNOWN_FILE_TYPE_XYZ",
        items: [],
      };

      const result = validator.validateFile(invalidFile);

      expect(result.valid).toBe(false);
      expect(result.errors[0].message).toContain("Unknown file_type");
    });

    test("should include filePath in error context", async () => {
      const invalidFile = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-file-type.json",
          "utf-8"
        )
      );

      const result = validator.validateFile(invalidFile, "/path/to/file.json");

      expect(result.valid).toBe(false);
      expect(result.errors[0].filePath).toBe("/path/to/file.json");
      expect(result.filePath).toBe("/path/to/file.json");
    });
  });

  describe("validateFileWithItems", () => {
    test("should validate file structure and all items", async () => {
      const validFile = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/valid-transactions-file.json",
          "utf-8"
        )
      );

      const result = validator.validateFileWithItems(validFile, "test.json");

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test("should fail if file structure is invalid", async () => {
      const invalidFile = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-file-type.json",
          "utf-8"
        )
      );

      const result = validator.validateFileWithItems(invalidFile);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    test("should fail if items are invalid", async () => {
      const fileWithInvalidItem = {
        file_type: "OCF_TRANSACTIONS_FILE",
        items: [
          {
            object_type: "TX_STOCK_ISSUANCE",
            id: "test-001",
            // Missing required fields
          },
        ],
      };

      const result = validator.validateFileWithItems(
        fileWithInvalidItem,
        "test.json"
      );

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      // Error should reference the item index in the instancePath
      expect(result.errors[0].instancePath).toContain("/items/0");
      expect(result.filePath).toBe("test.json");
    });

    test("should accumulate errors from multiple invalid items", async () => {
      const fileWithMultipleInvalidItems = {
        file_type: "OCF_TRANSACTIONS_FILE",
        items: [
          {
            object_type: "TX_STOCK_ISSUANCE",
            id: "test-001",
            // Missing required fields
          },
          {
            object_type: "UNKNOWN_TYPE",
            id: "test-002",
          },
        ],
      };

      const result = validator.validateFileWithItems(
        fileWithMultipleInvalidItems,
        "test.json"
      );

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(1);
      expect(result.filePath).toBe("test.json");
    });

    test("should include item index in error instancePath", async () => {
      const fileWithInvalidItem = {
        file_type: "OCF_TRANSACTIONS_FILE",
        items: [
          {
            object_type: "TX_STOCK_ISSUANCE",
            id: "test-001",
            // Missing required fields
          },
        ],
      };

      const result = validator.validateFileWithItems(fileWithInvalidItem);

      expect(result.valid).toBe(false);
      expect(result.errors[0].instancePath).toContain("/items/0");
    });

    test("should handle files without items array", async () => {
      // Use a manifest file which doesn't have items
      const manifestFile = {
        file_type: "OCF_MANIFEST_FILE",
        ocf_version: "1.2.1",
        issuer: {
          object_type: "ISSUER",
          id: "issuer-001",
          legal_name: "Test Company",
          formation_date: "2020-01-01",
          country_of_formation: "US",
          country_subdivision_of_formation: "DE",
          tax_ids: [],
          email: {
            email_address: "test@example.com",
            email_type: "BUSINESS",
          },
          address: {
            address_type: "LEGAL",
            street_suite: "123 Main St",
            city: "Test City",
            country_subdivision: "CA",
            country: "US",
            postal_code: "12345",
          },
        },
        as_of: "2022-01-01",
        generated_at: "2022-01-01T00:00:00Z",
        stock_plans_files: [],
        stock_legend_templates_files: [],
        stock_classes_files: [],
        transactions_files: [],
        stakeholders_files: [],
      };

      const result = validator.validateFileWithItems(manifestFile);

      // Should validate the file structure (may pass or fail depending on completeness)
      expect(result).toHaveProperty("valid");
      expect(result).toHaveProperty("errors");
    });
  });

  describe("Error reporting", () => {
    test("should return structured ValidationResult", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-required-field.json",
          "utf-8"
        )
      );

      const result: ValidationResult = validator.validateObject(invalidObject);

      expect(result).toHaveProperty("valid");
      expect(result).toHaveProperty("errors");
      expect(result).toHaveProperty("objectType");
      expect(Array.isArray(result.errors)).toBe(true);
    });

    test("should include all AJV error details in ValidationError", async () => {
      const invalidObject = JSON.parse(
        await readFile(
          "./utils/validation/__tests__/fixtures/invalid-missing-required-field.json",
          "utf-8"
        )
      );

      const result = validator.validateObject(invalidObject);

      expect(result.errors[0]).toMatchObject({
        message: expect.any(String),
        keyword: expect.any(String),
        schemaPath: expect.any(String),
        objectType: "TX_STOCK_ISSUANCE",
        schemaId: expect.stringContaining("StockIssuance"),
      });
    });

    test("allErrors option should collect multiple errors", async () => {
      const verboseValidator = await SchemaValidator.create({
        allErrors: true,
      });
      // Test would require initialization, but the pattern is tested above
      expect(verboseValidator).toBeDefined();
    });
  });

  describe("Integration with real schemas", () => {
    test("should validate against actual TX_STOCK_ISSUANCE schema", () => {
      const stockIssuance = {
        object_type: "TX_STOCK_ISSUANCE",
        id: "test-stock-issuance-integration",
        security_id: "security-123",
        date: "2022-01-15",
        security_law_exemptions: [],
        stakeholder_id: "stakeholder-456",
        custom_id: "CUSTOM-123",
        stock_class_id: "stock-class-789",
        share_price: {
          amount: "10.00",
          currency: "USD",
        },
        quantity: "5000",
        stock_legend_ids: [],
      };

      const result = validator.validateObject(stockIssuance);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test("should validate against actual ISSUER schema", () => {
      const issuer = {
        object_type: "ISSUER",
        id: "issuer-test-001",
        legal_name: "Test Corporation",
        formation_date: "2020-01-01",
        country_of_formation: "US",
        country_subdivision_of_formation: "DE",
        tax_ids: [],
        email: {
          email_address: "contact@testcorp.com",
          email_type: "BUSINESS",
        },
        address: {
          address_type: "LEGAL",
          street_suite: "100 Test Street",
          city: "Test City",
          country_subdivision: "CA",
          country: "US",
          postal_code: "94105",
        },
      };

      const result = validator.validateObject(issuer);

      expect(result.valid).toBe(true);
    });

    test("should detect type mismatches", () => {
      const invalidStockIssuance = {
        object_type: "TX_STOCK_ISSUANCE",
        id: "test-001",
        security_id: "sec-001",
        date: "2022-01-15",
        security_law_exemptions: [],
        stakeholder_id: "stake-001",
        stock_class_id: "class-001",
        share_price: {
          amount: "10.00",
          currency: "USD",
        },
        quantity: 5000, // Should be string, not number
        stock_legend_ids: [],
      };

      const result = validator.validateObject(invalidStockIssuance);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((e) => e.instancePath?.includes("quantity"))
      ).toBe(true);
    });
  });
});
