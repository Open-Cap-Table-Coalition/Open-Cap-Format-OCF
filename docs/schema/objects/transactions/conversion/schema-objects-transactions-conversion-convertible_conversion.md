:house: [Documentation Home](/README.md)

---

### Object - Convertible Conversion Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion`

**Description:** _Object describing a conversion of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CONVERSION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion](/docs/schema/primitives/transactions/conversion/schema-primitives-transactions-conversion-base_conversion.md)

**Properties:**

| Property               | Type                                                                                                                                  | Description                                                                   | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_CONVERTIBLE_CONVERSION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                             | `REQUIRED` |
| reason_text            | `STRING`                                                                                                                              | Reason for the conversion                                                     | `REQUIRED` |
| id                     | `STRING`                                                                                                                              | Identifier for the object                                                     | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                       | Unstructured text comments related to and stored for the object               | -          |
| security_id            | `STRING`                                                                                                                              | Identifier for the security which the transaction applies to                  | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                          | Date on which the transaction occurred                                        | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                                       | Identifier for the security (or securities) that resulted from the conversion | `REQUIRED` |

**Source Code:** [schema/objects/transactions/conversion/ConvertibleConversion.schema.json](/schema/objects/transactions/conversion/ConvertibleConversion.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_CONVERTIBLE_CONVERSION",
        "id": "test-convertible-conversion-minimal",
        "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
        "date": "2006-11-09",
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

---
