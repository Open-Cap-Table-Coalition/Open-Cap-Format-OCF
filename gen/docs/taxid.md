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

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                           |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tax_id](#tax_id)   | `string` | Required | cannot be null | [Type - Tax Identifier](taxid-properties-tax_id.md "https://opencaptablecoalition.com/schema/types/tax_identifier#/properties/tax_id")               |
| [country](#country) | `string` | Required | cannot be null | [Type - Tax Identifier](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/country_code#/properties/country") |

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

Type representation of an ISO 3166-1 alpha 2 country code

`country`

*   is required

*   Type: `string` ([Type - Country Code](address-properties-type---country-code.md))

*   cannot be null

*   defined in: [Type - Tax Identifier](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/country_code#/properties/country")

### country Type

`string` ([Type - Country Code](address-properties-type---country-code.md))

### country Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`
