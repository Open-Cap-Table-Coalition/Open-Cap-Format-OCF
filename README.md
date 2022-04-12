![](https://github.com/gunderson-dettmer/OCF-MD-Generator/blob/master/docs/images/OCF%20Logo.png)

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

![](https://github.com/gunderson-dettmer/OCF-MD-Generator/blob/master/docs/images/OCF%20Container.png)

We are working on sample tooling to interact with compressed \*.ocf files.

### Event-Driven Architecture

OCF is powered by an event-driven architecture. All Stocks, Plan Securities, Warrants and Convertibles have
object-specific events that are added to an event "stack" to represent the history of that security. These events
describe the relevant data needed to describe key events such as issuances, transfers, conversions, etc. You can
see a full list of event transactions supported in our [transactions schemas folder](/schema/objects/transactions).

Here's an example of how an event stack would work to track the lifecycle of a single issuance of preferred stock:

![](https://github.com/gunderson-dettmer/OCF-MD-Generator/blob/master/docs/images/Transaction%20Stack%20Animation.gif)

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

- **OCF Manifest File**

  - **Id:** `https://opencaptablecoalition.com/schema/files/OCFManifestFile.schema.json`
  - **Description:** Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc.
  - **View more:** [schema/files/OCFManifestFile](/docs/schema/files/OCFManifestFile.md)

- **File - Stakeholders**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stakeholders
  - **View more:** [schema/files/StakeholdersFile](/docs/schema/files/StakeholdersFile.md)

- **File - Stock Classes**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock classes
  - **View more:** [schema/files/StockClassesFile](/docs/schema/files/StockClassesFile.md)

- **File - Stock Legend Templates**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock legend templates
  - **View more:** [schema/files/StockLegendTemplatesFile](/docs/schema/files/StockLegendTemplatesFile.md)

- **File - Stock Plans**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock plans
  - **View more:** [schema/files/StockPlansFile](/docs/schema/files/StockPlansFile.md)

- **File - Transactions**

  - **Id:** `https://opencaptablecoalition.com/schema/files/TransactionsFile.schema.json`
  - **Description:** JSON containing file type identifier and list transactions
  - **View more:** [schema/files/TransactionsFile](/docs/schema/files/TransactionsFile.md)

- **File - Valuations**

  - **Id:** `https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`
  - **Description:** JSON containing file type identifier and list of valuations
  - **View more:** [schema/files/ValuationsFile](/docs/schema/files/ValuationsFile.md)

- **File - Vesting Schedules**

  - **Id:** `https://opencaptablecoalition.com/schema/files/VestingSchedulesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of vesting schedules
  - **View more:** [schema/files/VestingSchedulesFile](/docs/schema/files/VestingSchedulesFile.md)

### [Objects](/schema/objects)

_Describing the structure of OCF -- these contain the common object properties `id` and `comments`_

- **Object - Issuer**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Issuer.schema.json`
  - **Description:** Object describing the issuer of the cap table (the company whose cap table this is)
  - **View more:** [schema/objects/Issuer](/docs/schema/objects/Issuer.md)

- **Object - Stakeholder**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Stakeholder.schema.json`
  - **Description:** Object describing a stakeholder
  - **View more:** [schema/objects/Stakeholder](/docs/schema/objects/Stakeholder.md)

- **Object - Stock Class**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockClass.schema.json`
  - **Description:** Object describing a class of stock issued by the issuer
  - **View more:** [schema/objects/StockClass](/docs/schema/objects/StockClass.md)

- **Object - Stock Legend Template**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockLegendTemplate.schema.json`
  - **Description:** Object describing a stock legend template
  - **View more:** [schema/objects/StockLegendTemplate](/docs/schema/objects/StockLegendTemplate.md)

- **Object - Stock Plan**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json`
  - **Description:** Object describing a plan which stock options are issued from
  - **View more:** [schema/objects/StockPlan](/docs/schema/objects/StockPlan.md)

- **Object - Valuation**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Valuation.schema.json`
  - **Description:** Object describing a valuation used in the cap table
  - **View more:** [schema/objects/Valuation](/docs/schema/objects/Valuation.md)

- **Object - Vesting Schedule**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/VestingSchedule.schema.json`
  - **Description:** Object describing a strictly time-based vesting schedule
  - **View more:** [schema/objects/VestingSchedule](/docs/schema/objects/VestingSchedule.md)

- **Object - Convertible Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a convertible security
  - **View more:** [schema/objects/transactions/transfer/ConvertibleTransfer](/docs/schema/objects/transactions/transfer/ConvertibleTransfer.md)

- **Object - Plan Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json`
  - **Description:** Object describing a transfer of a plan security
  - **View more:** [schema/objects/transactions/transfer/PlanSecurityTransfer](/docs/schema/objects/transactions/transfer/PlanSecurityTransfer.md)

- **Object - Stock Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/StockTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a stock security
  - **View more:** [schema/objects/transactions/transfer/StockTransfer](/docs/schema/objects/transactions/transfer/StockTransfer.md)

- **Object - Warrant Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/WarrantTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a warrant security
  - **View more:** [schema/objects/transactions/transfer/WarrantTransfer](/docs/schema/objects/transactions/transfer/WarrantTransfer.md)

- **Object - Stock Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/StockClassSplit.schema.json`
  - **Description:** Object describing a split of a stock class
  - **View more:** [schema/objects/transactions/split/StockClassSplit](/docs/schema/objects/transactions/split/StockClassSplit.md)

- **Object - Convertible Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/ConvertibleRetraction.schema.json`
  - **Description:** Object describing a retraction of a convertible security
  - **View more:** [schema/objects/transactions/retraction/ConvertibleRetraction](/docs/schema/objects/transactions/retraction/ConvertibleRetraction.md)

- **Object - Plan Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json`
  - **Description:** Object describing a retraction of a plan security
  - **View more:** [schema/objects/transactions/retraction/PlanSecurityRetraction](/docs/schema/objects/transactions/retraction/PlanSecurityRetraction.md)

- **Object - Stock Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/StockRetraction.schema.json`
  - **Description:** Object describing a retraction of a stock security
  - **View more:** [schema/objects/transactions/retraction/StockRetraction](/docs/schema/objects/transactions/retraction/StockRetraction.md)

- **Object - Warrant Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/WarrantRetraction.schema.json`
  - **Description:** Object describing a retraction of a warrant security
  - **View more:** [schema/objects/transactions/retraction/WarrantRetraction](/docs/schema/objects/transactions/retraction/WarrantRetraction.md)

- **Object - Stock Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json`
  - **Description:** Object describing a stock repurchase transaction
  - **View more:** [schema/objects/transactions/repurchase/StockRepurchase](/docs/schema/objects/transactions/repurchase/StockRepurchase.md)

- **Object - Plan Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/release/PlanSecurityRelease.schema.json`
  - **Description:** Object describing a plan security release transaction
  - **View more:** [schema/objects/transactions/release/PlanSecurityRelease](/docs/schema/objects/transactions/release/PlanSecurityRelease.md)

- **Object - Stock Re-issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json`
  - **Description:** Object describing a re-issuance of stock
  - **View more:** [schema/objects/transactions/reissuance/StockReissuance](/docs/schema/objects/transactions/reissuance/StockReissuance.md)

- **Object - Convertible Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`
  - **Description:** Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/ConvertibleIssuance](/docs/schema/objects/transactions/issuance/ConvertibleIssuance.md)

- **Object - Plan Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json`
  - **Description:** Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/PlanSecurityIssuance](/docs/schema/objects/transactions/issuance/PlanSecurityIssuance.md)

- **Object - Stock Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`
  - **Description:** Object describing a stock issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/StockIssuance](/docs/schema/objects/transactions/issuance/StockIssuance.md)

- **Object - Warrant Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/WarrantIssuance.schema.json`
  - **Description:** Object describing warrant issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/WarrantIssuance](/docs/schema/objects/transactions/issuance/WarrantIssuance.md)

- **Object - Plan Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/PlanSecurityExercise.schema.json`
  - **Description:** Object describing a plan security exercise transaction
  - **View more:** [schema/objects/transactions/exercise/PlanSecurityExercise](/docs/schema/objects/transactions/exercise/PlanSecurityExercise.md)

- **Object - Warrant Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/WarrantExercise.schema.json`
  - **Description:** Object describing a warrant exercise transaction
  - **View more:** [schema/objects/transactions/exercise/WarrantExercise](/docs/schema/objects/transactions/exercise/WarrantExercise.md)

- **Object - Convertible Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/ConvertibleConversion.schema.json`
  - **Description:** Object describing a conversion of a convertible security
  - **View more:** [schema/objects/transactions/conversion/ConvertibleConversion](/docs/schema/objects/transactions/conversion/ConvertibleConversion.md)

- **Object - Stock Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json`
  - **Description:** Object describing a conversion of stock
  - **View more:** [schema/objects/transactions/conversion/StockConversion](/docs/schema/objects/transactions/conversion/StockConversion.md)

- **Object - Convertible Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json`
  - **Description:** Object describing a cancellation of a convertible security
  - **View more:** [schema/objects/transactions/cancellation/ConvertibleCancellation](/docs/schema/objects/transactions/cancellation/ConvertibleCancellation.md)

- **Object - Plan Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json`
  - **Description:** Object describing a cancellation of a plan security
  - **View more:** [schema/objects/transactions/cancellation/PlanSecurityCancellation](/docs/schema/objects/transactions/cancellation/PlanSecurityCancellation.md)

- **Object - Stock Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/StockCancellation.schema.json`
  - **Description:** Object describing a cancellation of a stock security
  - **View more:** [schema/objects/transactions/cancellation/StockCancellation](/docs/schema/objects/transactions/cancellation/StockCancellation.md)

- **Object - Warrant Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/WarrantCancellation.schema.json`
  - **Description:** Object describing a cancellation of a warrant security
  - **View more:** [schema/objects/transactions/cancellation/WarrantCancellation](/docs/schema/objects/transactions/cancellation/WarrantCancellation.md)

- **Object - Convertible Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json`
  - **Description:** Object describing a convertible acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/ConvertibleAcceptance](/docs/schema/objects/transactions/acceptance/ConvertibleAcceptance.md)

