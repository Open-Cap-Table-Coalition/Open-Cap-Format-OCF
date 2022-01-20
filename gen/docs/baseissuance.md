# Primitive - Security Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance
```

Abstract object describing fields common to all issuance objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseIssuance.schema.json](../../schema/primitives/transactions/issuance/BaseIssuance.schema.json "open original schema") |

## Primitive - Security Issuance Transaction Type

`object` ([Primitive - Security Issuance Transaction](baseissuance.md))

all of

*   [Untitled undefined type in Primitive - Security Issuance Transaction](baseissuance-allof-0.md "check type definition")

# Primitive - Security Issuance Transaction Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [custom_id](#custom_id)                             | `string`      | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/custom_id")                                                  |
| [stakeholder_id](#stakeholder_id)                   | `string`      | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/stakeholder_id")                                        |
| [board_approval_date](#board_approval_date)         | Not specified | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/board_approval_date")                              |
| [consideration](#consideration)                     | Not specified | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/consideration")                                          |
| [security_law_exemptions](#security_law_exemptions) | `array`       | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-security-issuance---security-exemption-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/security_law_exemptions") |

## custom_id

A custom ID for this convertible (e.g. CN-1.)

`custom_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Identifer for the stakeholder that holds legal title to this convertible

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## board_approval_date

Date of board approval for the convertible

`board_approval_date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration

Consideration for the security

`consideration`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions

List of security law exemptions (and applicable jurisdictions) for this convertible

`security_law_exemptions`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-security-issuance---security-exemption-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown\[]
