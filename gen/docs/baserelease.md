# Primitive - Security Release Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release
```

Abstract object describing fields common to all release transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRelease.schema.json](../../schema/primitives/transactions/release/BaseRelease.schema.json "open original schema") |

## Primitive - Security Release Transaction Type

`object` ([Primitive - Security Release Transaction](baserelease.md))

# Primitive - Security Release Transaction Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                               |
| :------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [settlement_date](#settlement_date)         | `string`  | Required | cannot be null | [Primitive - Security Release Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/settlement_date") |
| [release_price](#release_price)             | `object`  | Required | cannot be null | [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/release_price")                               |
| [net_quantity](#net_quantity)               | `string`  | Optional | cannot be null | [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/net_quantity")                                       |
| [method](#method)                           | `string`  | Optional | cannot be null | [Primitive - Security Release Transaction](baserelease-properties-method.md "https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release#/properties/method")                  |
| [stock_swap](#stock_swap)                   | `boolean` | Optional | cannot be null | [Primitive - Security Release Transaction](baserelease-properties-stock_swap.md "https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release#/properties/stock_swap")          |
| [cash_paid](#cash_paid)                     | `object`  | Optional | cannot be null | [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/cash_paid")                                   |
| [quantity_sold](#quantity_sold)             | `string`  | Optional | cannot be null | [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity_sold")                                      |
| [sale_price_per_unit](#sale_price_per_unit) | `object`  | Optional | cannot be null | [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/sale_price_per_unit")                         |
| [withheld_quantity](#withheld_quantity)     | `string`  | Optional | cannot be null | [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/withheld_quantity")                                  |

## settlement_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`settlement_date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/settlement_date")

### settlement_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### settlement_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## release_price

Type represention of an amount of money in the specified currency

`release_price`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/release_price")

### release_price Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## net_quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`net_quantity`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/net_quantity")

### net_quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### net_quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## method

Method of release

`method`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](baserelease-properties-method.md "https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release#/properties/method")

### method Type

`string`

## stock_swap

Whether this is a stock swap or not?

`stock_swap`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](baserelease-properties-stock_swap.md "https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release#/properties/stock_swap")

### stock_swap Type

`boolean`

## cash_paid

Type represention of an amount of money in the specified currency

`cash_paid`

*   is optional

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/cash_paid")

### cash_paid Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## quantity_sold

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity_sold`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity_sold")

### quantity_sold Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity_sold Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## sale_price_per_unit

Type represention of an amount of money in the specified currency

`sale_price_per_unit`

*   is optional

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/sale_price_per_unit")

### sale_price_per_unit Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## withheld_quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`withheld_quantity`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Primitive - Security Release Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/withheld_quantity")

### withheld_quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### withheld_quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")
