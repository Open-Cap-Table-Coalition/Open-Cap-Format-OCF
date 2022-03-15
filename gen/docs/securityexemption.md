# Type - Security Exemption Schema

```txt
https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json
```

Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [SecurityExemption.schema.json](../../schema/types/SecurityExemption.schema.json "open original schema") |

## Type - Security Exemption Type

`object` ([Type - Security Exemption](securityexemption.md))

# Type - Security Exemption Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                      |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [description](#description)   | `string` | Required | cannot be null | [Type - Security Exemption](securityexemption-properties-description.md "https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json#/properties/description") |
| [jurisdiction](#jurisdiction) | `string` | Required | cannot be null | [Type - Security Exemption](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/CountryCode.schema.json#/properties/jurisdiction")        |

## description

Description of an applicable security law exemption governing the issuance

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Security Exemption](securityexemption-properties-description.md "https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json#/properties/description")

### description Type

`string`

## jurisdiction

Type representation of an ISO 3166-1 alpha 2 country code

`jurisdiction`

*   is required

*   Type: `string` ([Type - Country Code](address-properties-type---country-code.md))

*   cannot be null

*   defined in: [Type - Security Exemption](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/CountryCode.schema.json#/properties/jurisdiction")

### jurisdiction Type

`string` ([Type - Country Code](address-properties-type---country-code.md))

### jurisdiction Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Z]{2}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24 "try regular expression with regexr.com")
