# Enum - OCF File Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/FileType.schema.json#/properties/file_type
```

Enumeration of different OCF file types which are used to load proper schemas for validation

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [BaseFile.schema.json*](../../schema/primitives/BaseFile.schema.json "open original schema") |

## file_type Type

`string` ([Enum - OCF File Type](basefile-properties-enum---ocf-file-type.md))

## file_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"OCF_MANIFEST_FILE"`               |             |
| `"OCF_STAKEHOLDERS_FILE"`           |             |
| `"OCF_STOCK_CLASSES_FILE"`          |             |
| `"OCF_STOCK_LEGEND_TEMPLATES_FILE"` |             |
| `"OCF_STOCK_PLANS_FILE"`            |             |
| `"OCF_TRANSACTIONS_FILE"`           |             |
| `"OCF_VALUATIONS_FILE"`             |             |
| `"OCF_VESTING_SCHEDULES_FILE"`      |             |
