### 証券保有者

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/SecurityHolder.schema.json`

**Description:** __

**Data Type:** `OCF Object - SECURITY_HOLDER`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property             | Type                                                                                                                      | Description                         | Required   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| id                   | `STRING`                                                                                                                  | 証券保有者のID                            | `REQUIRED` |
| comments             | [`STRING`]                                                                                                                | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type          | **Constant:** `SECURITY_HOLDER`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                        | Object type field                   | `REQUIRED` |
| name                 | [schema/types/Name](../types/Name.md)                                                                                     | 証券保有者の名前                            | `REQUIRED` |
| security_holder_type | `証券保有者種類 - Enum`</br></br>_Description:_ 証券保有者種類のEnum</br></br>**ONE OF:** </br>&bull; INDIVIDUAL </br>&bull; INSTITUTION | 証券保有者の種類                            | -          |
| address              | `STRING`                                                                                                                  | 証券保有者の住所                            | -          |
| primary_contact      | [ [schema/types/SecurityHolderPrimaryContact](../types/SecurityHolderPrimaryContact.md) ]                                 | 組織証券保有者の連絡先                         | -          |
| contact_info         | [ [schema/types/SecurityHolderContactInfo](../types/SecurityHolderContactInfo.md) ]                                       | 個人証券保有者の連絡先                         | -          |

**Source Code:** [schema/objects/SecurityHolder](../../../../schema/objects/SecurityHolder.schema.json)

Copyright © 2025 Open Cap Table Coalition.
