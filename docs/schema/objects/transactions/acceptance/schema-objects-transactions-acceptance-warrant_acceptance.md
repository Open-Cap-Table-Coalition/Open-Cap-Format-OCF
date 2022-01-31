:house: [Documentation Home](/README.md)

---

### Object - Warrant Acceptance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/acceptance/warrant_acceptance`

**Description:** _Object describing a warrant acceptance transaction_

**Data Type:** `OCF Object - TX_WARRANT_ACCEPTANCE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/acceptance/base_acceptance](/docs/schema/primitives/transactions/acceptance/schema-primitives-transactions-acceptance-base_acceptance.md)

**Properties:**

| Property    | Type                                                                                                                              | Description                                                     | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `TX_WARRANT_ACCEPTANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id          | `STRING`                                                                                                                          | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                   | Unstructured text comments related to and stored for the object | -          |
| security_id | `STRING`                                                                                                                          | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                      | Date on which the transaction occurred                          | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/WarrantAcceptance.schema.json](/schema/objects/transactions/acceptance/WarrantAcceptance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_WARRANT_ACCEPTANCE",
        "id": "test-warrant-acceptance-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01"
    },
    {
        "object_type": "TX_WARRANT_ACCEPTANCE",
        "id": "test-warrant-acceptance-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ]
    }
]

```

---
