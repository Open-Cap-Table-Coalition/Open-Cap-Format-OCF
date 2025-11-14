/**
 * Core OCF validation logic using AJV JSON Schema Validator
 * Handles initialization, schema loading, and validation of OCF objects and files
 */

import Ajv from "ajv";
import addFormats from "ajv-formats";
import { readFile } from "fs/promises";
import {
  ValidationResult,
  ValidationError,
  ValidatorOptions,
  ObjectSchemaMap,
  FileTypeSchemaMap,
} from "./ValidationTypes.js";
import { getSchemaFilepaths } from "../schema-utils/Loaders.js";

/**
 * Represents a JSON Schema object
 */
interface JsonSchema {
  $id?: string;
  properties?: Record<string, unknown>;
  enum?: unknown[];
  allOf?: Array<{ $ref?: string }>;
  [key: string]: unknown;
}

/**
 * NOTE: This module uses relative paths from project root (e.g., "./utils/schema-utils/...").
 * This is a standard convention in Node.js projects and works reliably when the process
 * is run from the project root directory, which is the case for all npm scripts.
 *
 * Using import.meta.url would be more robust but requires NodeNext module resolution,
 * which would require adding .js extensions to all imports across the codebase - a larger
 * refactoring outside the scope of this validator improvement.
 */

/**
 * SchemaValidator handles OCF validation using AJV (Another JSON Schema Validator)
 * Provides structured validation results instead of console logging
 */
export class SchemaValidator {
  private readonly ajv: Ajv;
  private readonly objectSchemaMap: ObjectSchemaMap;
  private readonly fileTypeSchemaMap: FileTypeSchemaMap;
  private readonly options: ValidatorOptions;

  private constructor(
    ajv: Ajv,
    objectSchemaMap: ObjectSchemaMap,
    fileTypeSchemaMap: FileTypeSchemaMap,
    options: ValidatorOptions
  ) {
    this.ajv = ajv;
    this.objectSchemaMap = objectSchemaMap;
    this.fileTypeSchemaMap = fileTypeSchemaMap;
    this.options = options;
  }

  /**
   * Asynchronously creates and initializes a new instance of the SchemaValidator.
   * This is the required way to instantiate the class.
   *
   * @param options - Configuration options for the validator
   * @returns A promise that resolves to a fully initialized SchemaValidator instance
   * @throws {Error} If ObjectType.schema.json cannot be found in the loaded schemas
   */
  public static async create(
    options: ValidatorOptions = {}
  ): Promise<SchemaValidator> {
    const combinedOptions: ValidatorOptions = {
      verbose: false,
      allErrors: false,
      strict: false,
      ...options,
    };

    const schemaPaths = await getSchemaFilepaths(combinedOptions.verbose);
    const schemaBuffers = await Promise.all(
      schemaPaths.map((path) => readFile(path))
    );
    const schemas: JsonSchema[] = schemaBuffers.map((buffer) =>
      JSON.parse(buffer.toString())
    );

    const ajv = new Ajv({
      schemas,
      validateSchema: true,
      ...(combinedOptions.allErrors ? { allErrors: true } : {}),
    });

    addFormats(ajv);

    const objectTypeEnumSchema = schemas.find(
      (s) => s.$id && s.$id.endsWith("ObjectType.schema.json")
    );
    if (!objectTypeEnumSchema) {
      throw new Error("Could not find ObjectType.schema.json");
    }

    const objectSchemaMap = SchemaValidator.buildObjectSchemaMap(
      schemas,
      objectTypeEnumSchema,
      combinedOptions
    );
    const fileTypeSchemaMap = await SchemaValidator.loadFileTypeSchemaMap();

    return new SchemaValidator(
      ajv,
      objectSchemaMap,
      fileTypeSchemaMap,
      combinedOptions
    );
  }

