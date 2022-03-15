# File - Valuations Schema

```txt
https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json
```

JSON containing file type identifier and list of valuations

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ValuationsFile.schema.json](../../schema/files/ValuationsFile.schema.json "open original schema") |

## File - Valuations Type

`object` ([File - Valuations](valuationsfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# File - Valuations Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                    |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [items](#items)         | `array`       | Required | cannot be null | [File - Valuations](valuationsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Valuations](valuationsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json#/properties/file_type") |

## items

List of OCF valuation objects

`items`

*   is required

*   Type: `object[]` ([Object - Valuation](valuationsfile-properties-items-object---valuation.md))

*   cannot be null

*   defined in: [File - Valuations](valuationsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json#/properties/items")

### items Type

`object[]` ([Object - Valuation](valuationsfile-properties-items-object---valuation.md))

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Valuations](valuationsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_VALUATIONS_FILE"
```