- **Object - Plan Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json`
  - **Description:** Object describing a plan security acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/PlanSecurityAcceptance](/docs/schema/objects/transactions/acceptance/PlanSecurityAcceptance.md)

- **Object - Stock Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/StockAcceptance.schema.json`
  - **Description:** Object describing a stock acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/StockAcceptance](/docs/schema/objects/transactions/acceptance/StockAcceptance.md)

- **Object - Warrant Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/WarrantAcceptance.schema.json`
  - **Description:** Object describing a warrant acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/WarrantAcceptance](/docs/schema/objects/transactions/acceptance/WarrantAcceptance.md)

### [Enums](/schema/enums)

_Key enumerations used throughout the schemas_

- **Enum - Accrual Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AccrualPeriodType.schema.json`
  - **Description:** Enumeration of interest accrual period types
  - **View more:** [schema/enums/AccrualPeriodType](/docs/schema/enums/AccrualPeriodType.md)

- **Enum - Address Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AddressType.schema.json`
  - **Description:** Enumeration of address types
  - **View more:** [schema/enums/AddressType](/docs/schema/enums/AddressType.md)

- **Enum - Allocation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AllocationType.schema.json`
  - **Description:** Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:
    1.  Cumulative Rounding (5 - 4 - 5 - 4)
    2.  Cumulative Round Down (4 - 5 - 4 - 5)
    3.  Front Loaded (5 - 5 - 4 - 4)
    4.  Back Loaded (4 - 4 - 5 - 5)
    5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
    6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)
  - **View more:** [schema/enums/AllocationType](/docs/schema/enums/AllocationType.md)

