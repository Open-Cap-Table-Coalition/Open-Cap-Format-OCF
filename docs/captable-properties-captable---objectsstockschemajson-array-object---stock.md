# Object - Stock Schema

```txt
Objects.Stock.schema.json#/properties/stock_issuances/items
```

Object describing stock issued by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json*](../CapTable.schema.json "open original schema") |

## items Type

`object` ([Object - Stock](captable-properties-captable---objectsstockschemajson-array-object---stock.md))

# items Properties

| Property                                                | Type                        | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------------------------------------------ | :-------------------------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                               | `string`                    | Required | cannot be null | [Object - Stock](stock-properties-id.md "Objects.Stock.schema.json#/properties/id")                                                            |
| [stock_class_id](#stock_class_id)                       | `string`                    | Required | cannot be null | [Object - Stock](stock-properties-stock_class_id.md "Objects.Stock.schema.json#/properties/stock_class_id")                                    |
| [custom_id](#custom_id)                                 | `string`                    | Optional | cannot be null | [Object - Stock](stock-properties-custom_id.md "Objects.Stock.schema.json#/properties/custom_id")                                              |
| [stakeholder_id](#stakeholder_id)                       | `string`                    | Required | cannot be null | [Object - Stock](stock-properties-stakeholder_id.md "Objects.Stock.schema.json#/properties/stakeholder_id")                                    |
| [issue_date](#issue_date)                               | `object`                    | Required | cannot be null | [Object - Stock](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")                                     |
| [canceled_at](#canceled_at)                             | `object`                    | Optional | cannot be null | [Object - Stock](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")                                    |
| [security_law_exemptions](#security_law_exemptions)     | `array`                     | Optional | cannot be null | [Object - Stock](stock-properties-stock---security-law-exemption-ids-array.md "Objects.Stock.schema.json#/properties/security_law_exemptions") |
| [share_price](#share_price)                             | `object`                    | Required | cannot be null | [Object - Stock](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/share_price")                                  |
| [shares](#shares)                                       | `object`                    | Required | cannot be null | [Object - Stock](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares")                                        |
| [vesting](#vesting)                                     | `Types.Vesting.schema.json` | Optional | cannot be null | [Object - Stock](stock-properties-vesting.md "Objects.Stock.schema.json#/properties/vesting")                                                  |
| [cost_basis](#cost_basis)                               | `object`                    | Required | cannot be null | [Object - Stock](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/cost_basis")                                   |
| [stock_legend_ids](#stock_legend_ids)                   | `array`                     | Required | cannot be null | [Object - Stock](stock-properties-stock---stock-legend-id-array.md "Objects.Stock.schema.json#/properties/stock_legend_ids")                   |
| [issued_from_parent_object](#issued_from_parent_object) | `object`                    | Required | cannot be null | [Object - Stock](stock-properties-type---stockparent.md "Types.StockParent.schema.json#/properties/issued_from_parent_object")                 |
| [comments](#comments)                                   | `array`                     | Optional | cannot be null | [Object - Stock](stock-properties-stock---comments.md "Objects.Stock.schema.json#/properties/comments")                                        |

## id

Identifier for the stock

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-id.md "Objects.Stock.schema.json#/properties/id")

### id Type

`string`

## stock_class_id

Id of StockClass of this stock issuance

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-stock_class_id.md "Objects.Stock.schema.json#/properties/stock_class_id")

### stock_class_id Type

`string`

## custom_id

An override of the StockClass custom_id for this issuance (e.g. CS-1.)

`custom_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-custom_id.md "Objects.Stock.schema.json#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Id of stakeholder that owns this stock

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-stakeholder_id.md "Objects.Stock.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## issue_date

Type representing an instant in Universal Coordinated Time (UTC)

`issue_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Stock](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")

### issue_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## canceled_at

Type representing an instant in Universal Coordinated Time (UTC)

`canceled_at`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Stock](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")

### canceled_at Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## security_law_exemptions

List of security law exemptions applicable to this stock and corresponding jurisdictions

`security_law_exemptions`

*   is optional

*   Type: `object[]` ([Type - SecurityExemption](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array-type---securityexemption.md))

*   cannot be null

*   defined in: [Object - Stock](stock-properties-stock---security-law-exemption-ids-array.md "Objects.Stock.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([Type - SecurityExemption](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array-type---securityexemption.md))

## share_price

Type representing a monetary value in a specified currency code

`share_price`

*   is required

*   Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Stock](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/share_price")

### share_price Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## shares

Type representation of a number (up to 10 decimal places supported by the spec)

`shares`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Stock](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares")

### shares Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## vesting

Vesting conditions applicable to this stock

`vesting`

*   is optional

*   Type: `Types.Vesting.schema.json`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-vesting.md "Objects.Stock.schema.json#/properties/vesting")

### vesting Type

`Types.Vesting.schema.json`

## cost_basis

Type representing a monetary value in a specified currency code

`cost_basis`

*   is required

*   Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Stock](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/cost_basis")

### cost_basis Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## stock_legend_ids

List of stock legend ids that apply to this stock

`stock_legend_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-stock---stock-legend-id-array.md "Objects.Stock.schema.json#/properties/stock_legend_ids")

### stock_legend_ids Type

`string[]`

## issued_from_parent_object

Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a Stock came from a previous Stock entry)

`issued_from_parent_object`

*   is required

*   Type: `object` ([Type - StockParent](stock-properties-type---stockparent.md))

*   cannot be null

*   defined in: [Object - Stock](stock-properties-type---stockparent.md "Types.StockParent.schema.json#/properties/issued_from_parent_object")

### issued_from_parent_object Type

`object` ([Type - StockParent](stock-properties-type---stockparent.md))

## comments

List of comments for this stock

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Stock](stock-properties-stock---comments.md "Objects.Stock.schema.json#/properties/comments")

### comments Type

`string[]`
