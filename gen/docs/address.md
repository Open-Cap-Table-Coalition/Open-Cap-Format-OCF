# Type - Address Schema

```txt
https://opencaptablecoalition.com/schema/types/address
```

Type representation of an address

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Address.schema.json](../../schema/types/Address.schema.json "open original schema") |

## Type - Address Type

`object` ([Type - Address](address.md))

# Type - Address Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [address_type](#address_type)     | Not specified | Required | cannot be null | [Type - Address](address-properties-address_type.md "https://opencaptablecoalition.com/schema/types/address#/properties/address_type")     |
| [street_suite](#street_suite)     | `string`      | Optional | cannot be null | [Type - Address](address-properties-street_suite.md "https://opencaptablecoalition.com/schema/types/address#/properties/street_suite")     |
| [city](#city)                     | `string`      | Optional | cannot be null | [Type - Address](address-properties-city.md "https://opencaptablecoalition.com/schema/types/address#/properties/city")                     |
| [state_province](#state_province) | `string`      | Optional | cannot be null | [Type - Address](address-properties-state_province.md "https://opencaptablecoalition.com/schema/types/address#/properties/state_province") |
| [country](#country)               | `string`      | Required | cannot be null | [Type - Address](address-properties-country.md "https://opencaptablecoalition.com/schema/types/address#/properties/country")               |
| [postal_code](#postal_code)       | `string`      | Optional | cannot be null | [Type - Address](address-properties-postal_code.md "https://opencaptablecoalition.com/schema/types/address#/properties/postal_code")       |

## address_type

What type of address is this (e.g. legal address, contact address, etc.)

`address_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Address](address-properties-address_type.md "https://opencaptablecoalition.com/schema/types/address#/properties/address_type")

### address_type Type

unknown

## street_suite

Street address (multi-line string)

`street_suite`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-street_suite.md "https://opencaptablecoalition.com/schema/types/address#/properties/street_suite")

### street_suite Type

`string`

## city

City

`city`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-city.md "https://opencaptablecoalition.com/schema/types/address#/properties/city")

### city Type

`string`

## state_province

State, province or equivalent identifier required for an address in this country (ISO-3166-2)

`state_province`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-state_province.md "https://opencaptablecoalition.com/schema/types/address#/properties/state_province")

### state_province Type

`string`

## country

Country code for this address (ISO-3166)

`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-country.md "https://opencaptablecoalition.com/schema/types/address#/properties/country")

### country Type

`string`

## postal_code

Address postal code

`postal_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-postal_code.md "https://opencaptablecoalition.com/schema/types/address#/properties/postal_code")

### postal_code Type

`string`
