# Primitive - Security Repurchase Release Transaction Schema

```txt
Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json
```

Abstract object describing fields common to all repurchase release transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRepurchaseRelease.schema.json](../../schema/primitives/transactions/repurchaserelease/BaseRepurchaseRelease.schema.json "open original schema") |

## Primitive - Security Repurchase Release Transaction Type

`object` ([Primitive - Security Repurchase Release Transaction](baserepurchaserelease.md))

all of

*   all of

    *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Primitive - Security Repurchase Release Transaction Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [settlement_date](#settlement_date)         | `string`  | Required | cannot be null | [Primitive - Security Repurchase Release Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/settlement_date")                                                   |
| [release_price](#release_price)             | `object`  | Required | cannot be null | [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/release_price")                                                 |
| [net_quantity](#net_quantity)               | `object`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/net_quantity")                                                         |
| [method](#method)                           | `string`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-method.md "Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json#/properties/method")         |
| [stock_swap](#stock_swap)                   | `boolean` | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-stock_swap.md "Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json#/properties/stock_swap") |
| [cash_paid](#cash_paid)                     | `object`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/cash_paid")                                                     |
| [quantity_sold](#quantity_sold)             | `object`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity_sold")                                                        |
| [sale_price_per_unit](#sale_price_per_unit) | `object`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/sale_price_per_unit")                                           |
| [withheld_quantity](#withheld_quantity)     | `object`  | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/withheld_quantity")                                                    |

## settlement_date

Type representing an ISO-8601 date, e.g. 2022-01-28

`settlement_date`

*   is required

*   Type: `string` ([Type - DateString](issuer-properties-type---datestring.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/settlement_date")

### settlement_date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

### settlement_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## release_price

Type representing a monetary value in a specified currency code

`release_price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/release_price")

### release_price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## net_quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`net_quantity`

*   is optional

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/net_quantity")

### net_quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## method

Method of repurchase release

`method`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-method.md "Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json#/properties/method")

### method Type

`string`

## stock_swap

Whether this is a stock swap or not?

`stock_swap`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-stock_swap.md "Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json#/properties/stock_swap")

### stock_swap Type

`boolean`

## cash_paid

Type representing a monetary value in a specified currency code

`cash_paid`

*   is optional

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/cash_paid")

### cash_paid Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## quantity_sold

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity_sold`

*   is optional

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity_sold")

### quantity_sold Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## sale_price_per_unit

Type representing a monetary value in a specified currency code

`sale_price_per_unit`

*   is optional

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/sale_price_per_unit")

### sale_price_per_unit Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## withheld_quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`withheld_quantity`

*   is optional

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/withheld_quantity")

### withheld_quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))
