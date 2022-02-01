![](./docs/images/OCF%20Logo.png)

# Open Cap Table Format (OCF)

Data Schema and Specification for Open Cap Format (OCF) published by the [Open Cap Table Coalition](https://medium.com/@opencaptable).

## What is OCF?

OCF (or **O**pen **C**ap Table **F**ormat) is a data standard developed by the Open Cap Table Coalition to enable the
easy and accurate exchange and use of company capitalization information through a standardized format. It is made
freely available for anyone to use, though changes must be made through the Coalition's [change process](#how-to-contribute).

## How Does It Work?

### OCF File Types

OCF is a multi-file format designed to make it easy to split, compress or stream company capitalization tables.
A valid OCF cap table is made up of JSON objects that match the schemas available in our repo in
the [Schemas folder](/schema).

OCF objects are grouped and stored in eight file types (defined in our [file schemas folder](/schema/files)).

There are currently 8 file types that make up a cap table:

1. [A Manifest File](/schema/files/OCFManifestFile.schema.json) - The manifest holds basic issuer information and
   references to the instances of the other 7 file types needed to represent a company's capitalization history.
2. [Stakeholders File(s)](/schema/files/StakeholdersFile.schema.json) - One or more files listing all stakeholders
   of the Company. Stakeholder types are enumerated in our standard, and we welcome comments on how to categorize
   stakeholders.
3. [Stock Classes File(s)](/schema/files/StockClassesFile.schema.json) - One or more files listing all classes /
   series of stock issued by the issuer.
4. [Stock Legend Templates File(s)](/schema/files/StockLegendTemplatesFile.schema.json) - One or more files storing the
   legends used by the issuer.
5. [Stock Plans File(s)](/schema/files/StockPlansFile.schema.json) - One or more files storing the issuer's stock plans
   and related information.
6. [Transactions File(s)](/schema/files/TransactionsFile.schema.json) - One or more files storing the transactions for
   the issuers. Any of our [transaction event objects](/schema/objects/transactions) are supported.
7. [Valuations File(s)](/schema/files/ValuationsFile.schema.json) - One or more files storing valuations for the issuer.
8. [Vesting Schedules File(s)](/schema/files/VestingSchedulesFile.schema.json) - One or more files storing vesting
   schedules used by the issuer.

**At the moment, we recommend combining all of these files into a single compressed file with a \*.ocf extension:**

![](./docs/images/OCF%20Container.png)

We are working on sample tooling to interact with compressed \*.ocf files.

### Event-Driven Architecture

OCF is powered by an event-driven architecture. All Stocks, Plan Securities, Warrants and Convertibles have
object-specific events that are added to an event "stack" to represent the history of that security. These events
describe the relevant data needed to describe key events such as issuances, transfers, conversions, etc. You can
see a full list of event transactions supported in our [transactions schemas folder](/schema/objects/transactions).

Here's an example of how an event stack would work to track the lifecycle of a single issuance of preferred stock:

![](./docs/images/Transaction%20Stack%20Animation.gif)

### Schema Composition

In order to improve code quality, reduce repetition and provide for a better developer experience, OCF schemas rely
heavily on [object composition](https://en.wikipedia.org/wiki/Object_composition). In the
[primitives folder](/schema/primitives), you'll see a number of abstract base models called "primitives" stored in a
folder structure that mirrors our [objects folder](/schema/objects). We incorporate the properties in these primitives
into OCF objects by using the JSONSchema [allOf](https://json-schema.org/understanding-json-schema/reference/combining.html)
property.

For example, all of our transaction events must have properties listed in the
[BaseTransaction](/schema/primitives/transactions/BaseTransaction.schema.json) schema. Then, different groups of
transaction events share some common properties, and these are enforced by incorporating more specific primitives -
e.g. all issues (whether of stock, plan securities, warrants or convertibles) must incorporate the properties set
forth in [BaseAcceptance](/schema/primitives/transactions/acceptance/BaseAcceptance.schema.json) _in addition to the
properties in BaseTransaction_.

### What's with empty properties (e.g. {}) in your schemas?

You'll notice that _required_ OCF object properties that are incorporated via composition have empty objects
as their schema values in the OCF object schemas (i.e. `"id": {}`). This is due to how JSONSchema validators interact with the
"required" property. If validators don't find a required property in an object schema, even if it's one of the
primitives the object is composed of, most (all?) JSONSchema validators will throw an error. As a result, we need to
add required, "inherited" properties to the final OCF object schemas. They don't actually need to be redefined, however,
so we just assign these repeat properties a value of {} in the schema as JSONSchema validators _can_ import the property
details via allOf. Our documentation generator looks back to the full details of the property from the inherited schemas,
however, and the documentation shows the full property details inherited from the primitives. Unless you're developing
OCF schemas, these implementation details probably won't matter to you, and you can rely on our documentation for
definitive documentation of the necessary properties and all details thereof.

## How to Contribute

If you would like to suggest a bug-fix or correction to the existing spec, please go ahead and submit a pull request
with the change. Please consult our [contributor guidelines](/docs/CONTRIBUTING.MD) before submitting.

If you have a suggestion, feature request or other substantive change you think should be incorporated into OCF,
please start by opening a discussion in our
[suggestions channel](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/discussions/categories/suggestions)
on GitHub. Once a consensus is reached on whether and how to incorporate your suggestion, the TWG
may open an issue and assign a TWG member to lead further work on the issue.

## Overall Repo Organization

[Full documentation](docs/README.md) is available in the [docs folder](/docs). Our documentation is
auto-generated and our toolchain is still being refined, so the layout may continue to change and improve.

## Schemas are divided into five folders:

### [Files](/schema/files)

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

- **File - Stock Legend Templates**

  - **Id:** `https://opencaptablecoalition.com/schema/files/stock_legend_templates_file`
  - **Description:** _JSON containing file type identifier and list of stock legend templates_
  - **View more:** [schema/files/stock_legend_templates_file](/docs/schema/files/schema-files-stock_legend_templates_file.md)

- **OCF Manifest File**

  - **Id:** `https://opencaptablecoalition.com/schema/files/ocf_manifest_file`
  - **Description:** _Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc._
  - **View more:** [schema/files/ocf_manifest_file](/docs/schema/files/schema-files-ocf_manifest_file.md)

- **File - Valuations**

  - **Id:** `https://opencaptablecoalition.com/schema/files/valuations_file`
  - **Description:** _JSON containing file type identifier and list of valuations_
  - **View more:** [schema/files/valuations_file](/docs/schema/files/schema-files-valuations_file.md)

- **File - Transactions**

  - **Id:** `https://opencaptablecoalition.com/schema/files/transactions_file`
  - **Description:** _JSON containing file type identifier and list transactions_
  - **View more:** [schema/files/transactions_file](/docs/schema/files/schema-files-transactions_file.md)

- **File - Stakeholders**

  - **Id:** `https://opencaptablecoalition.com/schema/files/stakeholders_file`
  - **Description:** _JSON containing file type identifier and list of stakeholders_
  - **View more:** [schema/files/stakeholders_file](/docs/schema/files/schema-files-stakeholders_file.md)

- **File - Vesting Schedules**

  - **Id:** `https://opencaptablecoalition.com/schema/files/vesting_schedules_file`
  - **Description:** _JSON containing file type identifier and list of vesting schedules_
  - **View more:** [schema/files/vesting_schedules_file](/docs/schema/files/schema-files-vesting_schedules_file.md)

- **File - Stock Plans**

  - **Id:** `https://opencaptablecoalition.com/schema/files/stock_plans_file`
  - **Description:** _JSON containing file type identifier and list of stock plans_
  - **View more:** [schema/files/stock_plans_file](/docs/schema/files/schema-files-stock_plans_file.md)

- **File - Stock Classes**
  - **Id:** `https://opencaptablecoalition.com/schema/files/stock_classes_file`
  - **Description:** _JSON containing file type identifier and list of stock classes_
  - **View more:** [schema/files/stock_classes_file](/docs/schema/files/schema-files-stock_classes_file.md)

### [Objects](/schema/objects)

_Describing the structure of OCF -- these contain the common object properties `id` and `comments`_

- **Object - Stakeholder**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/stakeholder`
  - **Description:** _Object describing a stakeholder_
  - **View more:** [schema/objects/stakeholder](/docs/schema/objects/schema-objects-stakeholder.md)

- **Object - Issuer**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/issuer`
  - **Description:** _Object describing the issuer of the cap table (the company whose cap table this is)_
  - **View more:** [schema/objects/issuer](/docs/schema/objects/schema-objects-issuer.md)

- **Object - Stock Legend Template**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/stock_legend_template`
  - **Description:** _Object describing a stock legend template_
  - **View more:** [schema/objects/stock_legend_template](/docs/schema/objects/schema-objects-stock_legend_template.md)

- **Object - Stock Plan**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/stock_plan`
  - **Description:** _Object describing a plan which stock options are issued from_
  - **View more:** [schema/objects/stock_plan](/docs/schema/objects/schema-objects-stock_plan.md)

- **Object - Valuation**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/valuation`
  - **Description:** _Object describing a valuation used in the cap table_
  - **View more:** [schema/objects/valuation](/docs/schema/objects/schema-objects-valuation.md)

- **Object - Stock Class**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/stock_class`
  - **Description:** _Object describing a class of stock issued by the issuer_
  - **View more:** [schema/objects/stock_class](/docs/schema/objects/schema-objects-stock_class.md)

- **Object - Stock Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/repurchase/stock_repurchase`
  - **Description:** _Object describing a stock repurchase transaction_
  - **View more:** [schema/objects/transactions/repurchase/stock_repurchase](/docs/schema/objects/transactions/repurchase/schema-objects-transactions-repurchase-stock_repurchase.md)

- **Object - Warrant Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/warrant_acceptance`
  - **Description:** _Object describing a warrant acceptance transaction_
  - **View more:** [schema/objects/transactions/acceptance/warrant_acceptance](/docs/schema/objects/transactions/acceptance/schema-objects-transactions-acceptance-warrant_acceptance.md)

- **Object - Stock Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance`
  - **Description:** _Object describing a stock acceptance transaction_
  - **View more:** [schema/objects/transactions/acceptance/stock_acceptance](/docs/schema/objects/transactions/acceptance/schema-objects-transactions-acceptance-stock_acceptance.md)

- **Object - Convertible Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/convertible_acceptance`
  - **Description:** _Object describing a convertible acceptance transaction_
  - **View more:** [schema/objects/transactions/acceptance/convertible_acceptance](/docs/schema/objects/transactions/acceptance/schema-objects-transactions-acceptance-convertible_acceptance.md)

- **Object - Plan Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/plan_security_acceptance`
  - **Description:** _Object describing a plan security acceptance transaction_
  - **View more:** [schema/objects/transactions/acceptance/plan_security_acceptance](/docs/schema/objects/transactions/acceptance/schema-objects-transactions-acceptance-plan_security_acceptance.md)

- **Object - Warrant Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance`
  - **Description:** _Object describing warrant issuance transaction by the issuer and held by a stakeholder_
  - **View more:** [schema/objects/transactions/issuance/warrant_issuance](/docs/schema/objects/transactions/issuance/schema-objects-transactions-issuance-warrant_issuance.md)

- **Object - Plan Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance`
  - **Description:** _Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder_
  - **View more:** [schema/objects/transactions/issuance/plan_security_issuance](/docs/schema/objects/transactions/issuance/schema-objects-transactions-issuance-plan_security_issuance.md)

- **Object - Stock Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance`
  - **Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_
  - **View more:** [schema/objects/transactions/issuance/stock_issuance](/docs/schema/objects/transactions/issuance/schema-objects-transactions-issuance-stock_issuance.md)

- **Object - Convertible Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance`
  - **Description:** _Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder_
  - **View more:** [schema/objects/transactions/issuance/convertible_issuance](/docs/schema/objects/transactions/issuance/schema-objects-transactions-issuance-convertible_issuance.md)

- **Object - Warrant Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/warrant_exercise`
  - **Description:** _Object describing a warrant exercise transaction_
  - **View more:** [schema/objects/transactions/exercise/warrant_exercise](/docs/schema/objects/transactions/exercise/schema-objects-transactions-exercise-warrant_exercise.md)

- **Object - Plan Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/plan_security_exercise`
  - **Description:** _Object describing a plan security exercise transaction_
  - **View more:** [schema/objects/transactions/exercise/plan_security_exercise](/docs/schema/objects/transactions/exercise/schema-objects-transactions-exercise-plan_security_exercise.md)

- **Object - Plan Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/release/plan_security_release`
  - **Description:** _Object describing a plan security release transaction_
  - **View more:** [schema/objects/transactions/release/plan_security_release](/docs/schema/objects/transactions/release/schema-objects-transactions-release-plan_security_release.md)

- **Object - Stock Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/stock_retraction`
  - **Description:** _Object describing a retraction of a stock security_
  - **View more:** [schema/objects/transactions/retraction/stock_retraction](/docs/schema/objects/transactions/retraction/schema-objects-transactions-retraction-stock_retraction.md)

- **Object - Warrant Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction`
  - **Description:** _Object describing a retraction of a warrant security_
  - **View more:** [schema/objects/transactions/retraction/warrant_retraction](/docs/schema/objects/transactions/retraction/schema-objects-transactions-retraction-warrant_retraction.md)

- **Object - Convertible Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/convertible_retraction`
  - **Description:** _Object describing a retraction of a convertible security_
  - **View more:** [schema/objects/transactions/retraction/convertible_retraction](/docs/schema/objects/transactions/retraction/schema-objects-transactions-retraction-convertible_retraction.md)

- **Object - Plan Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/plan_security_retraction`
  - **Description:** _Object describing a retraction of a plan security_
  - **View more:** [schema/objects/transactions/retraction/plan_security_retraction](/docs/schema/objects/transactions/retraction/schema-objects-transactions-retraction-plan_security_retraction.md)

- **Object - Stock Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion`
  - **Description:** _Object describing a conversion of stock_
  - **View more:** [schema/objects/transactions/conversion/stock_conversion](/docs/schema/objects/transactions/conversion/schema-objects-transactions-conversion-stock_conversion.md)

- **Object - Convertible Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/convertible_conversion`
  - **Description:** _Object describing a conversion of a convertible security_
  - **View more:** [schema/objects/transactions/conversion/convertible_conversion](/docs/schema/objects/transactions/conversion/schema-objects-transactions-conversion-convertible_conversion.md)

- **Object - Warrant Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split`
  - **Description:** _Object describing a split of a warrant security_
  - **View more:** [schema/objects/transactions/split/warrant_split](/docs/schema/objects/transactions/split/schema-objects-transactions-split-warrant_split.md)

- **Object - Stock Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split`
  - **Description:** _Object describing a split of a stock security_
  - **View more:** [schema/objects/transactions/split/stock_split](/docs/schema/objects/transactions/split/schema-objects-transactions-split-stock_split.md)

- **Object - Plan Security Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/plan_security_split`
  - **Description:** _Object describing a split of a plan security_
  - **View more:** [schema/objects/transactions/split/plan_security_split](/docs/schema/objects/transactions/split/schema-objects-transactions-split-plan_security_split.md)

- **Object - Convertible Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer`
  - **Description:** _Object describing a transfer or secondary sale of a convertible security_
  - **View more:** [schema/objects/transactions/transfer/convertible_transfer](/docs/schema/objects/transactions/transfer/schema-objects-transactions-transfer-convertible_transfer.md)

- **Object - Plan Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer`
  - **Description:** _Object describing a transfer of a plan security_
  - **View more:** [schema/objects/transactions/transfer/plan_security_transfer](/docs/schema/objects/transactions/transfer/schema-objects-transactions-transfer-plan_security_transfer.md)

- **Object - Warrant Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer`
  - **Description:** _Object describing a transfer or secondary sale of a warrant security_
  - **View more:** [schema/objects/transactions/transfer/warrant_transfer](/docs/schema/objects/transactions/transfer/schema-objects-transactions-transfer-warrant_transfer.md)

- **Object - Stock Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/stock_transfer`
  - **Description:** _Object describing a transfer or secondary sale of a stock security_
  - **View more:** [schema/objects/transactions/transfer/stock_transfer](/docs/schema/objects/transactions/transfer/schema-objects-transactions-transfer-stock_transfer.md)

- **Object - Stock Re-issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/reissuance/stock_reissuance`
  - **Description:** _Object describing a re-issuance of stock_
  - **View more:** [schema/objects/transactions/reissuance/stock_reissuance](/docs/schema/objects/transactions/reissuance/schema-objects-transactions-reissuance-stock_reissuance.md)

- **Object - Convertible Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation`
  - **Description:** _Object describing a cancellation of a convertible security_
  - **View more:** [schema/objects/transactions/cancellation/convertible_cancellation](/docs/schema/objects/transactions/cancellation/schema-objects-transactions-cancellation-convertible_cancellation.md)

- **Object - Stock Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/stock_cancellation`
  - **Description:** _Object describing a cancellation of a stock security_
  - **View more:** [schema/objects/transactions/cancellation/stock_cancellation](/docs/schema/objects/transactions/cancellation/schema-objects-transactions-cancellation-stock_cancellation.md)

- **Object - Plan Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/plan_security_cancellation`
  - **Description:** _Object describing a cancellation of a plan security_
  - **View more:** [schema/objects/transactions/cancellation/plan_security_cancellation](/docs/schema/objects/transactions/cancellation/schema-objects-transactions-cancellation-plan_security_cancellation.md)

- **Object - Warrant Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation`
  - **Description:** _Object describing a cancellation of a warrant security_
  - **View more:** [schema/objects/transactions/cancellation/warrant_cancellation](/docs/schema/objects/transactions/cancellation/schema-objects-transactions-cancellation-warrant_cancellation.md)

- **Object - Vesting Schedule**
  - **Id:** `https://opencaptablecoalition.com/schema/objects/vesting_schedule`
  - **Description:** _Object describing a strictly time-based vesting schedule_
  - **View more:** [schema/objects/vesting_schedule](/docs/schema/objects/schema-objects-vesting_schedule.md)

### [Enums](/schema/enums)

_Key enumerations used throughout the schemas_

- **Enum - Address Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/address_type`
  - **Description:** _Enumeration of address types_
  - **View more:** [schema/enums/address_type](/docs/schema/enums/schema-enums-address_type.md)

- **Enum - Valuation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/valuation_type`
  - **Description:** _Enumeration of valuation types_
  - **View more:** [schema/enums/valuation_type](/docs/schema/enums/schema-enums-valuation_type.md)

- **Enum - Accrual Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/accrual_period_type`
  - **Description:** _Enumeration of interest accrual period types_
  - **View more:** [schema/enums/accrual_period_type](/docs/schema/enums/schema-enums-accrual_period_type.md)

- **Enum - Object Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/object_type`
  - **Description:** _Enumeration of object types_
  - **View more:** [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)

- **Enum - Parent Security Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/parent_security_type`
  - **Description:** _Enumeration of parent sources a stock can be issued or created from_
  - **View more:** [schema/enums/parent_security_type](/docs/schema/enums/schema-enums-parent_security_type.md)

- **Enum - Vesting Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/vesting_type`
  - **Description:** _Enumeration of vesting types_
  - **View more:** [schema/enums/vesting_type](/docs/schema/enums/schema-enums-vesting_type.md)

- **Enum - Phone Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/phone_type`
  - **Description:** _Enumeration of phone number types_
  - **View more:** [schema/enums/phone_type](/docs/schema/enums/schema-enums-phone_type.md)

- **Enum - Conversion Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/conversion_type`
  - **Description:** _Enumeration of convertible conversion types_
  - **View more:** [schema/enums/conversion_type](/docs/schema/enums/schema-enums-conversion_type.md)

- **Enum - OCF Version Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ocf_version_type`
  - **Description:** _Enumeration of recognized OCF versions_
  - **View more:** [schema/enums/ocf_version_type](/docs/schema/enums/schema-enums-ocf_version_type.md)

- **Enum - Compensation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/compensation_type`
  - **Description:** _Enumeration of stock compensation types_
  - **View more:** [schema/enums/compensation_type](/docs/schema/enums/schema-enums-compensation_type.md)

- **Enum - Interest Payout Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/interest_payout_type`
  - **Description:** _Enumeration of interest payout types (e.g. deferred or cash payment)_
  - **View more:** [schema/enums/interest_payout_type](/docs/schema/enums/schema-enums-interest_payout_type.md)

- **Enum - Day Count Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/day_count_type`
  - **Description:** _Enumeration of how the number of days are determined per period_
  - **View more:** [schema/enums/day_count_type](/docs/schema/enums/schema-enums-day_count_type.md)

- **Enum - Stakeholder Relationship Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/stakeholder_relationship_type`
  - **Description:** _Enumeration of types of relationships between stakeholder and issuer_
  - **View more:** [schema/enums/stakeholder_relationship_type](/docs/schema/enums/schema-enums-stakeholder_relationship_type.md)

- **Enum - Email Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/email_type`
  - **Description:** _Enumeration of email types_
  - **View more:** [schema/enums/email_type](/docs/schema/enums/schema-enums-email_type.md)

- **Enum - Allocation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/allocation_type`
  - **Description:** \*Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:

  1.  Cumulative Rounding (5 - 4 - 5 - 4)
  2.  Cumulative Round Down (4 - 5 - 4 - 5)
  3.  Front Loaded (5 - 5 - 4 - 4)
  4.  Back Loaded (4 - 4 - 5 - 5)
  5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
  6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)\*

  - **View more:** [schema/enums/allocation_type](/docs/schema/enums/schema-enums-allocation_type.md)

- **Enum - Convertible Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/convertible_type`
  - **Description:** _Enumeration of convertible instrument types_
  - **View more:** [schema/enums/convertible_type](/docs/schema/enums/schema-enums-convertible_type.md)

- **Enum - Option Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/option_type`
  - **Description:** _Enumeration of option types_
  - **View more:** [schema/enums/option_type](/docs/schema/enums/schema-enums-option_type.md)

- **Enum - Compounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/compounding_type`
  - **Description:** _Enumeration of interest compounding types_
  - **View more:** [schema/enums/compounding_type](/docs/schema/enums/schema-enums-compounding_type.md)

- **Enum - Stakeholder Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/stakeholder_type`
  - **Description:** _Enumeration of stakeholder types - individual (human) or institution (entity)_
  - **View more:** [schema/enums/stakeholder_type](/docs/schema/enums/schema-enums-stakeholder_type.md)

- **Enum - OCF File Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/file_type`
  - **Description:** _Enumeration of different OCF file types which are used to load proper schemas for validation_
  - **View more:** [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)

- **Enum - Termination Window Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/termination_window_type`
  - **Description:** _Enumeration of termination window types_
  - **View more:** [schema/enums/termination_window_type](/docs/schema/enums/schema-enums-termination_window_type.md)

- **Enum - Rounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/rounding_type`
  - **Description:** _Enumeration of rounding types_
  - **View more:** [schema/enums/rounding_type](/docs/schema/enums/schema-enums-rounding_type.md)

- **Enum - Stock Class Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/stock_class_type`
  - **Description:** _Enumeration of stock class types_
  - **View more:** [schema/enums/stock_class_type](/docs/schema/enums/schema-enums-stock_class_type.md)

- **Enum - Period Type**
  - **Id:** `https://opencaptablecoalition.com/schema/enums/period_type`
  - **Description:** _Enumeration of time period types_
  - **View more:** [schema/enums/period_type](/docs/schema/enums/schema-enums-period_type.md)

### [Types](/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

- **Type - Name**

  - **Id:** `https://opencaptablecoalition.com/schema/types/name`
  - **Description:** _Type comprising of multiple name components_
  - **View more:** [schema/types/name](/docs/schema/types/schema-types-name.md)

- **Type - Security Exemption**

  - **Id:** `https://opencaptablecoalition.com/schema/types/security_exemption`
  - **Description:** _Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis_
  - **View more:** [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md)

- **Type - Date**

  - **Id:** `https://opencaptablecoalition.com/schema/types/date`
  - **Description:** _Type represention of an ISO-8601 date, e.g. 2022-01-28_
  - **View more:** [schema/types/date](/docs/schema/types/schema-types-date.md)

- **Type - Stock Parent**

  - **Id:** `https://opencaptablecoalition.com/schema/types/stock_parent`
  - **Description:** _Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)_
  - **View more:** [schema/types/stock_parent](/docs/schema/types/schema-types-stock_parent.md)

- **Type - Percentage**

  - **Id:** `https://opencaptablecoalition.com/schema/types/percentage`
  - **Description:** _Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)_
  - **View more:** [schema/types/percentage](/docs/schema/types/schema-types-percentage.md)

- **Type - Stock Class Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights`
  - **Description:** _Type representation of a conversion right from one security into a stock class_
  - **View more:** [schema/types/stock_class_conversion_rights](/docs/schema/types/schema-types-stock_class_conversion_rights.md)

- **Type - Conversion Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_trigger`
  - **Description:** _Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)_
  - **View more:** [schema/types/conversion_trigger](/docs/schema/types/schema-types-conversion_trigger.md)

