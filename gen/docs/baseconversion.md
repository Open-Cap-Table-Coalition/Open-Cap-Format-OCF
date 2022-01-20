# Primitive - Security Conversion Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion
```

Abstract object describing fields common to all conversion transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseConversion.schema.json](../../schema/primitives/transactions/conversion/BaseConversion.schema.json "open original schema") |

## Primitive - Security Conversion Transaction Type

`object` ([Primitive - Security Conversion Transaction](baseconversion.md))

all of

*   [Untitled undefined type in Primitive - Security Conversion Transaction](baseconversion-allof-0.md "check type definition")

# Primitive - Security Conversion Transaction Properties

| Property                                          | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :------------------------------------------------ | :------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [resulting_security_ids](#resulting_security_ids) | `array` | Required | cannot be null | [Primitive - Security Conversion Transaction](baseconversion-properties-security-conversion---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion#/properties/resulting_security_ids") |

## resulting_security_ids

Identifier for the security (or securities) that resulted from the conversion

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Conversion Transaction](baseconversion-properties-security-conversion---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
