# File - Stakeholders Schema

```txt
https://opencaptablecoalition.com/schema/files/stakeholders_file
```

JSON containing file type identifier and list of stakeholders

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StakeholdersFile.schema.json](../../schema/files/StakeholdersFile.schema.json "open original schema") |

## File - Stakeholders Type

`object` ([File - Stakeholders](stakeholdersfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# File - Stakeholders Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                               |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stakeholders](stakeholdersfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stakeholders](stakeholdersfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: `object[]` ([Object - Stakeholder](stakeholdersfile-properties-items-object---stakeholder.md))

*   cannot be null

*   defined in: [File - Stakeholders](stakeholdersfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stakeholders_file#/properties/items")

### items Type

`object[]` ([Object - Stakeholder](stakeholdersfile-properties-items-object---stakeholder.md))

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
