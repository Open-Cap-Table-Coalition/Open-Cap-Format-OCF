# Object - Stock Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance
```

Object describing a stock issuance transaction by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockIssuance.schema.json](../../schema/objects/transactions/issuance/StockIssuance.schema.json "open original schema") |

## Object - Stock Issuance Transaction Type

`object` ([Object - Stock Issuance Transaction](stockissuance.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Issuance Transaction](convertibleissuance-allof-primitive---security-issuance-transaction.md "check type definition")

# Object - Stock Issuance Transaction Properties

| Property                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :------------------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/object_type")                                 |
| [stock_class_id](#stock_class_id)                       | `string`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_class_id")                           |
| [share_price](#share_price)                             | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/share_price")                                                            |
| [quantity](#quantity)                                   | `string`      | Required | cannot be null | [Object - Stock Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")                                                                      |
| [vesting_rules](#vesting_rules)                         | `object`      | Optional | cannot be null | [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---vesting-rules.md "https://opencaptablecoalition.com/schema/types/vesting_rules#/properties/vesting_rules")                                        |
| [cost_basis](#cost_basis)                               | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/cost_basis")                                                             |
| [stock_legend_ids](#stock_legend_ids)                   | `array`       | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock-issuance---stock-legend-id-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_legend_ids") |
| [issued_from_parent_object](#issued_from_parent_object) | `object`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-type---stock-parent.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/issued_from_parent_object")                                     |
| [id](#id)                                               | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/id")                                                   |
| [comments](#comments)                                   | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/comments")                                       |
| [security_id](#security_id)                             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/security_id")                                 |
| [date](#date)                                           | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/date")                                               |
| [custom_id](#custom_id)                                 | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/custom_id")                                     |
| [stakeholder_id](#stakeholder_id)                       | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stakeholder_id")                           |
| [board_approval_date](#board_approval_date)             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/board_approval_date")                 |
| [consideration](#consideration)                         | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/consideration")                             |
| [security_law_exemptions](#security_law_exemptions)     | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/security_law_exemptions")         |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_ISSUANCE"
```

## stock_class_id

Identifier of the stock class for this stock issuance

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_class_id")

### stock_class_id Type

`string`

## share_price

Type represention of an amount of money in the specified currency

`share_price`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/share_price")

### share_price Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")

### quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## vesting_rules

Type representing all aspects related to vesting securities

`vesting_rules`

*   is optional

*   Type: `object` ([Type - Vesting Rules](plansecurityissuance-properties-type---vesting-rules.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](plansecurityissuance-properties-type---vesting-rules.md "https://opencaptablecoalition.com/schema/types/vesting_rules#/properties/vesting_rules")

### vesting_rules Type

`object` ([Type - Vesting Rules](plansecurityissuance-properties-type---vesting-rules.md))

## cost_basis

Type represention of an amount of money in the specified currency

`cost_basis`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/cost_basis")

### cost_basis Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## stock_legend_ids

List of stock legend ids that apply to this stock

`stock_legend_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stock-issuance---stock-legend-id-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_legend_ids")

### stock_legend_ids Type

`string[]`

## issued_from_parent_object

Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)

`issued_from_parent_object`

*   is required

*   Type: `object` ([Type - Stock Parent](stockissuance-properties-type---stock-parent.md))

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-type---stock-parent.md "https://opencaptablecoalition.com/schema/types/stock_parent#/properties/issued_from_parent_object")

### issued_from_parent_object Type

`object` ([Type - Stock Parent](stockissuance-properties-type---stock-parent.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
