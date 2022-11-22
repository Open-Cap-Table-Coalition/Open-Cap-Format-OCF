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

**At the moment, we recommend combining all of these files into a single compressed file with a \*.ocf.zip extension:**

![](docs/images/OCF%20Container.png)

We are working on sample tooling to interact with compressed \*.ocf.zip files.

**You can also break out the various OCF Types and OCF Objects and make those available separately via API or other, suitable mechanism. The key part of OCF is the data structure, not the container itself, though, to ensure complete cap table integrity, a full cap table export is recommended.**

### Event-Driven Architecture

OCF is powered by an event-driven architecture. All Stocks, Plan Securities, Warrants and Convertibles have
object-specific events that are added to an event "stack" to represent the history of that security. These events
describe the relevant data needed to describe key events such as issuances, transfers, conversions, etc. You can
see a full list of event transactions supported in our [transactions schemas folder](/schema/objects/transactions).

Here's an example of how an event stack would work to track the lifecycle of a single issuance of preferred stock:

![](/docs/images/Transaction%20Stack%20Animation.gif)

## Key OCF Concepts

_OCF is designed to be extremely expressive and extensible. Pay particular attention to vesting and conversion, which have both been designed to support the types of complex, bespoke vesting and conversion conditions commonly found on attorney-drafted options and convertibles yet are (today) challenging to model in a structured format_

### Conversions

The conversion of one OCF security into another is modeled using three key concepts which describe how, when and into what a convertible security converts into:

1. [Conversion Right](/schema/types/conversion_rights/): what can the security convert into?
2. [Conversion Trigger](/schema/types/conversion_triggers/): when and under what conditions does the Conversion Right come into effect?
3. [Conversion Mechanism](/schema/types/conversion_mechanisms/): how is the coversion amount calculated?

