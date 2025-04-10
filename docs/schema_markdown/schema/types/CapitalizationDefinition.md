### Type - Capitalization Definition

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/CapitalizationDefinition.schema.json`

_Type represents a group of securities that constitutes some formally defined part of the company (e.g. post-money capitalization vs pre-money for a security)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                | Type       | Description                                                                                                                                                                                   | Required   |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| include_stock_class_ids | [`STRING`] | All issuances of stock classes with these ids should be included (unless such an issuance is specifically included in `exclude_security_ids`                                                  | `REQUIRED` |
| include_stock_plans_ids | [`STRING`] | All issuances of plan securities from stock plans with these ids should be included (unless such an issuance is specifically excluded in `exclude_security_ids`                               | `REQUIRED` |
| include_security_ids    | [`STRING`] | Securities (whether Stock, Plan Securities, Convertibles or Warrants) with these security ids should be included from this definition of capitalization (overrides plan or class-level rules) | `REQUIRED` |
| exclude_security_ids    | [`STRING`] | Securities (whether Stock, Plan Securities, Convertibles or Warrants) with these security ids should be excluded from this definition of capitalization (overrides plan or class-level rules) | `REQUIRED` |

**Source Code:** [schema/types/CapitalizationDefinition](../../../../schema/types/CapitalizationDefinition.schema.json)

Copyright © 2025 Open Cap Table Coalition.
