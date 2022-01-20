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

*   [Untitled undefined type in Object - Stock Issuance Transaction](stockissuance-allof-0.md "check type definition")

# Object - Stock Issuance Transaction Properties

| Property                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :------------------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                             | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/object_type")                                 |
| [stock_class_id](#stock_class_id)                       | `string`      | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_class_id")                           |
| [share_price](#share_price)                             | Not specified | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-share_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/share_price")                                 |
| [quantity](#quantity)                                   | Not specified | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/quantity")                                       |
| [vesting_rules](#vesting_rules)                         | Not specified | Optional | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/vesting_rules")                             |
| [cost_basis](#cost_basis)                               | Not specified | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-cost_basis.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/cost_basis")                                   |
| [stock_legend_ids](#stock_legend_ids)                   | `array`       | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-stock-issuance---stock-legend-id-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/stock_legend_ids") |
| [issued_from_parent_object](#issued_from_parent_object) | Not specified | Required | cannot be null | [Object - Stock Issuance Transaction](stockissuance-properties-issued_from_parent_object.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/issued_from_parent_object")     |
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

The price per share paid for the stock by the holder

`share_price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-share_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/share_price")

### share_price Type

unknown

## quantity

Number of shares issued to the stakeholder

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/quantity")

### quantity Type

unknown

## vesting_rules

Vesting conditions applicable to this stock

`vesting_rules`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/vesting_rules")

### vesting_rules Type

unknown

## cost_basis

The cost basis for this particular stock

`cost_basis`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-cost_basis.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/cost_basis")

### cost_basis Type

unknown

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

Did this stock come from a Plan, a StockClass, another Stock issuance, a Convertible or a Warrant, and, if so, which one?

`issued_from_parent_object`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Issuance Transaction](stockissuance-properties-issued_from_parent_object.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance#/properties/issued_from_parent_object")

### issued_from_parent_object Type

unknown

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
