# File - Stakeholders Schema

```txt
https://opencaptablecoalition.com/schema/files/stakeholders_file
```

List of OCF Stakeholders (meant for use in validating transactions loaded into an array from a JSONL)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StakeholdersFile.schema.json](../../schema/files/StakeholdersFile.schema.json "open original schema") |

## File - Stakeholders Type

`object` ([File - Stakeholders](stakeholdersfile.md))

all of

*   [Untitled undefined type in File - Stakeholders](stakeholdersfile-allof-0.md "check type definition")

# File - Stakeholders Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                               |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stakeholders](stakeholdersfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stakeholders](stakeholdersfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [File - Stakeholders](stakeholdersfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/items")

### items Type

unknown\[]

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stakeholders](stakeholdersfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STAKEHOLDERS_FILE"
```
