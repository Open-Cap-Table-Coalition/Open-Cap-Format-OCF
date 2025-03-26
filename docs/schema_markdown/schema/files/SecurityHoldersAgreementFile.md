### JOCF Securityholders Agreement File

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/files/SecurityHoldersAgreementFile.schema.json`

**Description:** _証券保有者間同意に関するファイル_

**Data Type:** `JOCF_SECURITYHOLDERS_AGREEMENT_FILE`

**Composed From:**

- [schema/types/File](../types/File.md)

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                               | Description         | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ---------- |
| filepath  | `STRING`                                                                                                                                                                                                                                                           | JOCFコンテナ内の当該ファイルのパス | `REQUIRED` |
| md5       | [schema/types/Md5](../types/Md5.md)                                                                                                                                                                                                                                | MD5ファイルチェックサム       | `REQUIRED` |
| items     | **Array of ONE OF the Following Types/Objs:**</br>&bull; [schema/objects/MasterSecurityholdersAgreement](../objects/MasterSecurityholdersAgreement.md)</br>&bull;[schema/objects/AcquisitionDistributionAgreement](../objects/AcquisitionDistributionAgreement.md) | 証券保有者間同意の一覧         | `REQUIRED` |
| file_type | **Constant:** `JOCF_SECURITYHOLDERS_AGREEMENT_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_                                                                                                                                                 | Object type field   | `REQUIRED` |

**Source Code:** [schema/files/SecurityHoldersAgreementFile](../../../../schema/files/SecurityHoldersAgreementFile.schema.json)

Copyright © 2025 Open Cap Table Coalition.