We use the same design patterns for convertible stock (e.g. preferred stock converting into common), warrants (which don't "convert" but can be "exercised") and convertible securities (e.g. notes).

Let's illustrate the design pattern using a convertible note as an example:

![](docs/images/OCF%20Conversion%20Diagram.png)

And here's what some sample data looks like in practice:

![](docs/images/OCF%20Conversion%20Example.png)

### Vesting

Our vesting data model supports arbitrarily-complex trees of dependent vesting conditions that can mix time-based and event-based vesting (e.g. vesting over time and "milestone" vesting, in any execution order with any desired dependencies). We are working on more comprehensive documentation for these concepts. In the meantime, please review the [vesting terms object](/schema/objects/VestingTerms.schema.json) (essentially a "vesting schedule"). the vesting OCF Types in [/schema/types/vesting](/schema/types/vesting/), and the vesting events in [/schema/objects/transactions/vesting](/schema/objects/transactions/vesting/) (which are used to indicate when a given vesting schedule starts for a given security and when a milestone-based condition is satisfied).

You can see example vesting schedules in our samples folder in the [VestingTerms.ocf.json](/samples/VestingTerms.ocf.json) file.

Stay tuned for expanded documentation!

## Overall Repo Organization

[Full documentation](docs/README.md) is available in the [docs folder](/docs). Our documentation is
auto-generated and our toolchain is still being refined, so the layout may continue to change and improve.

## Schemas are divided into five folders:

### [Files](/schema/files)

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

- **OCF Manifest File**

  - **Id:** `https://opencaptablecoalition.com/schema/files/OCFManifestFile.schema.json`
  - **Description:** Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc.
  - **View more:** [schema/files/OCFManifestFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/OCFManifestFile)

- **File - Stakeholders**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stakeholders
  - **View more:** [schema/files/StakeholdersFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/StakeholdersFile)

- **File - Stock Classes**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock classes
  - **View more:** [schema/files/StockClassesFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/StockClassesFile)

- **File - Stock Legend Templates**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock legend templates
  - **View more:** [schema/files/StockLegendTemplatesFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/StockLegendTemplatesFile)

- **File - Stock Plans**

  - **Id:** `https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json`
  - **Description:** JSON containing file type identifier and list of stock plans
  - **View more:** [schema/files/StockPlansFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/StockPlansFile)

- **File - Transactions**

  - **Id:** `https://opencaptablecoalition.com/schema/files/TransactionsFile.schema.json`
  - **Description:** JSON containing file type identifier and list transactions
  - **View more:** [schema/files/TransactionsFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/TransactionsFile)

- **File - Valuations**

  - **Id:** `https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`
  - **Description:** JSON containing file type identifier and list of valuations
  - **View more:** [schema/files/ValuationsFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/ValuationsFile)

- **File - Vesting Terms**

  - **Id:** `https://opencaptablecoalition.com/schema/files/VestingTermsFile.schema.json`
  - **Description:** JSON containing file type identifier and list of vesting terms
  - **View more:** [schema/files/VestingTermsFile](https://naveedn.github.io/Open-Cap-Format-OCF/schema/files/VestingTermsFile)

### [Objects](/schema/objects)

_Describing the structure of OCF -- these contain the common object properties `id` and `comments`_

- **Object - Issuer**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Issuer.schema.json`
  - **Description:** Object describing the issuer of the cap table (the company whose cap table this is)
  - **View more:** [schema/objects/Issuer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/Issuer)

- **Object - Stakeholder**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Stakeholder.schema.json`
  - **Description:** Object describing a stakeholder
  - **View more:** [schema/objects/Stakeholder](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/Stakeholder)

- **Object - Stock Class**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockClass.schema.json`
  - **Description:** Object describing a class of stock issued by the issuer
  - **View more:** [schema/objects/StockClass](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockClass)

- **Object - Stock Legend Template**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockLegendTemplate.schema.json`
  - **Description:** Object describing a stock legend template
  - **View more:** [schema/objects/StockLegendTemplate](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockLegendTemplate)

- **Object - Stock Plan**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json`
  - **Description:** Object describing a plan which stock options are issued from
  - **View more:** [schema/objects/StockPlan](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockPlan)

- **Object - Valuation**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/Valuation.schema.json`
  - **Description:** Object describing a valuation used in the cap table
  - **View more:** [schema/objects/Valuation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/Valuation)

- **Object - Vesting Terms**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/VestingTerms.schema.json`
  - **Description:** Object describing the terms under which a security vests
  - **View more:** [schema/objects/VestingTerms](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/VestingTerms)

- **Object - Vesting Event Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/vesting/VestingEvent.schema.json`
  - **Description:** Object describing the transaction of an non-schedule-driven vesting event associated with a security
  - **View more:** [schema/objects/transactions/vesting/VestingEvent](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/vesting/VestingEvent)

- **Object - Vesting Start Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/vesting/VestingStart.schema.json`
  - **Description:** Object describing the transaction of vesting schedule start / commencement associated with a security
  - **View more:** [schema/objects/transactions/vesting/VestingStart](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/vesting/VestingStart)

- **Object - Convertible Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a convertible security
  - **View more:** [schema/objects/transactions/transfer/ConvertibleTransfer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/transfer/ConvertibleTransfer)

- **Object - Plan Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json`
  - **Description:** Object describing a transfer of a plan security
  - **View more:** [schema/objects/transactions/transfer/PlanSecurityTransfer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/transfer/PlanSecurityTransfer)

- **Object - Stock Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/StockTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a stock security
  - **View more:** [schema/objects/transactions/transfer/StockTransfer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/transfer/StockTransfer)

- **Object - Warrant Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/transfer/WarrantTransfer.schema.json`
  - **Description:** Object describing a transfer or secondary sale of a warrant security
  - **View more:** [schema/objects/transactions/transfer/WarrantTransfer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/transfer/WarrantTransfer)

- **Object - Stock Split Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/split/StockClassSplit.schema.json`
  - **Description:** Object describing a split of a stock class
  - **View more:** [schema/objects/transactions/split/StockClassSplit](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/split/StockClassSplit)

- **Object - Convertible Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/ConvertibleRetraction.schema.json`
  - **Description:** Object describing a retraction of a convertible security
  - **View more:** [schema/objects/transactions/retraction/ConvertibleRetraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/retraction/ConvertibleRetraction)

- **Object - Plan Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json`
  - **Description:** Object describing a retraction of a plan security
  - **View more:** [schema/objects/transactions/retraction/PlanSecurityRetraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/retraction/PlanSecurityRetraction)

- **Object - Stock Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/StockRetraction.schema.json`
  - **Description:** Object describing a retraction of a stock security
  - **View more:** [schema/objects/transactions/retraction/StockRetraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/retraction/StockRetraction)

- **Object - Warrant Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/retraction/WarrantRetraction.schema.json`
  - **Description:** Object describing a retraction of a warrant security
  - **View more:** [schema/objects/transactions/retraction/WarrantRetraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/retraction/WarrantRetraction)

- **Object - Stock Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json`
  - **Description:** Object describing a stock repurchase transaction
  - **View more:** [schema/objects/transactions/repurchase/StockRepurchase](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/repurchase/StockRepurchase)

- **Object - Plan Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/release/PlanSecurityRelease.schema.json`
  - **Description:** Object describing a plan security release transaction
  - **View more:** [schema/objects/transactions/release/PlanSecurityRelease](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/release/PlanSecurityRelease)

- **Object - Stock Re-issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json`
  - **Description:** Object describing a re-issuance of stock
  - **View more:** [schema/objects/transactions/reissuance/StockReissuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/reissuance/StockReissuance)

- **Object - Convertible Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`
  - **Description:** Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/ConvertibleIssuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/issuance/ConvertibleIssuance)

- **Object - Plan Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json`
  - **Description:** Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/PlanSecurityIssuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/issuance/PlanSecurityIssuance)

- **Object - Stock Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`
  - **Description:** Object describing a stock issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/StockIssuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/issuance/StockIssuance)

