### Type - Stock Parent

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/StockParent.schema.json`

_Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                                                                                                                                                                                                                | Description                                                                                             | Required   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| parent_object_type | `Enum - Parent Security Type`</br></br>_Description:_ Enumeration of parent sources a stock can be issued or created from</br></br>**ONE OF:** </br>&bull; STOCK_PLAN </br>&bull; STOCK </br>&bull; WARRANT </br>&bull; CONVERTIBLE | Parent object type for this stock issuance (e.g. a stock plan or warrant)                               | `REQUIRED` |
| parent_object_id   | `STRING`                                                                                                                                                                                                                            | Parent object's ID must be a valid ID pointing to an object of the type specified in parent_object_type | `REQUIRED` |

**Source Code:** [schema/types/StockParent](../../../../schema/types/StockParent.schema.json)

Copyright © 2025 Open Cap Table Coalition.
