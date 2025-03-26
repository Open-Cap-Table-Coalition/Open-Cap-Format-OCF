### Transaction - Securityholders Agreement Modification

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/agreement/SecurityholdersAgreementModification.schema.json`

**Description:** _証券保有者間同意の改定に関するトランザクション_

**Data Type:** `OCF Object - TX_SECURITYHOLDERS_AGREEMENT_MODIFICATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityholdersAgreementTransaction](../../../primitives/objects/transactions/SecurityholdersAgreementTransaction.md)

**Properties:**

| Property                     | Type                                                                                                                                                                                                                                             | Description                         | Required   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ---------- |
| id                           | `STRING`                                                                                                                                                                                                                                         | オブジェクトの識別子                          | `REQUIRED` |
| comments                     | [`STRING`]                                                                                                                                                                                                                                       | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type                  | **Constant:** `TX_SECURITYHOLDERS_AGREEMENT_MODIFICATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                               | Object type field                   | `REQUIRED` |
| date                         | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                      | トランザクションが発生した日付                     | `REQUIRED` |
| securityholders_agreement    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/objects/MasterSecurityholdersAgreement](../../MasterSecurityholdersAgreement.md)</br>&bull; [schema/objects/AcquisitionDistributionAgreement](../../AcquisitionDistributionAgreement.md) | トランザクションの対象である証券保有者間同意              | `REQUIRED` |
| securityholders_agreement_id | `STRING`                                                                                                                                                                                                                                         | トランザクションの対象である証券保有者間同意の識別子          | -          |
| reason_text                  | `STRING`                                                                                                                                                                                                                                         | 証券保有者間同意の改定の理由                      | -          |

**Source Code:** [schema/objects/transactions/agreement/SecurityholdersAgreementModification](../../../../../../schema/objects/transactions/agreement/SecurityholdersAgreementModification.schema.json)

Copyright © 2025 Open Cap Table Coalition.
