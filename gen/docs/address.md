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

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [address_type](#address_type)     | `string` | Required | cannot be null | [Type - Address](address-properties-enum---address-type.md "https://opencaptablecoalition.com/schema/enums/address_type#/properties/address_type") |
| [street_suite](#street_suite)     | `string` | Optional | cannot be null | [Type - Address](address-properties-street_suite.md "https://opencaptablecoalition.com/schema/types/address#/properties/street_suite")             |
| [city](#city)                     | `string` | Optional | cannot be null | [Type - Address](address-properties-city.md "https://opencaptablecoalition.com/schema/types/address#/properties/city")                             |
| [state_province](#state_province) | `string` | Optional | cannot be null | [Type - Address](address-properties-state_province.md "https://opencaptablecoalition.com/schema/types/address#/properties/state_province")         |
| [country](#country)               | `string` | Required | cannot be null | [Type - Address](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/country_code#/properties/country")      |
| [postal_code](#postal_code)       | `string` | Optional | cannot be null | [Type - Address](address-properties-postal_code.md "https://opencaptablecoalition.com/schema/types/address#/properties/postal_code")               |

## address_type

Enumeration of address types

`address_type`

*   is required

*   Type: `string` ([Enum - Address Type](address-properties-enum---address-type.md))

*   cannot be null

*   defined in: [Type - Address](address-properties-enum---address-type.md "https://opencaptablecoalition.com/schema/enums/address_type#/properties/address_type")

### address_type Type

`string` ([Enum - Address Type](address-properties-enum---address-type.md))

### address_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"LEGAL"`   |             |
| `"CONTACT"` |             |
| `"OTHER"`   |             |

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

Type representation of an ISO 3166-1 alpha 2 country code

`country`

*   is required

*   Type: `string` ([Type - Country Code](address-properties-type---country-code.md))

*   cannot be null

*   defined in: [Type - Address](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/country_code#/properties/country")

### country Type

`string` ([Type - Country Code](address-properties-type---country-code.md))

### country Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

## postal_code

Address postal code

`postal_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Address](address-properties-postal_code.md "https://opencaptablecoalition.com/schema/types/address#/properties/postal_code")

### postal_code Type

`string`
