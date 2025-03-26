### Primitive - Securityholders Agreement Transaction

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/objects/transactions/SecurityholdersAgreementTransaction.schema.json`

**Description** _証券保有者間同意に影響を与えるすべてのトランザクションオブジェクトによって拡張される抽象トランザクションオブジェクト_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property                     | Type                                                                                                                                                                                                                                                                   | Description                | Required |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- |
| securityholders_agreement    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/objects/MasterSecurityholdersAgreement](../../../objects/MasterSecurityholdersAgreement.md)</br>&bull; [schema/objects/AcquisitionDistributionAgreement](../../../objects/AcquisitionDistributionAgreement.md) | トランザクションの対象である証券保有者間同意     | -        |
| securityholders_agreement_id | `STRING`                                                                                                                                                                                                                                                               | トランザクションの対象である証券保有者間同意の識別子 | -        |

**Source Code:** [schema/primitives/objects/transactions/SecurityholdersAgreementTransaction](../../../../../../schema/primitives/objects/transactions/SecurityholdersAgreementTransaction.schema.json)

Copyright © 2025 Open Cap Table Coalition.
