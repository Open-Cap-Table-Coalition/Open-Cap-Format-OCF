### Object - Acquisition Distribution Agreement

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/AcquisitionDistributionAgreement.schema.json`

**Description:** _買収に係る分配に関する契約_

**Data Type:** `OCF Object - ACQUISITION_DISTRIBUTION_AGREEMENT`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                   | Type                                                                                                                  | Description                                                                               | Required   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------- |
| id                         | `STRING`                                                                                                              | オブジェクトの識別子                                                                                | `REQUIRED` |
| comments                   | [`STRING`]                                                                                                            | オブジェクトに関連して保存されている構造化されていないテキストコメント                                                       | -          |
| object_type                | **Constant:** `ACQUISITION_DISTRIBUTION_AGREEMENT`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                                                         | `REQUIRED` |
| description                | `STRING`                                                                                                              | 買収に係る分配に関する契約の説明。 残余財産の分配の詳細については、StockClassのliquidation_preference_attributesを合わせて参照のこと。 | -          |
| securityholders_who_agreed | [ [schema/objects/SecurityHolder](./SecurityHolder.md) ]                                                              | 分配合意書に合意する証券保有者の一覧                                                                        | -          |

**Source Code:** [schema/objects/AcquisitionDistributionAgreement](../../../../schema/objects/AcquisitionDistributionAgreement.schema.json)

Copyright © 2025 Open Cap Table Coalition.