- **Enum - Compensation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompensationType.schema.json`
  - **Description:** Enumeration of stock compensation types
  - **View more:** [schema/enums/CompensationType](/docs/schema/enums/CompensationType.md)

- **Enum - Compounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompoundingType.schema.json`
  - **Description:** Enumeration of interest compounding types
  - **View more:** [schema/enums/CompoundingType](/docs/schema/enums/CompoundingType.md)

- **Enum - Conversion Calculation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionCalculationType.schema.json`
  - **Description:** Enumeration of convertible conversion calculation types. We currently support:
  1) `RATIO` - units of source security to units of target Stock Class
  2) `FIXED` - converts to a fixed number of shares of Stock Class, and
  3) `CUSTOM` - conversion cannot be structured in OCF.`
  - **View more:** [schema/enums/ConversionCalculationType](/docs/schema/enums/ConversionCalculationType.md)

- **Enum - Conversion Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionType.schema.json`
  - **Description:** Enumeration of convertible conversion types
  - **View more:** [schema/enums/ConversionType](/docs/schema/enums/ConversionType.md)

- **Enum - Convertible Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json`
  - **Description:** Enumeration of convertible instrument types
  - **View more:** [schema/enums/ConvertibleType](/docs/schema/enums/ConvertibleType.md)

