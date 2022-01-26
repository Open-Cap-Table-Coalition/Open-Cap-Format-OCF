# Type - File Schema

```txt
https://opencaptablecoalition.com/schema/types/file
```

Type representation of a file

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [File.schema.json](../../schema/types/File.schema.json "open original schema") |

## Type - File Type

`object` ([Type - File](file.md))

# Type - File Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                            |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [filepath](#filepath) | `string`      | Required | cannot be null | [Type - File](file-properties-filepath.md "https://opencaptablecoalition.com/schema/types/file#/properties/filepath") |
| [md5](#md5)           | Not specified | Required | cannot be null | [Type - File](file-properties-md5.md "https://opencaptablecoalition.com/schema/types/file#/properties/md5")           |

## filepath

Path to the file within the OCF container

`filepath`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - File](file-properties-filepath.md "https://opencaptablecoalition.com/schema/types/file#/properties/filepath")

### filepath Type

`string`

## md5

MD5 file checksum

`md5`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - File](file-properties-md5.md "https://opencaptablecoalition.com/schema/types/file#/properties/md5")

### md5 Type

unknown
