# Type - Address Schema

```txt
Types.Address.schema.json#/properties/address
```

Type representation of an address as an object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Issuer.schema.json\*](../schema/objects/Issuer.schema.json "open original schema") |

## address Type

`object` ([Type - Address](issuer-properties-type---address.md))

# address Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                          |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [address_type](#address_type)     | `string` | Required | cannot be null | [Type - Address](address-1-properties-enum---address-types.md "Enums.Address.schema.json#/properties/address_type") |
| [street_suite](#street_suite)     | `string` | Optional | cannot be null | [Type - Address](address-1-properties-street_suite.md "Types.Address.schema.json#/properties/street_suite")         |
| [city](#city)                     | `string` | Optional | cannot be null | [Type - Address](address-1-properties-city.md "Types.Address.schema.json#/properties/city")                         |
| [state_province](#state_province) | `string` | Optional | cannot be null | [Type - Address](address-1-properties-state_province.md "Types.Address.schema.json#/properties/state_province")     |
| [country](#country)               | `string` | Required | cannot be null | [Type - Address](address-1-properties-country.md "Types.Address.schema.json#/properties/country")                   |
| [postal_code](#postal_code)       | `string` | Optional | cannot be null | [Type - Address](address-1-properties-postal_code.md "Types.Address.schema.json#/properties/postal_code")           |

## address_type

Enumeration of address types

`address_type`

- is required

- Type: `string` ([Enum - Address Types](address-1-properties-enum---address-types.md))

- cannot be null

- defined in: [Type - Address](address-1-properties-enum---address-types.md "Enums.Address.schema.json#/properties/address_type")

### address_type Type

`string` ([Enum - Address Types](address-1-properties-enum---address-types.md))

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

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - Address](address-1-properties-street_suite.md "Types.Address.schema.json#/properties/street_suite")

### street_suite Type

`string`

## city

City

`city`

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - Address](address-1-properties-city.md "Types.Address.schema.json#/properties/city")

### city Type

`string`

## state_province

State, province or equivalent identifier required for an address in this country (ISO-3166-2).

`state_province`

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - Address](address-1-properties-state_province.md "Types.Address.schema.json#/properties/state_province")

### state_province Type

`string`

## country

Country code for this address (ISO-3166)

`country`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - Address](address-1-properties-country.md "Types.Address.schema.json#/properties/country")

### country Type

`string`

## postal_code

Address postal code

`postal_code`

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - Address](address-1-properties-postal_code.md "Types.Address.schema.json#/properties/postal_code")

### postal_code Type

`string`
