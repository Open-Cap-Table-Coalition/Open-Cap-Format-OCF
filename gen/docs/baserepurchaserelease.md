# Primitive - Security Repurchase Release Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release
```

Abstract object describing fields common to all repurchase release transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRepurchaseRelease.schema.json](../../schema/primitives/transactions/repurchase_release/BaseRepurchaseRelease.schema.json "open original schema") |

## Primitive - Security Repurchase Release Transaction Type

`object` ([Primitive - Security Repurchase Release Transaction](baserepurchaserelease.md))

all of

*   [Untitled undefined type in Primitive - Security Repurchase Release Transaction](baserepurchaserelease-allof-0.md "check type definition")

# Primitive - Security Repurchase Release Transaction Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                   |
| :------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [settlement_date](#settlement_date)         | Not specified | Required | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-settlement_date.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/settlement_date")         |
| [release_price](#release_price)             | Not specified | Required | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-release_price.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/release_price")             |
| [net_quantity](#net_quantity)               | Not specified | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-net_quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/net_quantity")               |
| [method](#method)                           | `string`      | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-method.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/method")                           |
| [stock_swap](#stock_swap)                   | `boolean`     | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-stock_swap.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/stock_swap")                   |
| [cash_paid](#cash_paid)                     | Not specified | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-cash_paid.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/cash_paid")                     |
| [quantity_sold](#quantity_sold)             | Not specified | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-quantity_sold.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/quantity_sold")             |
| [sale_price_per_unit](#sale_price_per_unit) | Not specified | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-sale_price_per_unit.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/sale_price_per_unit") |
| [withheld_quantity](#withheld_quantity)     | Not specified | Optional | cannot be null | [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-withheld_quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/withheld_quantity")     |

## settlement_date

Date of settlement

`settlement_date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-settlement_date.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/settlement_date")

### settlement_date Type

unknown

## release_price

Consideration for the security

`release_price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-release_price.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/release_price")

### release_price Type

unknown

## net_quantity

Net quantity of security units

`net_quantity`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-net_quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/net_quantity")

### net_quantity Type

unknown

## method

Method of repurchase release

`method`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-method.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/method")

### method Type

`string`

## stock_swap

Whether this is a stock swap or not?

`stock_swap`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-stock_swap.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/stock_swap")

### stock_swap Type

`boolean`

## cash_paid

Cash paid for the security

`cash_paid`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-cash_paid.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/cash_paid")

### cash_paid Type

unknown

## quantity_sold

Quantity of security units sold

`quantity_sold`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-quantity_sold.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/quantity_sold")

### quantity_sold Type

unknown

## sale_price_per_unit

Cash paid for the security

`sale_price_per_unit`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-sale_price_per_unit.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/sale_price_per_unit")

### sale_price_per_unit Type

unknown

## withheld_quantity

Quantity of security units withheld

`withheld_quantity`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Repurchase Release Transaction](baserepurchaserelease-properties-withheld_quantity.md "https://opencaptablecoalition.com/schema/primitives/transactions/repurchase_release/base_repurchase_release#/properties/withheld_quantity")

### withheld_quantity Type

unknown
