### Object - Stakeholder Relationship Change Event

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/change_event/StakeholderRelationshipChangeEvent.schema.json`

**Description:** _Object describing a change event for the relationship(s) between the stakeholder and the issuer_

**Data Type:** `OCF Object - CE_STAKEHOLDER_RELATIONSHIP`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/change_event/StakeholderChangeEvent](../../../primitives/objects/transactions/change_event/StakeholderChangeEvent.md)

**Properties:**

| Property             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                        | Required   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| id                   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier for the object                                                          | `REQUIRED` |
| comments             | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Unstructured text comments related to and stored for the object                    | -          |
| object_type          | **Constant:** `CE_STAKEHOLDER_RELATIONSHIP`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                        | Object type field                                                                  | `REQUIRED` |
| date                 | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                 | Date on which the transaction occurred                                             | `REQUIRED` |
| stakeholder_id       | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier of the Stakeholder object, a subject of this change event "transaction" | `REQUIRED` |
| relationship_started | `Enum - Stakeholder Relationship Type`</br></br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br></br>**ONE OF:** </br>&bull; ADVISOR </br>&bull; BOARD_MEMBER </br>&bull; CONSULTANT </br>&bull; EMPLOYEE </br>&bull; EX_ADVISOR </br>&bull; EX_CONSULTANT </br>&bull; EX_EMPLOYEE </br>&bull; EXECUTIVE </br>&bull; FOUNDER </br>&bull; INVESTOR </br>&bull; NON_US_EMPLOYEE </br>&bull; OFFICER </br>&bull; OTHER | Denoting the beginning of this relationship on the change date                     | -          |
| relationship_ended   | `Enum - Stakeholder Relationship Type`</br></br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br></br>**ONE OF:** </br>&bull; ADVISOR </br>&bull; BOARD_MEMBER </br>&bull; CONSULTANT </br>&bull; EMPLOYEE </br>&bull; EX_ADVISOR </br>&bull; EX_CONSULTANT </br>&bull; EX_EMPLOYEE </br>&bull; EXECUTIVE </br>&bull; FOUNDER </br>&bull; INVESTOR </br>&bull; NON_US_EMPLOYEE </br>&bull; OFFICER </br>&bull; OTHER | Denoting the ending of this relationship on the change date                        | -          |

**Source Code:** [schema/objects/transactions/change_event/StakeholderRelationshipChangeEvent](../../../../../../schema/objects/transactions/change_event/StakeholderRelationshipChangeEvent.schema.json)

**Examples:**

```json
[
  {
    "object_type": "CE_STAKEHOLDER_RELATIONSHIP",
    "id": "change-event-stakeholder-relationship-started-sample",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "stakeholder_id": "91c51259-87a0-42bc-b8c7-cf99d295cc8a",
    "date": "2024-01-01",
    "relationship_started": "INVESTOR"
  },
  {
    "object_type": "CE_STAKEHOLDER_RELATIONSHIP",
    "id": "change-event-stakeholder-relationship-ended-sample",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "stakeholder_id": "91c51259-87a0-42bc-b8c7-cf99d295cc8a",
    "date": "2024-06-07",
    "relationship_ended": "BOARD_MEMBER"
  },
  {
    "object_type": "CE_STAKEHOLDER_RELATIONSHIP",
    "id": "change-event-stakeholder-relationship-both-started-and-ended-sample",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "stakeholder_id": "91c51259-87a0-42bc-b8c7-cf99d295cc8a",
    "date": "2024-09-10",
    "relationship_started": "CONSULTANT",
    "relationship_ended": "EMPLOYEE"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
