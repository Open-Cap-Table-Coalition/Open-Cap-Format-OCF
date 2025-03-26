### Object - Security Holder Group

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/SecurityHolderGroup.schema.json`

**Description:** _証券保有者グループ_

**Data Type:** `OCF Object - SECURITYHOLDER_GROUP`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                     | Type                                                                                                    | Description                         | Required   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| id                           | `STRING`                                                                                                | オブジェクトの識別子                          | `REQUIRED` |
| comments                     | [`STRING`]                                                                                              | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type                  | **Constant:** `SECURITYHOLDER_GROUP`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                   | `REQUIRED` |
| name                         | `STRING`                                                                                                | 証券保有者グループの名前                        | -          |
| securityholder_group_members | **ONE OF the Following Types/Objs:**</br>&bull; [schema/objects/SecurityHolder](./SecurityHolder.md)    | 証券保有者グループに属するメンバー                   | `REQUIRED` |

**Source Code:** [schema/objects/SecurityHolderGroup](../../../../schema/objects/SecurityHolderGroup.schema.json)

Copyright © 2025 Open Cap Table Coalition.
