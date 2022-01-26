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

*   all of

    *   all of

        *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Object - Warrant Issuance Transaction Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                            |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/object_type")                                                  |
| [conversion_rights](#conversion_rights)             | `array`       | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant-issuance---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/conversion_rights") |
| [quantity](#quantity)                               | `string`      | Required | cannot be null | [Object - Warrant Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")                                                                                           |
| [exercise_price](#exercise_price)                   | `object`      | Required | cannot be null | [Object - Warrant Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/exercise_price")                                                                              |
| [purchase_price](#purchase_price)                   | `object`      | Required | cannot be null | [Object - Warrant Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/purchase_price")                                                                              |
| [vesting_rules](#vesting_rules)                     | `object`      | Optional | cannot be null | [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---vesting-rules.md "https://opencaptablecoalition.com/schema/types/vesting_rules#/properties/vesting_rules")                                                             |
| [expiration_date](#expiration_date)                 | `string`      | Optional | cannot be null | [Object - Warrant Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/expiration_date")                                                 |
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

*   Type: `object[]` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant-issuance---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

## quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")

### quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## exercise_price

Type represention of an amount of money in the specified currency

`exercise_price`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/exercise_price")

### exercise_price Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## purchase_price

Type represention of an amount of money in the specified currency

`purchase_price`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/purchase_price")

### purchase_price Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## vesting_rules

Type representing all aspects related to vesting securities

`vesting_rules`

*   is optional

*   Type: `object` ([Type - Vesting Rules](plansecurityissuance-properties-type---vesting-rules.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---vesting-rules.md "https://opencaptablecoalition.com/schema/types/vesting_rules#/properties/vesting_rules")

### vesting_rules Type

`object` ([Type - Vesting Rules](plansecurityissuance-properties-type---vesting-rules.md))

## expiration_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`expiration_date`

*   is optional

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/expiration_date")

### expiration_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### expiration_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

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
