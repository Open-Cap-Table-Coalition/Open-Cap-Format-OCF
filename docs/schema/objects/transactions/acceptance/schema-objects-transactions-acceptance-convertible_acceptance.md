:house: [Documentation Home](/README.md)

---

### Object - Convertible Acceptance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/acceptance/convertible_acceptance`

**Description:** _Object describing a convertible acceptance transaction_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ACCEPTANCE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/acceptance/base_acceptance](/docs/schema/primitives/transactions/acceptance/schema-primitives-transactions-acceptance-base_acceptance.md)

**Composed From:**

**Properties:**

| Property    | Type                                                                                                                                  | Description                                                     | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `TX_CONVERTIBLE_ACCEPTANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id          | `STRING`                                                                                                                              | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                       | Unstructured text comments related to and stored for the object | -          |
| security_id | `STRING`                                                                                                                              | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                          | Date on which the transaction occurred                          | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json](/schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_CONVERTIBLE_ACCEPTANCE",
        "id": "test-convertible-acceptance-minimal",
        "security_id": "2936wa8yefhdsvcn",
        "date": "2022-01-20"
    },
    {
        "object_type": "TX_CONVERTIBLE_ACCEPTANCE",
        "id": "test-convertible-acceptance-all-fields",
        "security_id": "2936wa8yefhdsvcn",
        "date": "2022-01-20",
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