- **Type - Vesting Rules**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting_rules`
  - **Description:** _Type representing all aspects related to vesting securities_
  - **View more:** [schema/types/vesting_rules](/docs/schema/types/schema-types-vesting_rules.md)

- **Type - Custom Vesting Tranche**

  - **Id:** `https://opencaptablecoalition.com/schema/types/custom_vesting_tranche`
  - **Description:** _Type representation of a vesting tranche by date and quantity_
  - **View more:** [schema/types/custom_vesting_tranche](/docs/schema/types/schema-types-custom_vesting_tranche.md)

- **Type - Address**

  - **Id:** `https://opencaptablecoalition.com/schema/types/address`
  - **Description:** _Type representation of an address_
  - **View more:** [schema/types/address](/docs/schema/types/schema-types-address.md)

- **Type - Tax Identifier**

  - **Id:** `https://opencaptablecoalition.com/schema/types/tax_identifier`
  - **Description:** _Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)_
  - **View more:** [schema/types/tax_identifier](/docs/schema/types/schema-types-tax_identifier.md)

- **Type - Event-driven Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition`
  - **Description:** _Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)_
  - **View more:** [schema/types/event_driven_vesting_condition](/docs/schema/types/schema-types-event_driven_vesting_condition.md)

- **Type - File**

  - **Id:** `https://opencaptablecoalition.com/schema/types/file`
  - **Description:** _Type representation of a file_
  - **View more:** [schema/types/file](/docs/schema/types/schema-types-file.md)

