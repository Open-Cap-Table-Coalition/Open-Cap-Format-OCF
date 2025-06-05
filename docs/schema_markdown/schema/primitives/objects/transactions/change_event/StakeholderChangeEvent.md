### Primitive - Stakeholder Change Event

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/change_event/StakeholderChangeEvent.schema.json`

**Description** _Abstract change event "transaction" object to be extended by all change event "transaction" objects that affect a stakeholder_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property       | Type     | Description                                                                        | Required   |
| -------------- | -------- | ---------------------------------------------------------------------------------- | ---------- |
| stakeholder_id | `STRING` | Identifier of the Stakeholder object, a subject of this change event "transaction" | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/change_event/StakeholderChangeEvent](../../../../../../../schema/primitives/objects/transactions/change_event/StakeholderChangeEvent.schema.json)

Copyright © 2025 Open Cap Table Coalition.
