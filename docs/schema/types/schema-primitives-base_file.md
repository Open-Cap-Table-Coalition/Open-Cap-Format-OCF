### Object - Vesting Schedule

`https://opencaptablecoalition.com/schema/objects/vesting_schedule`

**Description:** _Object describing a strictly time-based vesting schedule_

**Data Type:** `OCF Object - VESTING_SCHEDULE`

\*\*Inherits Properties From:

** Properties: **

# https://opencaptablecoalition.com/schema/objects/vesting_schedule

| Property                           | Type                                                           | Description                                                                                           | Required   |
| ---------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| object_type                        | https://opencaptablecoalition.com/schema/enums/object_type     | Object type field                                                                                     | `REQUIRED` |
| name                               | string                                                         | Concise name for the vesting schedule                                                                 | `REQUIRED` |
| description                        | string                                                         | Detailed description of the vesting schedule                                                          | `REQUIRED` |
| allocation_type                    | https://opencaptablecoalition.com/schema/enums/allocation_type | Allocation/rounding type for the vesting schedule                                                     | `REQUIRED` |
| fractional_tranches_allowed        | boolean                                                        | Whether or not fractional tranches are allowed. Note: if this is true, the allocation type is ignored | `REQUIRED` |
| schedule_driven_vesting_conditions | array                                                          | Schedule rows defining the vesting schedule tranches                                                  | `REQUIRED` |
| id                                 | string                                                         | Identifier for the object                                                                             | `REQUIRED` |
| comments                           | array                                                          | Unstructured text comments related to and stored for the object                                       | -          |
