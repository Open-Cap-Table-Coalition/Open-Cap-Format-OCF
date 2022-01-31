# Object - Convertible Conversion Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion
```

Object describing a conversion of a convertible security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleConversion.schema.json](../../schema/objects/transactions/conversion/ConvertibleConversion.schema.json "open original schema") |

## Object - Convertible Conversion Transaction Type

`object` ([Object - Convertible Conversion Transaction](convertibleconversion.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Conversion Transaction](convertibleconversion-allof-primitive---security-conversion-transaction.md "check type definition")

# Object - Convertible Conversion Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                     |
| :------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/object_type")                       |
| [reason_text](#reason_text)                       | `string`      | Required | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/reason_text")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Convertible Conversion Transaction](convertibleconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_CONVERSION"
```

## reason_text

Reason for the conversion

`reason_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/reason_text")

### reason_text Type

`string`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Conversion Transaction](convertibleconversion-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
