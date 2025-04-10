### Primitive - Security Release Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/release/Release.schema.json`

**Description** _Abstract object describing fields common to all release transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type                                                   | Description                                                                                  | Required   |
| ---------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- |
| settlement_date        | [schema/types/Date](../../../../types/Date.md)         | The settlement date for the shares released, typically after the release transaction date    | `REQUIRED` |
| release_price          | [schema/types/Monetary](../../../../types/Monetary.md) | The release price used to determine the value of the security at the time of release         | `REQUIRED` |
| quantity               | [schema/types/Numeric](../../../../types/Numeric.md)   | Quantity of shares released                                                                  | `REQUIRED` |
| consideration_text     | `STRING`                                               | Unstructured text description of consideration provided in exchange for security release     | -          |
| resulting_security_ids | [`STRING`]                                             | Identifier of the new security (or securities) issuance resulting from a release transaction | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/release/Release](../../../../../../../schema/primitives/objects/transactions/release/Release.schema.json)

Copyright © 2025 Open Cap Table Coalition.