- **Object - Warrant Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/issuance/WarrantIssuance.schema.json`
  - **Description:** Object describing warrant issuance transaction by the issuer and held by a stakeholder
  - **View more:** [schema/objects/transactions/issuance/WarrantIssuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/issuance/WarrantIssuance)

- **Object - Plan Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/PlanSecurityExercise.schema.json`
  - **Description:** Object describing a plan security exercise transaction
  - **View more:** [schema/objects/transactions/exercise/PlanSecurityExercise](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/exercise/PlanSecurityExercise)

- **Object - Warrant Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/exercise/WarrantExercise.schema.json`
  - **Description:** Object describing a warrant exercise transaction
  - **View more:** [schema/objects/transactions/exercise/WarrantExercise](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/exercise/WarrantExercise)

- **Object - Convertible Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/ConvertibleConversion.schema.json`
  - **Description:** Object describing a conversion of a convertible security
  - **View more:** [schema/objects/transactions/conversion/ConvertibleConversion](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/conversion/ConvertibleConversion)

- **Object - Stock Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/conversion/StockConversion.schema.json`
  - **Description:** Object describing a conversion of stock
  - **View more:** [schema/objects/transactions/conversion/StockConversion](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/conversion/StockConversion)

- **Object - Convertible Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json`
  - **Description:** Object describing a cancellation of a convertible security
  - **View more:** [schema/objects/transactions/cancellation/ConvertibleCancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/cancellation/ConvertibleCancellation)

- **Object - Plan Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json`
  - **Description:** Object describing a cancellation of a plan security
  - **View more:** [schema/objects/transactions/cancellation/PlanSecurityCancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/cancellation/PlanSecurityCancellation)

- **Object - Stock Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/StockCancellation.schema.json`
  - **Description:** Object describing a cancellation of a stock security
  - **View more:** [schema/objects/transactions/cancellation/StockCancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/cancellation/StockCancellation)

- **Object - Warrant Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/cancellation/WarrantCancellation.schema.json`
  - **Description:** Object describing a cancellation of a warrant security
  - **View more:** [schema/objects/transactions/cancellation/WarrantCancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/cancellation/WarrantCancellation)

- **Object - Convertible Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json`
  - **Description:** Object describing a convertible acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/ConvertibleAcceptance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/acceptance/ConvertibleAcceptance)

- **Object - Plan Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json`
  - **Description:** Object describing a plan security acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/PlanSecurityAcceptance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/acceptance/PlanSecurityAcceptance)

- **Object - Stock Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/StockAcceptance.schema.json`
  - **Description:** Object describing a stock acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/StockAcceptance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/acceptance/StockAcceptance)

- **Object - Warrant Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/objects/transactions/acceptance/WarrantAcceptance.schema.json`
  - **Description:** Object describing a warrant acceptance transaction
  - **View more:** [schema/objects/transactions/acceptance/WarrantAcceptance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/transactions/acceptance/WarrantAcceptance)

### [Enums](/schema/enums)

_Key enumerations used throughout the schemas_

- **Enum - Accrual Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AccrualPeriodType.schema.json`
  - **Description:** Enumeration of interest accrual period types
  - **View more:** [schema/enums/AccrualPeriodType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/AccrualPeriodType)

- **Enum - Address Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AddressType.schema.json`
  - **Description:** Enumeration of address types
  - **View more:** [schema/enums/AddressType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/AddressType)

- **Enum - Allocation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/AllocationType.schema.json`
  - **Description:** Enumeration of allocation types for vesting terms. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:
    1.  Cumulative Rounding (5 - 4 - 5 - 4)
    2.  Cumulative Round Down (4 - 5 - 4 - 5)
    3.  Front Loaded (5 - 5 - 4 - 4)
    4.  Back Loaded (4 - 4 - 5 - 5)
    5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
    6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)
    7.  Fractional (4.5 - 4.5 - 4.5 - 4.5)
  - **View more:** [schema/enums/AllocationType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/AllocationType)

- **Enum - Compensation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompensationType.schema.json`
  - **Description:** Enumeration of stock compensation types
  - **View more:** [schema/enums/CompensationType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/CompensationType)

- **Enum - Compounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/CompoundingType.schema.json`
  - **Description:** Enumeration of interest compounding types
  - **View more:** [schema/enums/CompoundingType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/CompoundingType)

- **Enum - Conversion Mechanism Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionMechanismType.schema.json`
  - **Description:** Enumeration of convertible conversion calculation types.
  - **View more:** [schema/enums/ConversionMechanismType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ConversionMechanismType)

- **Enum - Conversion Right Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionRightType.schema.json`
  - **Description:** Enumeration of types of conversion rights.
  - **View more:** [schema/enums/ConversionRightType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ConversionRightType)

