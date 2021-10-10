# Type - StockParent Schema

```txt
Types.StockParent.schema.json
```

Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a Stock came from a previous Stock entry)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockParent.schema.json](../types/StockParent.schema.json "open original schema") |

## Type - StockParent Type

`object` ([Type - StockParent](stockparent.md))

# Type - StockParent Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :---------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [parent_object_type](#parent_object_type) | `string` | Required | cannot be null | [Type - StockParent](stockparent-properties-enum---parent-stock-type.md "Enums.Parent.schema.json#/properties/parent_object_type") |
| [parent_object_id](#parent_object_id)     | `string` | Required | cannot be null | [Type - StockParent](stockparent-properties-parent_object_id.md "Types.StockParent.schema.json#/properties/parent_object_id")      |

## parent_object_type

Enumeration of parent stock types

`parent_object_type`

*   is required

*   Type: `string` ([Enum - Parent Stock Type](stockparent-properties-enum---parent-stock-type.md))

*   cannot be null

*   defined in: [Type - StockParent](stockparent-properties-enum---parent-stock-type.md "Enums.Parent.schema.json#/properties/parent_object_type")

### parent_object_type Type

`string` ([Enum - Parent Stock Type](stockparent-properties-enum---parent-stock-type.md))

### parent_object_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"STOCK_PLAN"`  |             |
| `"STOCK"`       |             |
| `"WARRANT"`     |             |
| `"CONVERTIBLE"` |             |

## parent_object_id

Parent object's ID, which must be a valid ID pointing to an object of type parent_object_type

`parent_object_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - StockParent](stockparent-properties-parent_object_id.md "Types.StockParent.schema.json#/properties/parent_object_id")

### parent_object_id Type

`string`
