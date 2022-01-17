# Object - Warrant Issuance Transaction Schema

```txt
Objects.Transactions.Issuance.WarrantIssuance.schema.json
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

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Warrant Issuance Transaction Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-object_type.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/object_type")                                      |
| [conversion_rights](#conversion_rights)             | `array`       | Required | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant---stockclassconversionrights-array.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/conversion_rights") |
| [quantity](#quantity)                               | `object`      | Required | cannot be null | [Object - Warrant Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                                            |
| [exercise_price](#exercise_price)                   | `object`      | Required | cannot be null | [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")                                                               |
| [purchase_price](#purchase_price)                   | `object`      | Required | cannot be null | [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/purchase_price")                                                               |
| [vesting](#vesting)                                 | `object`      | Optional | cannot be null | [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")                                                                  |
| [expiration_date](#expiration_date)                 | `string`      | Optional | cannot be null | [Object - Warrant Issuance Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/expiration_date")                                                                  |
| [id](#id)                                           | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/id")                                                        |
| [comments](#comments)                               | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-comments.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/comments")                                            |
| [security_id](#security_id)                         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-security_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/security_id")                                      |
| [date](#date)                                       | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-date.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/date")                                                    |
| [custom_id](#custom_id)                             | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-custom_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/custom_id")                                          |
| [stakeholder_id](#stakeholder_id)                   | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/stakeholder_id")                                |
| [board_approval_date](#board_approval_date)         | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/board_approval_date")                      |
| [consideration](#consideration)                     | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-consideration.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/consideration")                                  |
| [security_law_exemptions](#security_law_exemptions) | Not specified | Optional | cannot be null | [Object - Warrant Issuance Transaction](warrantissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/security_law_exemptions")              |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-object_type.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/object_type")

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

*   Type: `object[]` ([Type - StockClassConversionRights](convertibleissuance-properties-type---stockclassconversionrights.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-warrant---stockclassconversionrights-array.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([Type - StockClassConversionRights](convertibleissuance-properties-type---stockclassconversionrights.md))

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## exercise_price

Type representing a monetary value in a specified currency code

`exercise_price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")

### exercise_price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## purchase_price

Type representing a monetary value in a specified currency code

`purchase_price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/purchase_price")

### purchase_price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## vesting

Type representing all aspects related to vesting securities

`vesting`

*   is optional

*   Type: `object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")

### vesting Type

`object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

## expiration_date

Type representing an ISO-8601 date, e.g. 2022-01-28

`expiration_date`

*   is optional

*   Type: `string` ([Type - DateString](issuer-properties-type---datestring.md))

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/expiration_date")

### expiration_date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

### expiration_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-comments.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-security_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-date.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-custom_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-consideration.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Issuance Transaction](warrantissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