- **Enum - Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConversionTriggerType.schema.json`
  - **Description:** Enumeration of types of triggers common to various legal rights - e.g. does the satisfaction of a condition trigger an automatic conversion or merely a right to convert? If `UNSPECIFIED`, the system of record cannot represent this data in a structured form.
  - **View more:** [schema/enums/ConversionTriggerType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ConversionTriggerType)

- **Enum - Convertible Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json`
  - **Description:** Enumeration of convertible instrument types
  - **View more:** [schema/enums/ConvertibleType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ConvertibleType)

- **Enum - Day Count Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/DayCountType.schema.json`
  - **Description:** Enumeration of how the number of days are determined per period
  - **View more:** [schema/enums/DayCountType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/DayCountType)

- **Enum - Email Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/EmailType.schema.json`
  - **Description:** Enumeration of email types
  - **View more:** [schema/enums/EmailType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/EmailType)

- **Enum - OCF File Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/FileType.schema.json`
  - **Description:** Enumeration of different OCF file types which are used to load proper schemas for validation
  - **View more:** [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)

- **Enum - Interest Payout Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json`
  - **Description:** Enumeration of interest payout types (e.g. deferred or cash payment)
  - **View more:** [schema/enums/InterestPayoutType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/InterestPayoutType)

- **Enum - OCF Version Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OCFVersionType.schema.json`
  - **Description:** Enumeration of recognized OCF versions
  - **View more:** [schema/enums/OCFVersionType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/OCFVersionType)

- **Enum - Object Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json`
  - **Description:** Enumeration of object types
  - **View more:** [schema/enums/ObjectType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ObjectType)

- **Enum - Option Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/OptionType.schema.json`
  - **Description:** Enumeration of option types
  - **View more:** [schema/enums/OptionType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/OptionType)

- **Enum - Parent Security Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ParentSecurityType.schema.json`
  - **Description:** Enumeration of parent sources a stock can be issued or created from
  - **View more:** [schema/enums/ParentSecurityType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ParentSecurityType)

- **Enum - Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json`
  - **Description:** Enumeration of time period types
  - **View more:** [schema/enums/PeriodType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/PeriodType)

- **Enum - Phone Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/PhoneType.schema.json`
  - **Description:** Enumeration of phone number types
  - **View more:** [schema/enums/PhoneType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/PhoneType)

- **Enum - Rounding Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/RoundingType.schema.json`
  - **Description:** Enumeration of rounding types
  - **View more:** [schema/enums/RoundingType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/RoundingType)

- **Enum - Stakeholder Relationship Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderRelationshipType.schema.json`
  - **Description:** Enumeration of types of relationships between stakeholder and issuer
  - **View more:** [schema/enums/StakeholderRelationshipType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/StakeholderRelationshipType)

- **Enum - Stakeholder Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StakeholderType.schema.json`
  - **Description:** Enumeration of stakeholder types - individual (human) or institution (entity)
  - **View more:** [schema/enums/StakeholderType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/StakeholderType)

- **Enum - Stock Class Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/StockClassType.schema.json`
  - **Description:** Enumeration of stock class types
  - **View more:** [schema/enums/StockClassType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/StockClassType)

- **Enum - Termination Window Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/TerminationWindowType.schema.json`
  - **Description:** Enumeration of termination window types
  - **View more:** [schema/enums/TerminationWindowType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/TerminationWindowType)

- **Enum - Valuation Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/ValuationType.schema.json`
  - **Description:** Enumeration of valuation types
  - **View more:** [schema/enums/ValuationType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ValuationType)

- **Enum - Vesting Day of Month**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/VestingDayOfMonth.schema.json`
  - **Description:** Enumeration representing a vesting "day of month". Since not all months have 29, 30, or 31 days, this enum requires those values to also specify an overflow behavior.
  - `01` - `28` : Day 1, 2... 28 of the month; e.g. `03` means vesting occurs on the 3rd of the month.
  - `29_OR_LAST_DAY_OF_MONTH` - `31_OR_LAST_DAY_OF_MONTH` : Day 29, 30, or 31 of the month, defaulting to the last day of the month for shorter months; e.g. `31_OR_LAST_DAY_OF_MONTH` means monthly vesting occurs on Jan 31, Feb 28/29, Mar 31, Apr 30, etc.
  - `VESTING_START_DAY_OR_LAST_DAY_OF_MONTH` vests on the same day of month as the day of the `VESTING_START` condition; e.g. if vesting commences on Jan 15 then any vesting will accrue on the 15th of future vesting months. If vesting commencement occurs on days 29-31, this has the same behavior as the other `*_LAST_DAY_OF_MONTH` values.
  - **View more:** [schema/enums/VestingDayOfMonth](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/VestingDayOfMonth)

- **Enum - Vesting Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/enums/VestingTriggerType.schema.json`
  - **Description:** Enumeration of vesting trigger types
  - **View more:** [schema/enums/VestingTriggerType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/VestingTriggerType)

### [Types](/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

