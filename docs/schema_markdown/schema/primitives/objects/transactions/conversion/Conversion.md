### Primitive - 転換トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/objects/transactions/conversion/Conversion.schema.json`

**Description** _証券の転換権の行使に関するトランザクションの基底クラス_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type       | Description     | Required   |
| ---------------------- | ---------- | --------------- | ---------- |
| resulting_security_ids | [`STRING`] | 転換により発行された証券のID | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/conversion/Conversion](../../../../../../../schema/primitives/objects/transactions/conversion/Conversion.schema.json)

Copyright © 2025 Open Cap Table Coalition.