- **Enum - Day Count Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/DayCountType.schema.json`
  - **Description:** Enumeration of how the number of days are determined per period
  - **View more:** [schema/enums/DayCountType](/docs/schema/enums/DayCountType.md)

- **Enum - Email Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/EmailType.schema.json`
  - **Description:** Enumeration of email types
  - **View more:** [schema/enums/EmailType](/docs/schema/enums/EmailType.md)

- **Enum - OCF File Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/FileType.schema.json`
  - **Description:** Enumeration of different OCF file types which are used to load proper schemas for validation
  - **View more:** [schema/enums/FileType](/docs/schema/enums/FileType.md)

- **Enum - Interest Payout Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json`
  - **Description:** Enumeration of interest payout types (e.g. deferred or cash payment)
  - **View more:** [schema/enums/InterestPayoutType](/docs/schema/enums/InterestPayoutType.md)

- **Enum - OCF Version Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OCFVersionType.schema.json`
  - **Description:** Enumeration of recognized OCF versions
  - **View more:** [schema/enums/OCFVersionType](/docs/schema/enums/OCFVersionType.md)

- **Enum - Object Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json`
  - **Description:** Enumeration of object types
  - **View more:** [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)

- **Enum - Option Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OptionType.schema.json`
  - **Description:** Enumeration of option types
  - **View more:** [schema/enums/OptionType](/docs/schema/enums/OptionType.md)

- **Enum - Parent Security Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ParentSecurityType.schema.json`
  - **Description:** Enumeration of parent sources a stock can be issued or created from
  - **View more:** [schema/enums/ParentSecurityType](/docs/schema/enums/ParentSecurityType.md)

- **Enum - Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json`
  - **Description:** Enumeration of time period types
  - **View more:** [schema/enums/PeriodType](/docs/schema/enums/PeriodType.md)

- **Enum - Phone Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PhoneType.schema.json`
  - **Description:** Enumeration of phone number types
  - **View more:** [schema/enums/PhoneType](/docs/schema/enums/PhoneType.md)

- **Enum - Rounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/RoundingType.schema.json`
  - **Description:** Enumeration of rounding types
  - **View more:** [schema/enums/RoundingType](/docs/schema/enums/RoundingType.md)

- **Enum - Stakeholder Relationship Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderRelationshipType.schema.json`
  - **Description:** Enumeration of types of relationships between stakeholder and issuer
  - **View more:** [schema/enums/StakeholderRelationshipType](/docs/schema/enums/StakeholderRelationshipType.md)

- **Enum - Stakeholder Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderType.schema.json`
  - **Description:** Enumeration of stakeholder types - individual (human) or institution (entity)
  - **View more:** [schema/enums/StakeholderType](/docs/schema/enums/StakeholderType.md)

- **Enum - Stock Class Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StockClassType.schema.json`
  - **Description:** Enumeration of stock class types
  - **View more:** [schema/enums/StockClassType](/docs/schema/enums/StockClassType.md)

- **Enum - Termination Window Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/TerminationWindowType.schema.json`
  - **Description:** Enumeration of termination window types
  - **View more:** [schema/enums/TerminationWindowType](/docs/schema/enums/TerminationWindowType.md)

- **Enum - Valuation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ValuationType.schema.json`
  - **Description:** Enumeration of valuation types
  - **View more:** [schema/enums/ValuationType](/docs/schema/enums/ValuationType.md)

- **Enum - Vesting Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/VestingType.schema.json`
  - **Description:** Enumeration of vesting types
  - **View more:** [schema/enums/VestingType](/docs/schema/enums/VestingType.md)

### [Types](/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

- **Type - Address**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Address.schema.json`
  - **Description:** Type representation of an address
  - **View more:** [schema/types/Address](/docs/schema/types/Address.md)

