:house: [Documentation Home](../../../README.md)

---

### Type - Share Number Range

`https://opencaptablecoalition.com/schema/types/ShareNumberRange.schema.json`

_Type representation of a range of share numbers associated with an event (such as the share numbers associated with an issuance) - for use where shares are not fungible and need unique identifiers *per share*_

**Data Type:** `OCF TYPE`

**Properties:**

| Property              | Type                                | Description                                                                                   | Required   |
| --------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| starting_share_number | [schema/types/Numeric](/Numeric.md) | The starting share number of a range of shares impacted by a particular event (**INCLUSIVE**) | `REQUIRED` |
| ending_share_number   | [schema/types/Numeric](/Numeric.md) | The ending share number of a range of shares impacted by a particular event (**INCLUSIVE**)   | `REQUIRED` |

**Source Code:** [schema/types/ShareNumberRange](../../../../schema/types/ShareNumberRange.schema.json)

Copyright © 2022 Open Cap Table Coalition.
