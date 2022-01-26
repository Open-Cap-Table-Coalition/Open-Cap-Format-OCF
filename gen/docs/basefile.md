# Object - BaseFile Schema

```txt
https://opencaptablecoalition.com/schema/primitives/base_file
```

Abstract file to be extended by all other files

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseFile.schema.json](../../schema/primitives/BaseFile.schema.json "open original schema") |

## Object - BaseFile Type

`object` ([Object - BaseFile](basefile.md))

# Object - BaseFile Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                  |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [file_type](#file_type) | Not specified | Required | cannot be null | [Object - BaseFile](basefile-properties-file_type.md "https://opencaptablecoalition.com/schema/primitives/base_file#/properties/file_type") |

## file_type

File type field (used to select proper schema for validation)

`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - BaseFile](basefile-properties-file_type.md "https://opencaptablecoalition.com/schema/primitives/base_file#/properties/file_type")

### file_type Type

unknown
