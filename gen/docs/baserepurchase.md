# Primitive - Security Repurchase Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/BaseRepurchase.schema.json
```

Abstract object describing common properties to a repurchase transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRepurchase.schema.json](../../schema/primitives/transactions/repurchase/BaseRepurchase.schema.json "open original schema") |

## Primitive - Security Repurchase Transaction Type

`object` ([Primitive - Security Repurchase Transaction](baserepurchase.md))

# Primitive - Security Repurchase Transaction Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                |
| :------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [price](#price)                                   | `object` | Required | cannot be null | [Primitive - Security Repurchase Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/price")                                                                                         |
| [quantity](#quantity)                             | `string` | Required | cannot be null | [Primitive - Security Repurchase Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/quantity")                                                                                             |
| [consideration](#consideration)                   | `object` | Required | cannot be null | [Primitive - Security Repurchase Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")                                                                                 |
| [resulting_security_ids](#resulting_security_ids) | `array`  | Optional | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/BaseRepurchase.schema.json#/properties/resulting_security_ids") |

## price

Type represention of an amount of money in the specified currency

`price`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/price")

### price Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/quantity")

### quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## consideration

Type represention of an amount of money in the specified currency

`consideration`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")

### consideration Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## resulting_security_ids

For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares

`resulting_security_ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/BaseRepurchase.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