- **Type - Address**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Address.schema.json`
  - **Description:** Type representation of an address
  - **View more:** [schema/types/Address](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Address)

- **Type - Capitalization Definition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CapitalizationDefinition.schema.json`
  - **Description:** Type represents a group of securities that constitutes some formally defined part of the company (e.g. post-money capitalization vs pre-money for a security)
  - **View more:** [schema/types/CapitalizationDefinition](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CapitalizationDefinition)

- **Type - Contact Info**

  - **Id:** `https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`
  - **Description:** Type representation of a primary contact person for a stakeholder (e.g. a fund)
  - **View more:** [schema/types/ContactInfo](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/ContactInfo)

- **Type - Country Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CountryCode.schema.json`
  - **Description:** Type representation of an ISO 3166-1 alpha 2 country code
  - **View more:** [schema/types/CountryCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CountryCode)

- **Type - Country Subdivision Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CountrySubdivisionCode.schema.json`
  - **Description:** Type representation of the second part of an ISO 3166-2 country subdivision code
  - **View more:** [schema/types/CountrySubdivisionCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CountrySubdivisionCode)

- **Type - Currency Code**

  - **Id:** `https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json`
  - **Description:** Type representation of an ISO 4217 currency code
  - **View more:** [schema/types/CurrencyCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CurrencyCode)

- **Type - Date**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Date.schema.json`
  - **Description:** Type represention of an ISO-8601 date, e.g. 2022-01-28
  - **View more:** [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)

- **Type - Email**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Email.schema.json`
  - **Description:** Type representation of an email address
  - **View more:** [schema/types/Email](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Email)

- **Type - File**

  - **Id:** `https://opencaptablecoalition.com/schema/types/File.schema.json`
  - **Description:** Type representation of a file
  - **View more:** [schema/types/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/File)

- **Type - MD5 Hash**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Md5.schema.json`
  - **Description:** String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers
  - **View more:** [schema/types/Md5](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Md5)

- **Type - Monetary**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Monetary.schema.json`
  - **Description:** Type representation of an amount of money in a specified currency
  - **View more:** [schema/types/Monetary](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Monetary)

- **Type - Name**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Name.schema.json`
  - **Description:** Type comprising of multiple name components
  - **View more:** [schema/types/Name](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Name)

- **Type - Numeric**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Numeric.schema.json`
  - **Description:** Fixed-point string representation of a number (up to 10 decimal places supported)
  - **View more:** [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric)

- **Type - Percentage**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Percentage.schema.json`
  - **Description:** Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)
  - **View more:** [schema/types/Percentage](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Percentage)

- **Type - Phone**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Phone.schema.json`
  - **Description:** Type representation of a phone number
  - **View more:** [schema/types/Phone](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Phone)

- **Type - Pre-Release Omission**

  - **Id:** `https://opencaptablecoalition.com/schema/types/PreReleaseOmission.schema.json`
  - **Description:** Transitional type; allows an otherwise "required" field to support omission by an implementation that can not yet support all fields. This is not intended to be permanent; rather it is a communication mechanism indicating that a field added in a pre-release version of the spec will need to be implemented to support the next release.
  - **View more:** [schema/types/PreReleaseOmission](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/PreReleaseOmission)

- **Type - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/Ratio.schema.json`
  - **Description:** Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values
  - **View more:** [schema/types/Ratio](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Ratio)

- **Type - Security Exemption**

  - **Id:** `https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json`
  - **Description:** Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis
  - **View more:** [schema/types/SecurityExemption](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/SecurityExemption)

- **Type - Stock Parent**

  - **Id:** `https://opencaptablecoalition.com/schema/types/StockParent.schema.json`
  - **Description:** Type representation of the parent security of a given stock issuance (e.g. if a stock issuance came from a plan, such as an RSA, or if a stock came from a previous stock entry)
  - **View more:** [schema/types/StockParent](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/StockParent)

- **Type - Tax Identifier**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TaxID.schema.json`
  - **Description:** Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)
  - **View more:** [schema/types/TaxID](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/TaxID)

- **Type - Termination Window**

  - **Id:** `https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json`
  - **Description:** Type representation of a termination window
  - **View more:** [schema/types/TerminationWindow](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/TerminationWindow)

- **Type - Vesting Condition**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingCondition.schema.json`
  - **Description:** Describes condition / triggers to be satisfied for vesting to occur
  - **View more:** [schema/types/vesting/VestingCondition](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingCondition)

- **Type - Vesting Condition Portion**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingConditionPortion.schema.json`
  - **Description:** Describes a fractional portion (ratio) of shares associated with a Vesting Condition
  - **View more:** [schema/types/vesting/VestingConditionPortion](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingConditionPortion)

- **Type - Vesting Event Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingEventTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied when a particular unscheduled event occurs
  - **View more:** [schema/types/vesting/VestingEventTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingEventTrigger)

- **Type - Vesting Period in Days**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingPeriodInDays.schema.json`
  - **Description:** Describes a period of time expressed in days (e.g. 365 days) for use in Vesting Terms
  - **View more:** [schema/types/vesting/VestingPeriodInDays](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingPeriodInDays)

