# Primitive - Security Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json
```

Abstract object describing fields common to all issuance objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseIssuance.schema.json](../../schema/primitives/transactions/issuance/BaseIssuance.schema.json "open original schema") |

## Primitive - Security Issuance Transaction Type

`object` ([Primitive - Security Issuance Transaction](baseissuance.md))

# Primitive - Security Issuance Transaction Properties

| Property                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                    |
| :-------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [custom_id](#custom_id)                             | `string` | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/custom_id")                                                  |
| [stakeholder_id](#stakeholder_id)                   | `string` | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/stakeholder_id")                                        |
| [board_approval_date](#board_approval_date)         | `string` | Required | cannot be null | [Primitive - Security Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/board_approval_date")                                     |
| [consideration](#consideration)                     | `object` | Required | cannot be null | [Primitive - Security Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")                                                                       |
| [security_law_exemptions](#security_law_exemptions) | `array`  | Required | cannot be null | [Primitive - Security Issuance Transaction](baseissuance-properties-security-issuance---security-exemption-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/security_law_exemptions") |

## custom_id

A custom ID for this convertible (e.g. CN-1.)

`custom_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Identifier for the stakeholder that holds legal title to this convertible

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## board_approval_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`board_approval_date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/board_approval_date")

### board_approval_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### board_approval_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## consideration

Type representation of an amount of money in a specified currency

`consideration`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")

### consideration Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## security_law_exemptions

List of security law exemptions (and applicable jurisdictions) for this convertible

`security_law_exemptions`

*   is required

*   Type: `object[]` ([Type - Security Exemption](baseissuance-properties-security-issuance---security-exemption-array-type---security-exemption.md))

*   cannot be null

*   defined in: [Primitive - Security Issuance Transaction](baseissuance-properties-security-issuance---security-exemption-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([Type - Security Exemption](baseissuance-properties-security-issuance---security-exemption-array-type---security-exemption.md))