  /**
   * Build map of object_type enum values to their corresponding schema $id URIs
   * This handles both const and enum patterns in object_type properties
   *
   * @param schemas - Array of all loaded JSON schemas
   * @param objectTypeEnumSchema - The ObjectType enum schema for validation
   * @param options - Validator configuration options
   * @returns Map of object_type values to schema $id URIs
   * @throws {Error} If an object_type is found that doesn't exist in ObjectType.schema.json
   */
  private static buildObjectSchemaMap(
    schemas: JsonSchema[],
    objectTypeEnumSchema: JsonSchema,
    options: ValidatorOptions
  ): ObjectSchemaMap {
    const objectSchemasMap: ObjectSchemaMap = {};

    const objectSchemas = schemas.filter(
      (s) => s.$id && s.$id.includes("/schema/objects/")
    );

    objectSchemas.forEach((objectSchema) => {
      if (objectSchema.properties) {
        const objectType = objectSchema.properties.object_type as
          | Record<string, unknown>
          | undefined;

        if (
          typeof objectType === "object" &&
          !Array.isArray(objectType) &&
          objectType !== null
        ) {
          // Handle const pattern: { "const": "TX_STOCK_ISSUANCE" }
          if ("const" in objectType && typeof objectType.const === "string") {
            if (
              !Array.isArray(objectTypeEnumSchema.enum) ||
              !objectTypeEnumSchema.enum.includes(objectType.const)
            ) {
              throw new Error(
                `Encountered object_type: ${objectType.const} in schema but this type does not exist in ObjectType.schema.json`
              );
            }
            if (objectSchema.$id && typeof objectSchema.$id === "string") {
              objectSchemasMap[objectType.const] = objectSchema.$id;
            }
          }
          // Handle enum pattern: { "enum": ["TYPE1", "TYPE2"] } for backward compat
          else if ("enum" in objectType && Array.isArray(objectType.enum)) {
            for (const item of objectType.enum) {
              if (
                item &&
                typeof item === "string" &&
                objectSchema.$id &&
                typeof objectSchema.$id === "string"
              ) {
                objectSchemasMap[item] = objectSchema.$id;
              }
            }
          }
        }
      }
      // Handle backward compatibility wrapper schemas
      else if (
        objectSchema["$id"] &&
        objectSchema.allOf &&
        Array.isArray(objectSchema.allOf) &&
        objectSchema.allOf.length === 1
      ) {
        // Wrapper schemas are ignored - the wrapped schema's object_type will be in the map
        if (options.verbose) {
          console.log(
            `Wrapper schema detected: ${objectSchema["$id"]} wraps ${objectSchema.allOf[0]["$ref"]}`
          );
        }
      }
    });

    return objectSchemasMap;
  }

  /**
   * Load the file_type to schema URI mapping from UriLookupForFileType.json
   *
   * @returns A promise that resolves to a map of file_type values to schema $id URIs
   */
  private static async loadFileTypeSchemaMap(): Promise<FileTypeSchemaMap> {
    const buffer = await readFile(
      "./utils/schema-utils/UriLookupForFileType.json"
    );
    return JSON.parse(buffer.toString());
  }

  /**
   * Validate a single OCF object against its schema
   *
   * @param ocfObject - The OCF object to validate
   * @param objectType - Optional object_type override if not present in the object
   * @returns ValidationResult with structured errors and validation status
   */
  validateObject(ocfObject: unknown, objectType?: string): ValidationResult {
    if (typeof ocfObject !== "object" || ocfObject === null) {
      return {
        valid: false,
        errors: [
          {
            message: "OCF object must be a non-null object",
            keyword: "type",
          },
        ],
      };
    }

    const obj = ocfObject as Record<string, unknown>;
    const type =
      objectType ||
      (typeof obj.object_type === "string" ? obj.object_type : undefined);
    if (!type) {
      return {
        valid: false,
        errors: [
          {
            message: "Object missing object_type property",
            keyword: "required",
            params: { missingProperty: "object_type" },
          },
        ],
      };
    }

    const schemaUri = this.objectSchemaMap[type];
    if (!schemaUri) {
      return {
        valid: false,
        errors: [
          {
            message: `Unknown object_type: ${type}`,
            keyword: "enum",
            params: { allowedValues: Object.keys(this.objectSchemaMap) },
            objectType: type,
          },
        ],
      };
    }

    const validator = this.ajv.getSchema(schemaUri);
    if (!validator) {
      return {
        valid: false,
        errors: [
          {
            message: `Schema not found for URI: ${schemaUri}`,
            schemaId: schemaUri,
            objectType: type,
          },
        ],
      };
    }

    const valid = validator(ocfObject);

    if (!valid && validator.errors) {
      const errors: ValidationError[] = validator.errors.map((ajvError) => ({
        message: ajvError.message || "Validation failed",
        instancePath: ajvError.instancePath,
        schemaPath: ajvError.schemaPath,
        keyword: ajvError.keyword,
        params: ajvError.params,
        objectType: type,
        schemaId: schemaUri,
      }));

      return {
        valid: false,
        errors,
        objectType: type,
      };
    }

    return {
      valid: true,
      errors: [],
      objectType: type,
    };
  }