- **Type - Vesting Period in Months**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingPeriodInMonths.schema.json`
  - **Description:** Describes a period of time expressed in months (e.g. 3 months) for use in Vesting Terms.
  - **View more:** [schema/types/vesting/VestingPeriodInMonths](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingPeriodInMonths)

- **Type - Vesting Schedule Absolute Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied on an absolute date.
  - **View more:** [schema/types/vesting/VestingScheduleAbsoluteTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingScheduleAbsoluteTrigger)

- **Type - Vesting Schedule Relative Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleRelativeTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied when a period of time, relative to another vesting condition, has elapsed.
  - **View more:** [schema/types/vesting/VestingScheduleRelativeTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingScheduleRelativeTrigger)

- **Type - Vesting Start Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/vesting/VestingStartTrigger.schema.json`
  - **Description:** Describes a vesting condition satisfied at the security's vesting commencement date
  - **View more:** [schema/types/vesting/VestingStartTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/vesting/VestingStartTrigger)

- **Type - Automatic Conversion on Condition Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json`
  - **Description:** Type representation of automatic trigger on a tive or condition.
  - **View more:** [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger)

- **Type - Automatic Conversion on Date Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/AutomaticConversionOnDateTrigger.schema.json`
  - **Description:** Type representation of an automatic trigger on a date.
  - **View more:** [schema/types/conversion_triggers/AutomaticConversionOnDateTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/AutomaticConversionOnDateTrigger)

- **Type - Elective Conversion At Will**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json`
  - **Description:** Type representation of elective trigger valid at will (so long as instrument is valid and outstanding).
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger)

- **Type - Elective Conversion In Date Range Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger.schema.json`
  - **Description:** Type representation of elective trigger valid on or after start_date and until or before end_date.
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger)

- **Type - Elective Conversion on Condition Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.schema.json`
  - **Description:** Type representation of elective trigger on fulfillment of a condition.
  - **View more:** [schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger)

- **Type - Unspecified Conversion Trigger**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_triggers/UnspecifiedConversionTrigger.schema.json`
  - **Description:** Use this where no structured data is available regarding what triggers the conversion of a given security.
  - **View more:** [schema/types/conversion_triggers/UnspecifiedConversionTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_triggers/UnspecifiedConversionTrigger)

- **Type - Convertible Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/ConvertibleConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from a convertible into another non-plan security
  - **View more:** [schema/types/conversion_rights/ConvertibleConversionRight](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_rights/ConvertibleConversionRight)

- **Type - Stock Class Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/StockClassConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from one Stock Class into another Stock Class
  - **View more:** [schema/types/conversion_rights/StockClassConversionRight](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_rights/StockClassConversionRight)

- **Type - Warrant Conversion Rights**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_rights/WarrantConversionRight.schema.json`
  - **Description:** Type representation of a conversion right from a convertible into another non-plan security
  - **View more:** [schema/types/conversion_rights/WarrantConversionRight](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_rights/WarrantConversionRight)

- **Conversion Mechanism - Custom**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a custom conversion, a conversion type that cannot be accurately modelled with any other OCF conversion mechanism type
  - **View more:** [schema/types/conversion_mechanisms/CustomConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/CustomConversionMechanism)

- **Conversion Mechanism - Fixed Amount**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json`
  - **Description:** Describes how a security converts into a fixed amount of a stock class
  - **View more:** [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/FixedAmountConversionMechanism)

- **Conversion Mechanism - Note**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/NoteConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a convertible note
  - **View more:** [schema/types/conversion_mechanisms/NoteConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/NoteConversionMechanism)

- **Conversion Mechanism - Percent of Capitalization**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of percent of capitalization conversion (where an instrument purports to grant a percent of company capitalization at some point in time)
  - **View more:** [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism)

