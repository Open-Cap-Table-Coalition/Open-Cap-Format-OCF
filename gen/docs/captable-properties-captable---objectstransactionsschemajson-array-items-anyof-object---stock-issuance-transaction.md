# Object - Stock Issuance Transaction Schema

```txt
Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/transactions/items/anyOf/3
```

Object describing a stock issuance transaction by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json*](../../schema/CapTable.schema.json "open original schema") |

## 3 Type

`object` ([Object - Stock Issuance Transaction](captable-properties-captable---objectstransactionsschemajson-array-items-anyof-object---stock-issuance-transaction.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 3 Properties

| Property                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                               |
| :------------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-object_type.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/object_type")                         |
| [stock_class_id](#stock_class_id)                       | `string`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock_class_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_class_id")                   |
| [share_price](#share_price)                             | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/share_price")                                                 |
| [quantity](#quantity)                                   | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                           |
| [vesting](#vesting)                                     | `object`      | Optional | cannot be null | [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")                                                 |
| [cost_basis](#cost_basis)                               | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/cost_basis")                                                  |
| [stock_legend_ids](#stock_legend_ids)                   | `array`       | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock---stock-legend-id-array.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_legend_ids")  |
| [issued_from_parent_object](#issued_from_parent_object) | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-type---stockparent.md "Types.StockParent.schema.json#/properties/issued_from_parent_object")                              |
| [id](#id)                                               | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/id")                                           |
| [comments](#comments)                                   | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-comments.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/comments")                               |
| [security_id](#security_id)                             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-security_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/security_id")                         |
| [date](#date)                                           | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-date.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/date")                                       |
| [custom_id](#custom_id)                                 | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-custom_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/custom_id")                             |
| [stakeholder_id](#stakeholder_id)                       | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stakeholder_id")                   |
| [board_approval_date](#board_approval_date)             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/board_approval_date")         |
| [consideration](#consideration)                         | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-consideration.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/consideration")                     |
| [security_law_exemptions](#security_law_exemptions)     | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/security_law_exemptions") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-object_type.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_ISSUANCE"
```

## stock_class_id

Id of StockClass of this stock issuance

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stock_class_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_class_id")

### stock_class_id Type

`string`

## share_price

Type representing a monetary value in a specified currency code

`share_price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/share_price")

### share_price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## vesting

Type representing all aspects related to vesting securities

`vesting`

*   is optional

*   Type: `object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")

### vesting Type

`object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

## cost_basis

Type representing a monetary value in a specified currency code

`cost_basis`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/cost_basis")

### cost_basis Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## stock_legend_ids

List of stock legend ids that apply to this stock

`stock_legend_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stock---stock-legend-id-array.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_legend_ids")

### stock_legend_ids Type

`string[]`

## issued_from_parent_object

Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a Stock came from a previous Stock entry)

`issued_from_parent_object`

*   is required

*   Type: `object` ([Type - StockParent](stockissuance-properties-type---stockparent.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-type---stockparent.md "Types.StockParent.schema.json#/properties/issued_from_parent_object")

### issued_from_parent_object Type

`object` ([Type - StockParent](stockissuance-properties-type---stockparent.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-comments.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-security_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-date.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-custom_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-consideration.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