- **Type - MD5 Hash**

  - **Id:** `https://opencaptablecoalition.com/schema/types/md5`
  - **Description:** _String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers_
  - **View more:** [schema/types/md5](/docs/schema/types/schema-types-md5.md)

- **Type - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ratio`
  - **Description:** _Type representation of a ratio as antecedent and consequent numeric values_
  - **View more:** [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)

- **Type - Termination Window**

  - **Id:** `https://opencaptablecoalition.com/schema/types/termination_window`
  - **Description:** _Type representation of a termination window_
  - **View more:** [schema/types/termination_window](/docs/schema/types/schema-types-termination_window.md)

- **Type - Numeric**

  - **Id:** `https://opencaptablecoalition.com/schema/types/numeric`
  - **Description:** _Fixed-point string representation of a number (up to 10 decimal places supported)_
  - **View more:** [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)

- **Type - Schedule-driven Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/schedule_driven_vesting_condition`
  - **Description:** _Type representation of a row in a vesting schedule_
  - **View more:** [schema/types/schedule_driven_vesting_condition](/docs/schema/types/schema-types-schedule_driven_vesting_condition.md)

- **Type - Monetary**

  - **Id:** `https://opencaptablecoalition.com/schema/types/monetary`
  - **Description:** _Type represention of an amount of money in the specified currency_
  - **View more:** [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)

