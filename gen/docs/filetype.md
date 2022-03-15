# Enum - OCF File Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/FileType.schema.json
```

Enumeration of different OCF file types which are used to load proper schemas for validation

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [FileType.schema.json](../../schema/enums/FileType.schema.json "open original schema") |

## Enum - OCF File Type Type

`string` ([Enum - OCF File Type](filetype.md))

## Enum - OCF File Type Constraints

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