  /**
   * Validate an OCF file (manifest, stakeholders, transactions, etc.)
   *
   * @param ocfFile - The parsed OCF file object
   * @param filePath - Optional file path for error context and reporting
   * @returns ValidationResult with structured errors and validation status
   */
  validateFile(ocfFile: unknown, filePath?: string): ValidationResult {
    if (typeof ocfFile !== "object" || ocfFile === null) {
      return {
        valid: false,
        errors: [
          {
            message: "OCF file must be a non-null object",
            keyword: "type",
            filePath,
          },
        ],
        filePath,
      };
    }

    const file = ocfFile as Record<string, unknown>;
    const fileType =
      typeof file.file_type === "string" ? file.file_type : undefined;
    if (!fileType) {
      return {
        valid: false,
        errors: [
          {
            message: "File missing file_type property",
            keyword: "required",
            params: { missingProperty: "file_type" },
            filePath,
          },
        ],
        filePath,
      };
    }

    const schemaUri = this.fileTypeSchemaMap[fileType];
    if (!schemaUri) {
      return {
        valid: false,
        errors: [
          {
            message: `Unknown file_type: ${fileType}`,
            keyword: "enum",
            params: { allowedValues: Object.keys(this.fileTypeSchemaMap) },
            filePath,
          },
        ],
        filePath,
      };
    }

    const validator = this.ajv.getSchema(schemaUri);
    if (!validator) {
      return {
        valid: false,
        errors: [
          {
            message: `Schema not found for URI: ${schemaUri}`,
            schemaId: schemaUri,
            filePath,
          },
        ],
        filePath,
      };
    }

    const valid = validator(ocfFile);

    if (!valid && validator.errors) {
      const errors: ValidationError[] = validator.errors.map((ajvError) => ({
        message: ajvError.message || "Validation failed",
        instancePath: ajvError.instancePath,
        schemaPath: ajvError.schemaPath,
        keyword: ajvError.keyword,
        params: ajvError.params,
        filePath,
        schemaId: schemaUri,
      }));

      return {
        valid: false,
        errors,
        filePath,
      };
    }

    return {
      valid: true,
      errors: [],
      filePath,
    };
  }

  /**
   * Validate an OCF file that contains items (transactions, stakeholders, etc.)
   * Validates both the file structure and all items within
   *
   * @param ocfFile - The parsed OCF file object
   * @param filePath - Optional file path for error context and reporting
   * @returns ValidationResult with accumulated errors from file validation and all item validations
   */
  validateFileWithItems(ocfFile: unknown, filePath?: string): ValidationResult {
    // First validate the file structure itself
    const fileResult = this.validateFile(ocfFile, filePath);
    if (!fileResult.valid) {
      return fileResult;
    }

    // If file has items array, validate each item
    const file = ocfFile as Record<string, unknown>;
    if (file.items && Array.isArray(file.items)) {
      const allErrors: ValidationError[] = [];

      for (let i = 0; i < file.items.length; i++) {
        const item = file.items[i];
        const itemResult = this.validateObject(item);

        if (!itemResult.valid) {
          // Add context about which item failed
          const itemId =
            typeof item === "object" &&
            item !== null &&
            "id" in item &&
            typeof item.id === "string"
              ? item.id
              : undefined;
          const itemErrors = itemResult.errors.map((err) => ({
            ...err,
            message: `Item [${i}]${itemId ? ` (id: ${itemId})` : ""}: ${
              err.message
            }`,
            instancePath: `/items/${i}${err.instancePath || ""}`,
            filePath,
          }));
          allErrors.push(...itemErrors);
        }
      }

      if (allErrors.length > 0) {
        return {
          valid: false,
          errors: allErrors,
          filePath,
        };
      }
    }

    return {
      valid: true,
      errors: [],
      filePath,
    };
  }

  /**
   * Get the AJV validator instance (for advanced use cases)
   *
   * @returns The initialized AJV validator instance
   */
  getAjv(): Ajv {
    return this.ajv;
  }

  /**
   * Get the object_type to schema URI mapping
   *
   * @returns Map of object_type enum values to their corresponding schema $id URIs
   */
  getObjectSchemaMap(): ObjectSchemaMap {
    return this.objectSchemaMap;
  }

  /**
   * Get the file_type to schema URI mapping
   *
   * @returns Map of file_type enum values to their corresponding schema $id URIs
   */
  getFileTypeSchemaMap(): FileTypeSchemaMap {
    return this.fileTypeSchemaMap;
  }
}
