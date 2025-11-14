/**
 * Type definitions for OCF validation system
 */

/**
 * Represents a single validation error with rich context for debugging
 */
export interface ValidationError {
  /** Human-readable error message */
  message: string;
  /** JSON path to the invalid data (e.g., "/properties/security_id") */
  instancePath?: string;
  /** JSON path to the schema rule that failed (e.g., "/properties/security_id/type") */
  schemaPath?: string;
  /** AJV keyword that failed (e.g., "required", "type", "enum") */
  keyword?: string;
  /** Additional parameters specific to the validation error */
  params?: Record<string, any>;
  /** Path to the OCF file being validated (for multi-file validation) */
  filePath?: string;
  /** The object_type of the object being validated */
  objectType?: string;
  /** The schema $id used for validation */
  schemaId?: string;
}

/**
 * Result of validating a single OCF object or file
 */
export interface ValidationResult {
  /** Whether the validation passed */
  valid: boolean;
  /** List of validation errors (empty if valid) */
  errors: ValidationError[];
  /** Path to the file that was validated */
  filePath?: string;
  /** The object_type that was validated */
  objectType?: string;
}

/**
 * Configuration options for the validator
 */
export interface ValidatorOptions {
  /** Whether to output verbose logging */
  verbose?: boolean;
  /** Whether to collect all errors or fail fast */
  allErrors?: boolean;
  /** Whether to validate against strict schema (no additional properties) */
  strict?: boolean;
}

/**
 * Map of object_type enum values to their corresponding schema $id URIs
 */
export type ObjectSchemaMap = Record<string, string>;

/**
 * Map of file_type enum values to their corresponding schema $id URIs
 */
export type FileTypeSchemaMap = Record<string, string>;