- **Type - Contact Info**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`
  - **Description:** Type representation of a primary contact person for a stakeholder (e.g. a fund)
  - **View more:** [schema/types/ContactInfo](/docs/schema/types/ContactInfo.md)

- **Type - Conversion Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json`
  - **Description:** Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)
  - **View more:** [schema/types/ConversionTrigger](/docs/schema/types/ConversionTrigger.md)

- **Type - Country Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CountryCode.schema.json`
  - **Description:** Type representation of an ISO 3166-1 alpha 2 country code
  - **View more:** [schema/types/CountryCode](/docs/schema/types/CountryCode.md)

- **Type - Currency Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json`
  - **Description:** Type representation of an ISO 4217 currency code
  - **View more:** [schema/types/CurrencyCode](/docs/schema/types/CurrencyCode.md)

- **Type - Custom Vesting Tranche**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CustomVestingTranche.schema.json`
  - **Description:** Type representation of a vesting tranche by date and quantity
  - **View more:** [schema/types/CustomVestingTranche](/docs/schema/types/CustomVestingTranche.md)

- **Type - Date**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Date.schema.json`
  - **Description:** Type represention of an ISO-8601 date, e.g. 2022-01-28
  - **View more:** [schema/types/Date](/docs/schema/types/Date.md)

- **Type - Email**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Email.schema.json`
  - **Description:** Type representation of an email address
  - **View more:** [schema/types/Email](/docs/schema/types/Email.md)

- **Type - Event-driven Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/EventDrivenVestingCondition.schema.json`
  - **Description:** Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)
  - **View more:** [schema/types/EventDrivenVestingCondition](/docs/schema/types/EventDrivenVestingCondition.md)

- **Type - File**

  - **Id:** `https://opencaptablecoalition.com/schema/types/File.schema.json`
  - **Description:** Type representation of a file
  - **View more:** [schema/types/File](/docs/schema/types/File.md)

- **Type - MD5 Hash**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Md5.schema.json`
  - **Description:** String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers
  - **View more:** [schema/types/Md5](/docs/schema/types/Md5.md)

- **Type - Monetary**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Monetary.schema.json`
  - **Description:** Type representation of an amount of money in a specified currency
  - **View more:** [schema/types/Monetary](/docs/schema/types/Monetary.md)

- **Type - Name**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Name.schema.json`
  - **Description:** Type comprising of multiple name components
  - **View more:** [schema/types/Name](/docs/schema/types/Name.md)

- **Type - Numeric**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Numeric.schema.json`
  - **Description:** Fixed-point string representation of a number (up to 10 decimal places supported)
  - **View more:** [schema/types/Numeric](/docs/schema/types/Numeric.md)

- **Type - Percentage**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Percentage.schema.json`
  - **Description:** Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)
  - **View more:** [schema/types/Percentage](/docs/schema/types/Percentage.md)

- **Type - Phone**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Phone.schema.json`
  - **Description:** Type representation of a phone number
  - **View more:** [schema/types/Phone](/docs/schema/types/Phone.md)

- **Type - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Ratio.schema.json`
  - **Description:** Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values
  - **View more:** [schema/types/Ratio](/docs/schema/types/Ratio.md)

- **Type - Schedule-driven Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json`
  - **Description:** Type representation of a row in a vesting schedule
  - **View more:** [schema/types/ScheduleDrivenVestingCondition](/docs/schema/types/ScheduleDrivenVestingCondition.md)

- **Type - Security Exemption**

  - **Id:** `https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json`
  - **Description:** Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis
  - **View more:** [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md)

- **Type - Stock Class Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/StockClassConversionRights.schema.json`
  - **Description:** Type representation of a conversion right from one security into a stock class
  - **View more:** [schema/types/StockClassConversionRights](/docs/schema/types/StockClassConversionRights.md)

- **Type - Stock Parent**

  - **Id:** `https://opencaptablecoalition.com/schema/types/StockParent.schema.json`
  - **Description:** Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)
  - **View more:** [schema/types/StockParent](/docs/schema/types/StockParent.md)

- **Type - Tax Identifier**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TaxID.schema.json`
  - **Description:** Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)
  - **View more:** [schema/types/TaxID](/docs/schema/types/TaxID.md)

- **Type - Termination Window**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json`
  - **Description:** Type representation of a termination window
  - **View more:** [schema/types/TerminationWindow](/docs/schema/types/TerminationWindow.md)

