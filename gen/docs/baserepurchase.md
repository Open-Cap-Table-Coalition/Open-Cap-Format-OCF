# Primitive - Security Repurchase Transaction Schema

```txt
Primitives.Transactions.Repurchase.BaseRepurchase.schema.json
```

Abstract object describing a repurchase transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRepurchase.schema.json](../../schema/primitives/transactions/repurchase/BaseRepurchase.schema.json "open original schema") |

## Primitive - Security Repurchase Transaction Type

`object` ([Primitive - Security Repurchase Transaction](baserepurchase.md))

all of

*   all of

    *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Primitive - Security Repurchase Transaction Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [price](#price)                                   | `object` | Required | cannot be null | [Primitive - Security Repurchase Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/price")                                                                                       |
| [quantity](#quantity)                             | `object` | Required | cannot be null | [Primitive - Security Repurchase Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                                                           |
| [consideration](#consideration)                   | `object` | Required | cannot be null | [Primitive - Security Repurchase Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/consideration")                                                                               |
| [resulting_security_ids](#resulting_security_ids) | `array`  | Optional | cannot be null | [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "Primitives.Transactions.Repurchase.BaseRepurchase.schema.json#/properties/resulting_security_ids") |

## price

Type representing a monetary value in a specified currency code

`price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/price")

### price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## consideration

Type representing a monetary value in a specified currency code

`consideration`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/consideration")

### consideration Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## resulting_security_ids

For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares.

`resulting_security_ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Transaction](baserepurchase-properties-security-repurchase---resulting-security-id-array.md "Primitives.Transactions.Repurchase.BaseRepurchase.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
