# Type - Security Exemption Schema

```txt
https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json
```

Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [SecurityExemption.schema.json](../../schema/types/SecurityExemption.schema.json "open original schema") |

## Type - Security Exemption Type

`object` ([Type - Security Exemption](securityexemption.md))

# Type - Security Exemption Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                        |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [description](#description)   | `string` | Required | cannot be null | [Type - Security Exemption](securityexemption-properties-description.md "https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json#/properties/description")   |
| [jurisdiction](#jurisdiction) | `string` | Required | cannot be null | [Type - Security Exemption](securityexemption-properties-jurisdiction.md "https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json#/properties/jurisdiction") |

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

Country code of the jurisdiction of the applicable law (ISO-3166)

`jurisdiction`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Security Exemption](securityexemption-properties-jurisdiction.md "https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json#/properties/jurisdiction")

### jurisdiction Type

`string`
