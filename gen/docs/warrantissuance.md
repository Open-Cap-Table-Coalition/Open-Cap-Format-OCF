# Object - Warrant Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance
```

Object describing warrant issuance transaction by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [WarrantIssuance.schema.json](../../schema/objects/transactions/issuance/WarrantIssuance.schema.json "open original schema") |

## Object - Warrant Issuance Transaction Type

`object` ([Object - Warrant Issuance Transaction](warrantissuance.md))

all of

*   [Untitled undefined type in Object - Warrant Issuance Transaction](warrantissuance-allof-0.md "check type definition")

# Object - Warrant Issuance Transaction Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                            |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/object_type")                                                  |
| [conversion_rights](#conversion_rights)             | `array`       | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant-issuance---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/conversion_rights") |
| [quantity](#quantity)                               | Not specified | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/quantity")                                                        |
| [exercise_price](#exercise_price)                   | Not specified | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-exercise_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/exercise_price")                                            |
| [purchase_price](#purchase_price)                   | Not specified | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-purchase_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/purchase_price")                                            |
| [vesting_rules](#vesting_rules)                     | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/vesting_rules")                                              |
| [expiration_date](#expiration_date)                 | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-expiration_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/expiration_date")                                          |
| [id](#id)                                           | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/id")                                                                    |
| [comments](#comments)                               | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/comments")                                                        |
| [security_id](#security_id)                         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/security_id")                                                  |
| [date](#date)                                       | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/date")                                                                |
| [custom_id](#custom_id)                             | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/custom_id")                                                      |
| [stakeholder_id](#stakeholder_id)                   | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/stakeholder_id")                                            |
| [board_approval_date](#board_approval_date)         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/board_approval_date")                                  |
| [consideration](#consideration)                     | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/consideration")                                              |
| [security_law_exemptions](#security_law_exemptions) | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/security_law_exemptions")                          |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_WARRANT_ISSUANCE"
```

## conversion_rights

What can this instrument convert into for a maturity or next equity financing conversion?

`conversion_rights`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant-issuance---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/conversion_rights")

### conversion_rights Type

unknown\[]

## quantity

Quantity of shares the warrant is exercisable for

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/quantity")

### quantity Type

unknown

## exercise_price

The exercise price of the warrant

`exercise_price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-exercise_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/exercise_price")

### exercise_price Type

unknown

## purchase_price

Actual purchase price of the warrant (sum up purported value of all consideration, including in-kind)

`purchase_price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-purchase_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/purchase_price")

### purchase_price Type

unknown

## vesting_rules

Vesting conditions applicable to the warrant

`vesting_rules`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/vesting_rules")

### vesting_rules Type

unknown

## expiration_date

Expiration date of the warrant, if applicable

`expiration_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-expiration_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/expiration_date")

### expiration_date Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
