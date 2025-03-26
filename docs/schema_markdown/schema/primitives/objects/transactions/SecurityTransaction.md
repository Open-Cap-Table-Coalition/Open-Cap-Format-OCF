### Primitive - Security Transaction

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/objects/transactions/SecurityTransaction.schema.json`

**Description** _特定の証券単位でのトランザクションに関する基底クラス_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property    | Type     | Description                                                               | Required   |
| ----------- | -------- | ------------------------------------------------------------------------- | ---------- |
| security_id | `STRING` | 証券を一意に特定するための識別子。Issuanceイベントで採番された後、証券の譲渡、解除、解約などのイベントで証券の特定のために利用されるもの。 | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/SecurityTransaction](../../../../../../schema/primitives/objects/transactions/SecurityTransaction.schema.json)

Copyright © 2025 Open Cap Table Coalition.
