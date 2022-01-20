# Type - Stock Parent Schema

```txt
https://opencaptablecoalition.com/schema/types/stock_parent
```

Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockParent.schema.json](../../schema/types/StockParent.schema.json "open original schema") |

## Type - Stock Parent Type

`object` ([Type - Stock Parent](stockparent.md))

# Type - Stock Parent Properties

| Property                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                       |
| :---------------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [parent_object_type](#parent_object_type) | Not specified | Required | cannot be null | [Type - Stock Parent](stockparent-properties-parent_object_type.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/parent_object_type") |
| [parent_object_id](#parent_object_id)     | `string`      | Required | cannot be null | [Type - Stock Parent](stockparent-properties-parent_object_id.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/parent_object_id")     |

## parent_object_type

Parent object type for this stock issuance (e.g. a stock plan or warrant)

`parent_object_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Stock Parent](stockparent-properties-parent_object_type.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/parent_object_type")

### parent_object_type Type

unknown

## parent_object_id

Parent object's ID must be a valid ID pointing to an object of the type specified in parent_object_type

`parent_object_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Stock Parent](stockparent-properties-parent_object_id.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/parent_object_id")

### parent_object_id Type

`string`
