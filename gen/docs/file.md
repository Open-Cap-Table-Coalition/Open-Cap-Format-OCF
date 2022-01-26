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

| Property              | Type     | Required | Nullable       | Defined by                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [filepath](#filepath) | `string` | Required | cannot be null | [Type - File](file-properties-filepath.md "https://opencaptablecoalition.com/schema/types/file#/properties/filepath")  |
| [md5](#md5)           | `string` | Required | cannot be null | [Type - File](file-properties-type---md5-hash.md "https://opencaptablecoalition.com/schema/types/md5#/properties/md5") |

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

String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers

`md5`

*   is required

*   Type: `string` ([Type - MD5 Hash](file-properties-type---md5-hash.md))

*   cannot be null

*   defined in: [Type - File](file-properties-type---md5-hash.md "https://opencaptablecoalition.com/schema/types/md5#/properties/md5")

### md5 Type

`string` ([Type - MD5 Hash](file-properties-type---md5-hash.md))

### md5 Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-fA-F0-9]{32}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-fA-F0-9%5D%7B32%7D%24 "try regular expression with regexr.com")