- **Type - Contact Info**

  - **Id:** `https://opencaptablecoalition.com/schema/types/contact_info`
  - **Description:** _Type representation of a primary contact person for a stakeholder (e.g. a fund)_
  - **View more:** [schema/types/contact_info](/docs/schema/types/schema-types-contact_info.md)

- **Type - Email**

  - **Id:** `https://opencaptablecoalition.com/schema/types/email`
  - **Description:** _Type representation of an email address_
  - **View more:** [schema/types/email](/docs/schema/types/schema-types-email.md)

- **Type - Phone**
  - **Id:** `https://opencaptablecoalition.com/schema/types/phone`
  - **Description:** _Type representation of a phone number_
  - **View more:** [schema/types/phone](/docs/schema/types/schema-types-phone.md)

### [Primitives](/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._

- **Object - BaseObject**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/base_object`
  - **Description:** _Abstract object to be extended by all other objects_
  - **View more:** [schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

- **Primitive - Security Repurchase Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase`
  - **Description:** _Abstract object describing common properties to a repurchase transaction_
  - **View more:** [schema/primitives/transactions/repurchase/base_repurchase](/docs/schema/primitives/transactions/repurchase/schema-primitives-transactions-repurchase-base_repurchase.md)

- **Primitive - Security Acceptance Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/acceptance/base_acceptance`
  - **Description:** _Abstract object describing a security acceptance transaction_
  - **View more:** [schema/primitives/transactions/acceptance/base_acceptance](/docs/schema/primitives/transactions/acceptance/schema-primitives-transactions-acceptance-base_acceptance.md)

- **Primitive - Security Issuance Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance`
  - **Description:** _Abstract object describing fields common to all issuance objects_
  - **View more:** [schema/primitives/transactions/issuance/base_issuance](/docs/schema/primitives/transactions/issuance/schema-primitives-transactions-issuance-base_issuance.md)

