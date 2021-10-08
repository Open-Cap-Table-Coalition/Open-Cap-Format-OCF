---
template: reference
hide-nav: 'false'
---

# Stock Schema

```txt
Objects.Stock.schema.json
```

Object describing stock issued by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Stock.schema.json](../objects/Stock.schema.json "open original schema") |

## Stock Type

`object` ([Stock](stock.md))

# Stock Properties

| Property                                                      | Type     | Required | Nullable       | Defined by                                                                                                                     |
| :------------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                     | `string` | Required | cannot be null | [Stock](stock-properties-id.md "Objects.Stock.schema.json#/properties/id")                                                     |
| [stock_class_id](#stock_class_id)                             | `string` | Required | cannot be null | [Stock](stock-properties-stock_class_id.md "Objects.Stock.schema.json#/properties/stock_class_id")                             |
| [stakeholder_id](#stakeholder_id)                             | `string` | Required | cannot be null | [Stock](stock-properties-stakeholder_id.md "Objects.Stock.schema.json#/properties/stakeholder_id")                             |
| [issue_date](#issue_date)                                     | `object` | Required | cannot be null | [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/issue_date")                                    |
| [canceled_at](#canceled_at)                                   | `object` | Optional | cannot be null | [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/canceled_at")                                   |
| [security_law_exemptions](#security_law_exemptions)           | `array`  | Optional | cannot be null | [Stock](stock-properties-security_law_exemptions.md "Objects.Stock.schema.json#/properties/security_law_exemptions")           |
| [share_price](#share_price)                                   | `object` | Required | cannot be null | [Stock](valuation-properties-money.md "Types.Money.schema.json#/properties/share_price")                                       |
| [shares](#shares)                                             | `object` | Required | cannot be null | [Stock](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/shares")                                           |
| [vesting_schedule_template_id](#vesting_schedule_template_id) | Merged   | Optional | cannot be null | [Stock](stock-properties-vesting_schedule_template_id.md "Objects.Stock.schema.json#/properties/vesting_schedule_template_id") |
| [vesting_start_date](#vesting_start_date)                     | `object` | Optional | cannot be null | [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/vesting_start_date")                            |
| [cost_basis](#cost_basis)                                     | `object` | Required | cannot be null | [Stock](valuation-properties-money.md "Types.Money.schema.json#/properties/cost_basis")                                        |
| [stock_legend_ids](#stock_legend_ids)                         | `array`  | Required | cannot be null | [Stock](stock-properties-stock_legend_ids.md "Objects.Stock.schema.json#/properties/stock_legend_ids")                         |
| [comments](#comments)                                         | `array`  | Optional | cannot be null | [Stock](stock-properties-comments.md "Objects.Stock.schema.json#/properties/comments")                                         |

## id

Identifier for the stock

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock](stock-properties-id.md "Objects.Stock.schema.json#/properties/id")

### id Type

`string`

## stock_class_id

Id of StockClass of this stock issuance

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock](stock-properties-stock_class_id.md "Objects.Stock.schema.json#/properties/stock_class_id")

### stock_class_id Type

`string`

## stakeholder_id

Id of stakeholder that owns this stock

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock](stock-properties-stakeholder_id.md "Objects.Stock.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## issue_date

Type representing an instant in Universal Coordinated Time (UTC)

`issue_date`

*   is required

*   Type: `object` ([Date-Time](issuer-properties-date-time.md))

*   cannot be null

*   defined in: [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/issue_date")

### issue_date Type

`object` ([Date-Time](issuer-properties-date-time.md))

## canceled_at

Type representing an instant in Universal Coordinated Time (UTC)

`canceled_at`

*   is optional

*   Type: `object` ([Date-Time](issuer-properties-date-time.md))

*   cannot be null

*   defined in: [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/canceled_at")

### canceled_at Type

`object` ([Date-Time](issuer-properties-date-time.md))

## security_law_exemptions

List of security law exemptions applicable to this stock and corresponding jurisdictions

`security_law_exemptions`

*   is optional

*   Type: `object[]` ([SecurityExemption](stock-properties-security_law_exemptions-securityexemption.md))

*   cannot be null

*   defined in: [Stock](stock-properties-security_law_exemptions.md "Objects.Stock.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([SecurityExemption](stock-properties-security_law_exemptions-securityexemption.md))

## share_price

Type representing a monetary value in a specified currency code

`share_price`

*   is required

*   Type: `object` ([Money](valuation-properties-money.md))

*   cannot be null

*   defined in: [Stock](valuation-properties-money.md "Types.Money.schema.json#/properties/share_price")

### share_price Type

`object` ([Money](valuation-properties-money.md))

## shares

Type representation of a number (up to 10 decimal places supported by the spec)

`shares`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/shares")

### shares Type

`object` ([Name](stockplan-properties-name.md))

## vesting_schedule_template_id

Pointed to the vesting schedule template applicable to the stock

`vesting_schedule_template_id`

*   is optional

*   Type: merged type ([Details](stock-properties-vesting_schedule_template_id.md))

*   cannot be null

*   defined in: [Stock](stock-properties-vesting_schedule_template_id.md "Objects.Stock.schema.json#/properties/vesting_schedule_template_id")

### vesting_schedule_template_id Type

merged type ([Details](stock-properties-vesting_schedule_template_id.md))

one (and only one) of

*   [Untitled null in Stock](stock-properties-vesting_schedule_template_id-oneof-0.md "check type definition")

*   [VestingScheduleTemplate](stock-properties-vesting_schedule_template_id-oneof-vestingscheduletemplate.md "check type definition")

## vesting_start_date

Type representing an instant in Universal Coordinated Time (UTC)

`vesting_start_date`

*   is optional

*   Type: `object` ([Date-Time](issuer-properties-date-time.md))

*   cannot be null

*   defined in: [Stock](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/vesting_start_date")

### vesting_start_date Type

`object` ([Date-Time](issuer-properties-date-time.md))

## cost_basis

Type representing a monetary value in a specified currency code

`cost_basis`

*   is required

*   Type: `object` ([Money](valuation-properties-money.md))

*   cannot be null

*   defined in: [Stock](valuation-properties-money.md "Types.Money.schema.json#/properties/cost_basis")

### cost_basis Type

`object` ([Money](valuation-properties-money.md))

## stock_legend_ids

List of stock legend ids that apply to this stock

`stock_legend_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Stock](stock-properties-stock_legend_ids.md "Objects.Stock.schema.json#/properties/stock_legend_ids")

### stock_legend_ids Type

`string[]`

## comments

List of comments for this stock

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Stock](stock-properties-comments.md "Objects.Stock.schema.json#/properties/comments")

### comments Type

`string[]`