- **Type - Vesting Rules**

  - **Id:** `https://opencaptablecoalition.com/schema/types/VestingRules.schema.json`
  - **Description:** Type representing all aspects related to vesting securities
  - **View more:** [schema/types/VestingRules](/docs/schema/types/VestingRules.md)

### [Primitives](/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._

- **Object - BaseFile**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/BaseFile.schema.json`
  - **Description:** Abstract file to be extended by all other files
  - **View more:** [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

- **Object - BaseObject**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/BaseObject.schema.json`
  - **Description:** Abstract object to be extended by all other objects
  - **View more:** [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)

- **Primitive - Security Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/BaseSecurityTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that deal with individual securities
  - **View more:** [schema/primitives/transactions/BaseSecurityTransaction](/docs/schema/primitives/transactions/BaseSecurityTransaction.md)

- **Primitive - Stock Class Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/BaseStockClassTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that affect the stock class
  - **View more:** [schema/primitives/transactions/BaseStockClassTransaction](/docs/schema/primitives/transactions/BaseStockClassTransaction.md)

- **Primitive - Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/BaseTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all other transaction objects
  - **View more:** [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)

- **Primitive - Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/transfer/BaseTransfer.schema.json`
  - **Description:** Abstract object describing a security transfer or secondary sale transaction
  - **View more:** [schema/primitives/transactions/transfer/BaseTransfer](/docs/schema/primitives/transactions/transfer/BaseTransfer.md)

- **Primitive - Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/retraction/BaseRetraction.schema.json`
  - **Description:** Abstract object describing a security retraction transaction
  - **View more:** [schema/primitives/transactions/retraction/BaseRetraction](/docs/schema/primitives/transactions/retraction/BaseRetraction.md)

- **Primitive - Security Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/BaseRepurchase.schema.json`
  - **Description:** Abstract object describing common properties to a repurchase transaction
  - **View more:** [schema/primitives/transactions/repurchase/BaseRepurchase](/docs/schema/primitives/transactions/repurchase/BaseRepurchase.md)

- **Primitive - Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/release/BaseRelease.schema.json`
  - **Description:** Abstract object describing fields common to all release transaction objects
  - **View more:** [schema/primitives/transactions/release/BaseRelease](/docs/schema/primitives/transactions/release/BaseRelease.md)

- **Primitive - Security Reissuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/BaseReissuance.schema.json`
  - **Description:** Abstract object describing common properties to a reissuance of a security
  - **View more:** [schema/primitives/transactions/reissuance/BaseReissuance](/docs/schema/primitives/transactions/reissuance/BaseReissuance.md)

- **Primitive - Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/issuance/BaseIssuance.schema.json`
  - **Description:** Abstract object describing fields common to all issuance objects
  - **View more:** [schema/primitives/transactions/issuance/BaseIssuance](/docs/schema/primitives/transactions/issuance/BaseIssuance.md)

- **Primitive - Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/exercise/BaseExercise.schema.json`
  - **Description:** Abstract object describing fields common to all exercise transaction objects
  - **View more:** [schema/primitives/transactions/exercise/BaseExercise](/docs/schema/primitives/transactions/exercise/BaseExercise.md)

- **Primitive - Security Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/conversion/BaseConversion.schema.json`
  - **Description:** Abstract object describing fields common to all conversion transaction objects
  - **View more:** [schema/primitives/transactions/conversion/BaseConversion](/docs/schema/primitives/transactions/conversion/BaseConversion.md)

- **Primitive - Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/BaseCancellation.schema.json`
  - **Description:** Abstract object describing fields common to all cancellation transaction objects
  - **View more:** [schema/primitives/transactions/cancellation/BaseCancellation](/docs/schema/primitives/transactions/cancellation/BaseCancellation.md)

- **Primitive - Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/transactions/acceptance/BaseAcceptance.schema.json`
  - **Description:** Abstract object describing a security acceptance transaction
  - **View more:** [schema/primitives/transactions/acceptance/BaseAcceptance](/docs/schema/primitives/transactions/acceptance/BaseAcceptance.md)

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
- Andrey Lebedev
- Tyler McConnell
- Dan Owen
- Chris Pasakarnis
- John Scrudato
- Ray Shan
- Caroline Taymor
- Eric Vogl
- Rob Wise
- Jacob Yavis