- **Primitive - Security Exercise Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise`
  - **Description:** _Abstract object describing fields common to all exercise transaction objects_
  - **View more:** [schema/primitives/transactions/exercise/base_exercise](/docs/schema/primitives/transactions/exercise/schema-primitives-transactions-exercise-base_exercise.md)

- **Primitive - Security Release Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release`
  - **Description:** _Abstract object describing fields common to all release transaction objects_
  - **View more:** [schema/primitives/transactions/release/base_release](/docs/schema/primitives/transactions/release/schema-primitives-transactions-release-base_release.md)

- **Primitive - Security Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction`
  - **Description:** _Abstract transaction object to be extended by all other transaction objects_
  - **View more:** [schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)

- **Primitive - Security Retraction Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction`
  - **Description:** _Abstract object describing a security retraction transaction_
  - **View more:** [schema/primitives/transactions/retraction/base_retraction](/docs/schema/primitives/transactions/retraction/schema-primitives-transactions-retraction-base_retraction.md)

- **Primitive - Security Conversion Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion`
  - **Description:** _Abstract object describing fields common to all conversion transaction objects_
  - **View more:** [schema/primitives/transactions/conversion/base_conversion](/docs/schema/primitives/transactions/conversion/schema-primitives-transactions-conversion-base_conversion.md)

- **Primitive - Security Split Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split`
  - **Description:** _Abstract object describing a security split transaction_
  - **View more:** [schema/primitives/transactions/split/base_split](/docs/schema/primitives/transactions/split/schema-primitives-transactions-split-base_split.md)

