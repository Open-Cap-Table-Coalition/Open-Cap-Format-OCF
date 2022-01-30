:house: [Documentation Home](/README.md)

---

### Object - Stock Plan

`https://opencaptablecoalition.com/schema/objects/stock_plan`

**Description:** _Object describing a plan which stock options are issued from_

**Data Type:** `OCF Object - STOCK_PLAN`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Composed From:**

**Properties:**

| Property                | Type                                                                                                                   | Description                                                                                                 | Required   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| object_type             | **Constant:** `STOCK_PLAN`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                                           | `REQUIRED` |
| plan_name               | `STRING`                                                                                                               | Name for the stock plan                                                                                     | `REQUIRED` |
| board_approval_date     | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                           | Date on which board approved the plan                                                                       | -          |
| current_shares_reserved | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                     | The number of shares currently approved. The original number of shares can be determined from the event log | `REQUIRED` |
| stock_class_id          | `STRING`                                                                                                               | Identifier of the StockClass object this plan is composed of                                                | `REQUIRED` |
| id                      | `STRING`                                                                                                               | Identifier for the object                                                                                   | `REQUIRED` |
| comments                | [`STRING`]</br>                                                                                                        | Unstructured text comments related to and stored for the object                                             | -          |

**Source Code:** [schema/objects/StockPlan.schema.json](/schema/objects/StockPlan.schema.json)

**Examples:**

```

[
    {
        "object_type": "STOCK_PLAN",
        "id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
        "plan_name": "2021 Stock Incentive Plan",
        "board_approval_date": "1983-12-31",
        "current_shares_reserved": "+10000000.00",
        "stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
        "comments": [
            "Using new form of SOP released by Firm Y's benefits & comp team on 10/10/2021."
        ]
    }
]

```

---
