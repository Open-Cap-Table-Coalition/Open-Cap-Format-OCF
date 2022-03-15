# Object - Stock Conversion Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json
```

Object describing a conversion of stock

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockConversion.schema.json](../../schema/objects/transactions/conversion/StockConversion.schema.json "open original schema") |

## Object - Stock Conversion Transaction Type

`object` ([Object - Stock Conversion Transaction](stockconversion.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Conversion Transaction](convertibleconversion-allof-primitive---security-conversion-transaction.md "check type definition")

# Object - Stock Conversion Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :------------------------------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/object_type")                       |
| [balance_security_id](#balance_security_id)       | `string`      | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/balance_security_id")       |
| [quantity_converted](#quantity_converted)         | `string`      | Required | cannot be null | [Object - Stock Conversion Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/quantity_converted")                                                       |
| [conversion_ratio](#conversion_ratio)             | `object`      | Required | cannot be null | [Object - Stock Conversion Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/conversion_ratio")                                                   |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Conversion Transaction](stockconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/object_type")

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

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/balance_security_id")

### balance_security_id Type

`string`

## quantity_converted

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity_converted`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/quantity_converted")

### quantity_converted Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity_converted Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## conversion_ratio

Type representation of a ratio as antecedent and consequent numeric values

`conversion_ratio`

*   is required

*   Type: `object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/conversion_ratio")

### conversion_ratio Type

`object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Conversion Transaction](stockconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