- **Primitive - Security Transfer Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer`
  - **Description:** _Abstract object describing a security transfer or secondary sale transaction_
  - **View more:** [schema/primitives/transactions/transfer/base_transfer](/docs/schema/primitives/transactions/transfer/schema-primitives-transactions-transfer-base_transfer.md)

- **Primitive - Security Reissuance Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/base_reissuance`
  - **Description:** _Abstract object describing common properties to a reissuance of a security_
  - **View more:** [schema/primitives/transactions/reissuance/base_reissuance](/docs/schema/primitives/transactions/reissuance/schema-primitives-transactions-reissuance-base_reissuance.md)

- **Primitive - Security Cancellation Transaction**

  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation`
  - **Description:** _Abstract object describing fields common to all cancellation transaction objects_
  - **View more:** [schema/primitives/transactions/cancellation/base_cancellation](/docs/schema/primitives/transactions/cancellation/schema-primitives-transactions-cancellation-base_cancellation.md)

- **Object - BaseFile**
  - :warning: ABSTRACT :warning:
  - **Id:** `https://opencaptablecoalition.com/schema/primitives/base_file`
  - **Description:** _Abstract file to be extended by all other files_
  - **View more:** [schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

## Developer Information

### Format

- We use [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) for maximum compatibility with
  JSON Schema [implementations](https://protect-us.mimecast.com/s/bvw6ClYgmKf29D5ZHqNca4?domain=json-schema.org)

### Recommended Editor for the openapi.json file

- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter"

### Developing

This repo requires Prettier to be run on all files. Run `npm install` to install dev dependencies and Prettier will automatically run pre-commit.

### Testing

We have created npm scripts to perform various validations, such as validating the schemas themselves and our
example ocf object instances:

- To validate schemas in the repo, run `npm run validate-ocf-file-schemas`
- To validate examples in the repo, run `npm run validate-example-ocf-files`

If you want to use the validator for your own files, you can run the following command from the repo root:

- `node ./utils/validate.mjs validate-ocf-director -p [path/to/ocf/files] -v`

_Feel free to omit the -v if you don't want full console logs of the validation process_

We'll be releasing more complete documentation for validating and packaging in the future. _NOTE: We are still refining
our toolchain and everything here is subject to change_

## Contributors (alphabetical)

- Ryan Carpenter
- Ben Hutchings
- Patrick Johnmeyer
- Tyler McConnell
- Dan Owen
- Chris Pasakarnis
- John Scrudato
- Ray Shan
- Caroline Taymor
- Eric Vogl
- Rob Wise
- Jacob Yavis
