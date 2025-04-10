### Object - Stakeholder Status Change Event

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/change_event/StakeholderStatusChangeEvent.schema.json`

**Description:** _Object describing a change event for the activity status of this stakeholder_

**Data Type:** `OCF Object - CE_STAKEHOLDER_STATUS`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/change_event/StakeholderChangeEvent](../../../primitives/objects/transactions/change_event/StakeholderChangeEvent.md)

**Properties:**

| Property       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                        | Required   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| id             | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Identifier for the object                                                          | `REQUIRED` |
| comments       | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Unstructured text comments related to and stored for the object                    | -          |
| object_type    | **Constant:** `CE_STAKEHOLDER_STATUS`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                | Object type field                                                                  | `REQUIRED` |
| date           | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Date on which the transaction occurred                                             | `REQUIRED` |
| stakeholder_id | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Identifier of the Stakeholder object, a subject of this change event "transaction" | `REQUIRED` |
| new_status     | `Enum - Stakeholder Status Type`</br></br>_Description:_ Enumeration of types of activity statuses for a stakeholder</br></br>**ONE OF:** </br>&bull; ACTIVE </br>&bull; LEAVE_OF_ABSENCE </br>&bull; TERMINATION_VOLUNTARY_OTHER </br>&bull; TERMINATION_VOLUNTARY_GOOD_CAUSE </br>&bull; TERMINATION_VOLUNTARY_RETIREMENT </br>&bull; TERMINATION_INVOLUNTARY_OTHER </br>&bull; TERMINATION_INVOLUNTARY_DEATH </br>&bull; TERMINATION_INVOLUNTARY_DISABILITY </br>&bull; TERMINATION_INVOLUNTARY_WITH_CAUSE | Denoting the beginning of this activity status on the change date                  | `REQUIRED` |

**Source Code:** [schema/objects/transactions/change_event/StakeholderStatusChangeEvent](../../../../../../schema/objects/transactions/change_event/StakeholderStatusChangeEvent.schema.json)

**Examples:**

```json
[
  {
    "object_type": "CE_STAKEHOLDER_STATUS",
    "id": "change-event-stakeholder-status-sample",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "stakeholder_id": "91c51259-87a0-42bc-b8c7-cf99d295cc8a",
    "date": "2024-08-08",
    "new_status": "TERMINATION_VOLUNTARY_GOOD_CAUSE"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
