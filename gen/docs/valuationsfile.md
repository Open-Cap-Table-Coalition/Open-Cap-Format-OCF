# File - Valuations Schema

```txt
https://opencaptablecoalition.com/schema/files/valuations_file
```

List of valuations for the issuer (meant for use in validating valuations loaded into an array from JSON or JSONL)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ValuationsFile.schema.json](../../schema/files/ValuationsFile.schema.json "open original schema") |

## File - Valuations Type

`object` ([File - Valuations](valuationsfile.md))

all of

*   [Untitled undefined type in File - Valuations](valuationsfile-allof-0.md "check type definition")

# File - Valuations Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                         |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Valuations](valuationsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/valuations_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Valuations](valuationsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/valuations_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [File - Valuations](valuationsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/valuations_file#/properties/items")

### items Type

unknown\[]

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Valuations](valuationsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/valuations_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_VALUATIONS_FILE"
```
