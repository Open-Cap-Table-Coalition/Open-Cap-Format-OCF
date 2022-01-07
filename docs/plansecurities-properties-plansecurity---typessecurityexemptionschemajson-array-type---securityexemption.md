# Type - SecurityExemption Schema

```txt
Types.SecurityExemption.schema.json#/properties/security_law_exemptions/items
```

Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [PlanSecurities.schema.json\*](../schema/objects/PlanSecurities.schema.json "open original schema") |

## items Type

`object` ([Type - SecurityExemption](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array-type---securityexemption.md))

# items Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [description](#description)   | `string` | Required | cannot be null | [Type - SecurityExemption](securityexemption-properties-description.md "Types.SecurityExemption.schema.json#/properties/description")   |
| [jurisdiction](#jurisdiction) | `string` | Required | cannot be null | [Type - SecurityExemption](securityexemption-properties-jurisdiction.md "Types.SecurityExemption.schema.json#/properties/jurisdiction") |

## description

Description of an applicable security law exemption governing the issuance

`description`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - SecurityExemption](securityexemption-properties-description.md "Types.SecurityExemption.schema.json#/properties/description")

### description Type

`string`

## jurisdiction

Country code of the jurisdiction of the applicable law (ISO-3166)

`jurisdiction`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - SecurityExemption](securityexemption-properties-jurisdiction.md "Types.SecurityExemption.schema.json#/properties/jurisdiction")

### jurisdiction Type

`string`
