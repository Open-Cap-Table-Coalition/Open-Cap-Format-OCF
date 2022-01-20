# Object - Stock Conversion Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion
```

Object describing a conversion of stock

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockConversion.schema.json](../../schema/objects/transactions/conversion/StockConversion.schema.json "open original schema") |

## Object - Stock Conversion Transaction Type

`object` ([Object - Stock Conversion Transaction](stockconversion.md))

all of

*   [Untitled undefined type in Object - Stock Conversion Transaction](stockconversion-allof-0.md "check type definition")

# Object - Stock Conversion Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/object_type")                       |
| [balance_security_id](#balance_security_id)       | `string`      | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/balance_security_id")       |
| [quantity_converted](#quantity_converted)         | Not specified | Required | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-quantity_converted.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/quantity_converted")         |
| [conversion_ratio](#conversion_ratio)             | Not specified | Required | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-conversion_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/conversion_ratio")             |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_CONVERSION"
```

## balance_security_id

Identifier for the security that holds the remainder balance (for partial conversions)

`balance_security_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/balance_security_id")

### balance_security_id Type

`string`

## quantity_converted

Quantity of non-monetary security units converted

`quantity_converted`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-quantity_converted.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/quantity_converted")

### quantity_converted Type

unknown

## conversion_ratio

Quantity of non-monetary security units converted

`conversion_ratio`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-conversion_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/conversion_ratio")

### conversion_ratio Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
