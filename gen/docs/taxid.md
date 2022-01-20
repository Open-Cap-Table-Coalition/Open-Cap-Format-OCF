# Type - Tax Identifier Schema

```txt
https://opencaptablecoalition.com/schema/types/tax_identifier
```

Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TaxID.schema.json](../../schema/types/TaxID.schema.json "open original schema") |

## Type - Tax Identifier Type

`object` ([Type - Tax Identifier](taxid.md))

# Type - Tax Identifier Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [tax_id](#tax_id)   | `string` | Required | cannot be null | [Type - Tax Identifier](taxid-properties-tax_id.md "https://opencaptablecoalition.com/schema/types/tax_identifier#/properties/tax_id")   |
| [country](#country) | `string` | Required | cannot be null | [Type - Tax Identifier](taxid-properties-country.md "https://opencaptablecoalition.com/schema/types/tax_identifier#/properties/country") |

## tax_id

Tax identifier as string

`tax_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Tax Identifier](taxid-properties-tax_id.md "https://opencaptablecoalition.com/schema/types/tax_identifier#/properties/tax_id")

### tax_id Type

`string`

## country

Issuing country code (ISO-3166) for the tax identifier

`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Tax Identifier](taxid-properties-country.md "https://opencaptablecoalition.com/schema/types/tax_identifier#/properties/country")

### country Type

`string`
