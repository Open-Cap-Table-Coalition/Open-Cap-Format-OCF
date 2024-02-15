### Object - Issuer Authorized Shares Adjustment Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json`

**Description:** _Object describing an event to change the number of authoried shares of an issuer._

**Data Type:** `OCF Object - TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/IssuerTransaction](../../../primitives/objects/transactions/IssuerTransaction.md)

**Properties:**

| Property                  | Type                                                                                                                            | Description                                                                             | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                        | Identifier for the object                                                               | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                      | Unstructured text comments related to and stored for the object                         | -          |
| object_type               | **Constant:** `TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                       | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the transaction occurred                                                  | `REQUIRED` |
| issuer_id                 | `STRING`                                                                                                                        | Identifier of the Issuer object, a subject of this transaction                          | -          |
| new_shares_authorized     | [schema/types/Numeric](../../../types/Numeric.md)                                                                               | The new number of shares authorized for this issuer as of the event of this transaction | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the board approved the change to the issuer                               | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the stockholders approved the change to the issuer                        | -          |

**Source Code:** [schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment](../../../../../../schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json)

Copyright © 2024 Open Cap Table Coalition.
