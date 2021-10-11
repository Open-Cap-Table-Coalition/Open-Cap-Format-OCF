# Enum - Parent Stock Type Schema

```txt
Enums.Parent.schema.json#/properties/parent_object_type
```

Enumeration of parent sources a stock can be issued or created from

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [StockParent.schema.json*](../out/types/StockParent.schema.json "open original schema") |

## parent_object_type Type

`string` ([Enum - Parent Stock Type](stockparent-properties-enum---parent-stock-type.md))

## parent_object_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"STOCK_PLAN"`  |             |
| `"STOCK"`       |             |
| `"WARRANT"`     |             |
| `"CONVERTIBLE"` |             |
