# File - Stock Classes Schema

```txt
https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json
```

JSON containing file type identifier and list of stock classes

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClassesFile.schema.json](../../schema/files/StockClassesFile.schema.json "open original schema") |

## File - Stock Classes Type

`object` ([File - Stock Classes](stockclassesfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# File - Stock Classes Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stock Classes](stockclassesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stock Classes](stockclassesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json#/properties/file_type") |

## items

List of OCF stock class objects

`items`

*   is required

*   Type: `object[]` ([Object - Stock Class](stockclassesfile-properties-items-object---stock-class.md))

*   cannot be null

*   defined in: [File - Stock Classes](stockclassesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json#/properties/items")

### items Type

`object[]` ([Object - Stock Class](stockclassesfile-properties-items-object---stock-class.md))

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stock Classes](stockclassesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STOCK_CLASSES_FILE"
```
