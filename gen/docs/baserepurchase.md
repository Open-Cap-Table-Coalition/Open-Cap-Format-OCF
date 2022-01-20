# Primitive - Security Repurchase Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase
```

Abstract object describing common properties to a repurchase transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRepurchase.schema.json](../../schema/primitives/transactions/repurchase/BaseRepurchase.schema.json "open original schema") |

## Primitive - Security Repurchase Transaction Type

`object` ([Primitive - Security Repurchase Transaction](baserepurchase.md))

all of

*   [Untitled undefined type in Primitive - Security Repurchase Transaction](baserepurchase-allof-0.md "check type definition")

# Primitive - Security Repurchase Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [price](#price)                                   | Not specified | Required | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-price.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/price")                                                              |
| [quantity](#quantity)                             | Not specified | Required | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/quantity")                                                        |
| [consideration](#consideration)                   | Not specified | Required | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/consideration")                                              |
| [resulting_security_ids](#resulting_security_ids) | `array`       | Optional | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/resulting_security_ids") |

## price

Repurchase price per share of the stock

`price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-price.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/price")

### price Type

unknown

## quantity

Number of shares of stock repurchased

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/quantity")

### quantity Type

unknown

## consideration

Consideration for the repurchase of the stock

`consideration`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/consideration")

### consideration Type

unknown

## resulting_security_ids

For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares

`resulting_security_ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
