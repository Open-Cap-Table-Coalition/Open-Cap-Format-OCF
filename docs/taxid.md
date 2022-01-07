# Type - TaxID Schema

```txt
Types.TaxID.schema.json
```

Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TaxID.schema.json](../schema/types/TaxID.schema.json "open original schema") |

## Type - TaxID Type

`object` ([Type - TaxID](taxid.md))

# Type - TaxID Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------- |
| [tax_id](#tax_id)   | `string` | Required | cannot be null | [Type - TaxID](taxid-properties-tax_id.md "Types.TaxID.schema.json#/properties/tax_id")   |
| [country](#country) | `string` | Required | cannot be null | [Type - TaxID](taxid-properties-country.md "Types.TaxID.schema.json#/properties/country") |

## tax_id

Tax identifier as string

`tax_id`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - TaxID](taxid-properties-tax_id.md "Types.TaxID.schema.json#/properties/tax_id")

### tax_id Type

`string`

## country

Identifier's issuing country code (ISO-3166)

`country`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - TaxID](taxid-properties-country.md "Types.TaxID.schema.json#/properties/country")

### country Type

`string`
