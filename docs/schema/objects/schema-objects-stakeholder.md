:house: [Documentation Home](/README.md)

---

### Object - Stakeholder

`https://opencaptablecoalition.com/schema/objects/stakeholder`

**Description:** _Object describing a stakeholder_

**Data Type:** `OCF Object - STAKEHOLDER`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Composed From:**

**Properties:**

| Property             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                        | Required   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| object_type          | **Constant:** `STAKEHOLDER`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_                                                                                                                                                                                                                                                                                                                   | Object type field                                                                                                                  | `REQUIRED` |
| name                 | [schema/types/name](/docs/schema/types/schema-types-name.md)                                                                                                                                                                                                                                                                                                                                                                              | Name for the stakeholder                                                                                                           | `REQUIRED` |
| stakeholder_type     | `ENUM - STAKEHOLDER TYPE`</br>_Description:_ Enumeration of stakeholder types - individual (human) or institution (entity)</br>**ONE OF:**</br>&bull; INDIVIDUAL</br>&bull; INSTITUTION</br>                                                                                                                                                                                                                                              | Distinguish individuals from institutions                                                                                          | `REQUIRED` |
| issuer_assigned_id   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                  | This might be any sort of id assigned to the stakeholder by the issuer, such as an internal company ID for an employee stakeholder | -          |
| current_relationship | `ENUM - STAKEHOLDER RELATIONSHIP TYPE`</br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br>**ONE OF:**</br>&bull; ADVISOR</br>&bull; BOARD_MEMBER</br>&bull; CONSULTANT</br>&bull; EMPLOYEE</br>&bull; EX_ADVISOR</br>&bull; EX_CONSULTANT</br>&bull; EX_EMPLOYEE</br>&bull; EXECUTIVE</br>&bull; FOUNDER</br>&bull; INVESTOR</br>&bull; NON_US_EMPLOYEE</br>&bull; OFFICER</br>&bull; OTHER</br> | What is the current relationship of the stakeholder to the issuer?                                                                 | -          |
| primary_contact      | [schema/types/contact_info](/docs/schema/types/schema-types-contact_info.md)                                                                                                                                                                                                                                                                                                                                                              | The primary contact info for the stakeholder                                                                                       | -          |
| addresses            | [schema/types/address](/docs/schema/types/schema-types-address.md)                                                                                                                                                                                                                                                                                                                                                                        | Addresses for the stakeholder                                                                                                      | -          |
| tax_ids              | [schema/types/tax_identifier](/docs/schema/types/schema-types-tax_identifier.md)                                                                                                                                                                                                                                                                                                                                                          | The tax ids for this stakeholder                                                                                                   | -          |
| id                   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identifier for the object                                                                                                          | `REQUIRED` |
| comments             | [`STRING`]</br>                                                                                                                                                                                                                                                                                                                                                                                                                           | Unstructured text comments related to and stored for the object                                                                    | -          |

**Source Code:** [schema/objects/Stakeholder.schema.json](/schema/objects/Stakeholder.schema.json)

**Examples:**

```

[
    {
        "object_type": "STAKEHOLDER",
        "id": "aceb81e6-2d19-4ef2-ac53-05ff210d3508",
        "name": {
            "legal_name": "Person X",
            "first_name": "Person",
            "last_name": "X"
        },
        "stakeholder_type": "INDIVIDUAL",
        "comments": []
    },
    {
        "object_type": "STAKEHOLDER",
        "id": "d6c49a5a-257d-4b41-9f1d-073a77dfe719",
        "name": {
            "legal_name": "Person Y"
        },
        "stakeholder_type": "INDIVIDUAL",
        "comments": []
    }
]

```

---