- **Conversion Mechanism - Ratio**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a ratio conversion (primarily used to describe conversion from one stock class (e.g. Preferred) into another (e.g. Common)
  - **View more:** [schema/types/conversion_mechanisms/RatioConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/RatioConversionMechanism)

- **Conversion Mechanism - SAFE**

  - **Id:** `https://opencaptablecoalition.com/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json`
  - **Description:** Sets forth inputs and conversion mechanism of a SAFE (mirrors the flavors and inputs of the Y Combinator SAFE)
  - **View more:** [schema/types/conversion_mechanisms/SAFEConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/SAFEConversionMechanism)

### [Primitives](/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._

- **Primitive - Vesting Condition Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/vesting/VestingConditionTrigger.schema.json`
  - **Description:** Abstract type describing fields needed in all triggers types, with a 'trigger' being a condition that must be satisfied for a VestingCondition to be met
  - **View more:** [schema/primitives/types/vesting/VestingConditionTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/types/vesting/VestingConditionTrigger)

- **Primitive - Vesting Period Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/vesting/VestingPeriod.schema.json`
  - **Description:** Abstract type describing the fields common to all periods of time (e.g. 3 months, 365 days) for use in Vesting Terms
  - **View more:** [schema/primitives/types/vesting/VestingPeriod](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/types/vesting/VestingPeriod)

- **Primitive - Conversion Trigger Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_triggers/ConversionTrigger.schema.json`
  - **Description:** Abstract type representation of required fields require for conversion rights types.
  - **View more:** [schema/primitives/types/conversion_triggers/ConversionTrigger](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/types/conversion_triggers/ConversionTrigger)

- **Primitive - Conversion Right Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_rights/ConversionRight.schema.json`
  - **Description:** Abstract type representation of a conversion right from a non-plan security into another non-plan security
  - **View more:** [schema/primitives/types/conversion_rights/ConversionRight](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/types/conversion_rights/ConversionRight)

- **Primitive - Conversion Mechanism Type**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/types/conversion_mechanisms/ConversionMechanism.schema.json`
  - **Description:** Abstract type setting forth required field(s) for ALL conversion mechanism types
  - **View more:** [schema/primitives/types/conversion_mechanisms/ConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/types/conversion_mechanisms/ConversionMechanism)

- **Primitive - Object**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/Object.schema.json`
  - **Description:** Abstract object to be extended by all other objects
  - **View more:** [schema/primitives/objects/Object](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/Object)

- **Primitive - Security Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/SecurityTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that deal with individual securities
  - **View more:** [schema/primitives/objects/transactions/SecurityTransaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/SecurityTransaction)

- **Primitive - Stock Class Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/StockClassTransaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all transaction objects that affect the stock class
  - **View more:** [schema/primitives/objects/transactions/StockClassTransaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/StockClassTransaction)

- **Primitive - Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/Transaction.schema.json`
  - **Description:** Abstract transaction object to be extended by all other transaction objects
  - **View more:** [schema/primitives/objects/transactions/Transaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/Transaction)

- **Primitive - Security Transfer Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/transfer/Transfer.schema.json`
  - **Description:** Abstract object describing a security transfer or secondary sale transaction
  - **View more:** [schema/primitives/objects/transactions/transfer/Transfer](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/transfer/Transfer)

- **Primitive - Security Retraction Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/retraction/Retraction.schema.json`
  - **Description:** Abstract object describing a security retraction transaction
  - **View more:** [schema/primitives/objects/transactions/retraction/Retraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/retraction/Retraction)

- **Primitive - Security Repurchase Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json`
  - **Description:** Abstract object describing common properties to a repurchase transaction
  - **View more:** [schema/primitives/objects/transactions/repurchase/Repurchase](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/repurchase/Repurchase)

- **Primitive - Security Release Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/release/Release.schema.json`
  - **Description:** Abstract object describing fields common to all release transaction objects
  - **View more:** [schema/primitives/objects/transactions/release/Release](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/release/Release)

- **Primitive - Security Reissuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/reissuance/Reissuance.schema.json`
  - **Description:** Abstract object describing common properties to a reissuance of a security
  - **View more:** [schema/primitives/objects/transactions/reissuance/Reissuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/reissuance/Reissuance)

- **Primitive - Security Issuance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/issuance/Issuance.schema.json`
  - **Description:** Abstract object describing fields common to all issuance objects
  - **View more:** [schema/primitives/objects/transactions/issuance/Issuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/issuance/Issuance)

- **Primitive - Security Exercise Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/exercise/Exercise.schema.json`
  - **Description:** Abstract object describing fields common to all exercise transaction objects
  - **View more:** [schema/primitives/objects/transactions/exercise/Exercise](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/exercise/Exercise)

- **Primitive - Security Conversion Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/conversion/Conversion.schema.json`
  - **Description:** Abstract object describing fields common to all conversion transaction objects
  - **View more:** [schema/primitives/objects/transactions/conversion/Conversion](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/conversion/Conversion)

- **Primitive - Security Cancellation Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/cancellation/Cancellation.schema.json`
  - **Description:** Abstract object describing fields common to all cancellation transaction objects
  - **View more:** [schema/primitives/objects/transactions/cancellation/Cancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/cancellation/Cancellation)

- **Primitive - Security Acceptance Transaction**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/objects/transactions/acceptance/Acceptance.schema.json`
  - **Description:** Abstract object describing a security acceptance transaction
  - **View more:** [schema/primitives/objects/transactions/acceptance/Acceptance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/acceptance/Acceptance)

- **Object - File**

  - **Id:** `https://opencaptablecoalition.com/schema/primitives/files/File.schema.json`
  - **Description:** Abstract file to be extended by all other files
  - **View more:** [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

## Developer Information

### Format

- We use [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) for maximum compatibility with
  JSON Schema [implementations](https://protect-us.mimecast.com/s/bvw6ClYgmKf29D5ZHqNca4?domain=json-schema.org)

### Recommended Code Editor For Schema Files

- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter"

### Development Environment Setup

This repo requires Prettier to be run on all files. Run `npm install` to install dev dependencies and Prettier will automatically run pre-commit.

### OCF Types vs OCF Objects

You may notice this distinction in our repo organization, yet both OCF Types and OCF Objects are commonly JSONSchema `object` types (basically meaning they are JSONs).

- An **OCF Object** is a schema with a JSONSchema types of `object` that MUST have a unique Id field in each instance of its schema.

- An **OCF Type** is meant to describe a specific data type that is does not have a unique ID and will be nested somewhere within an OCF Object. These usually have a JSONSchema type of `object`, but they can also be JSONSchema primitives like strings, numbers, etc. that have specific validation rules (e.g. a regex pattern). They do **not** have unique IDs.

### OCF Schemas Rely Heavily on Object Composition Patterns

In order to improve code quality, reduce repetition and provide for a better developer experience, OCF schemas rely
heavily on [object composition](https://en.wikipedia.org/wiki/Object_composition). In the
[primitives folder](/schema/primitives), you'll see a folder structure that mirrors the overall `/schema` folder. Where a number of related OCF Objects or OCF Types share properties, we create a "primitive" object in this primitives folder. This primitive's path in the primitives folder must mirror the path to the OCF Object(s) or OCF Type(s) composed from it. We incorporate the properties in these primitives
into OCF objects by using the JSONSchema [allOf](https://json-schema.org/understanding-json-schema/reference/combining.html)
property.

Where there are different "flavors" of a given primitive - e.g. the primitive `ConversionRight` is composed into OCF Types of `ConvertibleConversionRight`, a `StockClassConversionRight` or a `WarrantConversionRight` - the final OCF Types / Objects must have a `type` that holds the specific flavors type enumeration - e.g. `STOCK_CLASS_CONVERSION_RIGHT` for `StockClassConversionRight`. This avoids validation problems where two flavors must have identical properties but different allowable property values.

**Here are a couple of concrete object composition examples:**

1. The `ConversionTrigger` OCF Types like `AutomaticConversionOnConditionTrigger` and `ElectiveConversionOnConditionTrigger` are all composed from `ConversionTrigger`. The primitive can be found at [/schema/primitives/types/conversion_triggers/](/schema/primitives/types/conversion_triggers/) while the OCF Types composed from this primitive can be found in [/schema/types/conversion_triggers/](/schema/types/conversion_triggers/) [objects folder](/schema/objects).
2. All OCF Objects must be composed of the [Object](/schema/primitives/objects/Object.schema.json) which ensures there is a required object id field on all OCF Objects. This can be found in `/schema/primitives/objects` as all objects in the `/schema/objects` folder will incorporate its properties.
3. All of our transaction events must have properties listed in the
   [Transaction](/schema/primitives/transactions/Transaction.schema.json) schema. Then, different groups of
   transaction events share some common properties, and these are enforced by incorporating more specific primitives -
   e.g. all issues (whether of stock, plan securities, warrants or convertibles) must incorporate the properties set
   forth in [Acceptance](/schema/primitives/transactions/acceptance/Acceptance.schema.json) _in addition to the
   properties in Transaction_.

### What's with the empty properties (e.g. {}) in your schemas?

You'll notice that _required_ OCF type and object properties that are incorporated via [object composition](###schema-composition-explained)
have empty objects as their schema values in the OCF object schemas (i.e. `"id": {}`). This is due to how JSONSchema validators
interact with the "required" property. If validators don't find a required property in an object schema, even if it's one of the
primitives the object is composed of, most (all?) JSONSchema validators will throw an error. As a result, we need to
add required, "inherited" properties to the final OCF object schemas. They don't actually need to be redefined, however,
so we just assign these repeat properties a value of {} in the schema as JSONSchema validators _can_ import the property
details via allOf. Our documentation generator looks back to the full details of the property from the inherited schemas,
however, and the documentation shows the full property details inherited from the primitives. Unless you're developing
OCF schemas, these implementation details probably won't matter to you, and you can rely on our documentation for
definitive documentation of the necessary properties and all details thereof.

### Don't Add Additional Properties to OCF

You may notice that the primitive schemas do not prevent the inclusion of additional properties, whereas all OCF Types and OCF Objects that are also JSONSchema `objects` (basically anything that's not just an enum or primitive data type with validation check) have `additionalProperties`: `false` to prevent the inclusion of additional properties. This is due to primitives not being meant for use by consumers of the OCF standard. As we build more complex objects from primitives, we need to allow the primitive to have the additional properties required by the final OCF Objects and Types or else you'd get validation errors. We do not want the OCF Types and OCF Objects that are meant for use by the community to have additional properties, however, as we want to avoid situations where third-parties implementing OCF add custom or undocumented fields and types. This could cause unanticipated compatibility issues and collisions with future versions of OCF, if, for example, a popular implementation of OCF used a custom property with a name that we later want to add to to the official standard.

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

Please see the Open Cap Table Coalition Website or our GitHub Code Contributors List.
