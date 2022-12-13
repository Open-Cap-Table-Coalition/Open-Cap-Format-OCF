:house: [Documentation Home](../../../README.md)

---

### Object - Stakeholder

`https://opencaptablecoalition.com/schema/objects/Stakeholder.schema.json`

**Description:** _Object describing a stakeholder_

**Data Type:** `OCF Object - STAKEHOLDER`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                        | Required   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier for the object                                                                                                          | `REQUIRED` |
| comments             | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Unstructured text comments related to and stored for the object                                                                    | -          |
| object_type          | **Constant:** `STAKEHOLDER`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                              | Object type field                                                                                                                  | `REQUIRED` |
| name                 | [schema/types/Name](../types/Name.md)                                                                                                                                                                                                                                                                                                                                                                                                                       | Name for the stakeholder                                                                                                           | `REQUIRED` |
| stakeholder_type     | `Enum - Stakeholder Type`</br></br>_Description:_ Enumeration of stakeholder types - individual (human) or institution (entity)</br></br>**ONE OF:** </br>&bull; INDIVIDUAL </br>&bull; INSTITUTION                                                                                                                                                                                                                                                         | Distinguish individuals from institutions                                                                                          | `REQUIRED` |
| issuer_assigned_id   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | This might be any sort of id assigned to the stakeholder by the issuer, such as an internal company ID for an employee stakeholder | -          |
| current_relationship | `Enum - Stakeholder Relationship Type`</br></br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br></br>**ONE OF:** </br>&bull; ADVISOR </br>&bull; BOARD_MEMBER </br>&bull; CONSULTANT </br>&bull; EMPLOYEE </br>&bull; EX_ADVISOR </br>&bull; EX_CONSULTANT </br>&bull; EX_EMPLOYEE </br>&bull; EXECUTIVE </br>&bull; FOUNDER </br>&bull; INVESTOR </br>&bull; NON_US_EMPLOYEE </br>&bull; OFFICER </br>&bull; OTHER | What is the current relationship of the stakeholder to the issuer?                                                                 | -          |
| primary_contact      | [schema/types/ContactInfo](../types/ContactInfo.md)                                                                                                                                                                                                                                                                                                                                                                                                         | The primary contact info for the stakeholder                                                                                       | -          |
| addresses            | [ [schema/types/Address](../types/Address.md) ]                                                                                                                                                                                                                                                                                                                                                                                                             | Addresses for the stakeholder                                                                                                      | -          |
| tax_ids              | [ [schema/types/TaxID](../types/TaxID.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                 | The tax ids for this stakeholder                                                                                                   | -          |

**Source Code:** [schema/objects/Stakeholder](../../../../schema/objects/Stakeholder.schema.json)

**Examples:**

```json
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

Copyright © 2022 Open Cap Table Coalition.
