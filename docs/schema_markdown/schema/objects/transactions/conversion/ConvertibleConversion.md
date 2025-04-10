### Object - Convertible Conversion Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/conversion/ConvertibleConversion.schema.json`

**Description:** _Object describing a conversion of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CONVERSION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/conversion/Conversion](../../../primitives/objects/transactions/conversion/Conversion.md)

**Properties:**

| Property                  | Type                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                           | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                         | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type               | **Constant:** `TX_CONVERTIBLE_CONVERSION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                        | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id               | `STRING`                                                                                                           | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| resulting_security_ids    | [`STRING`]                                                                                                         | Identifier for the security (or securities) that resulted from the conversion                                                                                                                                                                                                                                                                                                                                                                                                                               | `REQUIRED` |
| reason_text               | `STRING`                                                                                                           | Reason for the conversion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| quantity_converted        | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | Quantity of security units converted                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| balance_security_id       | `STRING`                                                                                                           | Identifier for the convertible that holds the remainder balance (for partial conversions)                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| trigger_id                | `STRING`                                                                                                           | What is the id of the convertible's conversion trigger that resulted in this conversion                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| capitalization_definition | [schema/types/CapitalizationDefinition](../../../types/CapitalizationDefinition.md)                                | If this conversion event and its `quantity_converted` value was based on the company's capitalization, please specify what stock classes, stock plans and securities were aggregated to calculate the capitalization value used in the calculation (e.g. if it was based on "fully diluted" capitalization, please provide details on how this was calculated using the capitalization type datastructure).                                                                                                 | -          |

**Source Code:** [schema/objects/transactions/conversion/ConvertibleConversion](../../../../../../schema/objects/transactions/conversion/ConvertibleConversion.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-conversion-minimal",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG.1",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-custom-conversion-minimal",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG.1",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-conversion-all-fields",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ],
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-custom-conversion-all-fields",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ],
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
