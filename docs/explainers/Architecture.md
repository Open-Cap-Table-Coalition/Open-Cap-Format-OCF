# OCF Architecture

_OCF is designed to be extremely expressive and extensible. Pay particular attention to vesting and conversion, which have both been designed to support the types of complex, bespoke vesting and conversion conditions commonly found on attorney-drafted options and convertibles yet are (today) challenging to model in a structured format_

## Event-Driven

OCF is powered by an event-driven architecture. All Stocks, Plan Securities, Warrants and Convertibles have
object-specific events that are added to an event "stack" to represent the history of that security. These events
describe the relevant data needed to describe key events such as issuances, transfers, conversions, etc. You can
see a full list of event transactions supported in our [transactions schemas folder](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/objects/transactions).

Here's an example of how an event stack would work to track the lifecycle of a single issuance of preferred stock:

![](../images/Transaction%20Stack%20Animation.gif)

## Conversions

The conversion of one OCF security into another is modeled using three key concepts which describe how, when and into what a convertible security converts into:

1. [Conversion Right](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_rights): what can the security convert into?
2. [Conversion Trigger](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_triggers): when and under what conditions does the Conversion Right come into effect?
3. [Conversion Mechanism](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_mechanisms): how is the coversion amount calculated?

We use the same design patterns for convertible stock (e.g. preferred stock converting into common), warrants (which don't "convert" but can be "exercised") and convertible securities (e.g. notes).

Let's illustrate the design pattern using a convertible note as an example:

![](../images/OCF%20Conversion%20Diagram.png)

And here's what some sample data looks like in practice:

![](../images/OCF%20Conversion%20Example.png)

## Lossless Vesting

Our vesting data model supports arbitrarily-complex trees of dependent vesting conditions that can mix time-based and event-based vesting (e.g. vesting over time and "milestone" vesting, in any execution order with any desired dependencies). We are working on more comprehensive documentation for these concepts. In the meantime, please review the [vesting terms object](../schema_markdown/schema/objects/VestingTerms.md) (essentially a "vesting schedule"). the vesting OCF Types in [/schema/types/vesting](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/vesting), and the vesting events in [/schema/objects/transactions/vesting](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/objects/transactions/vesting) (which are used to indicate when a given vesting schedule starts for a given security and when a milestone-based condition is satisfied).

You can see example vesting schedules in our samples.

Stay tuned for expanded documentation!

## OCF File Type

OCF is a multi-file format designed to make it easy to split, compress or stream company capitalization tables.
A valid OCF cap table is made up of JSON objects that match the schemas available in our repo in
the schemas folder.

OCF objects are grouped and stored in eight file types (defined in our file schemas folder.

_There are currently 8 file types that make up a cap table_:

1. [A Manifest File](../schema_markdown/schema/files/OCFManifestFile.md) - The manifest holds basic issuer information and
   references to the instances of the other 7 file types needed to represent a company's capitalization history.
2. [Stakeholders File(s)](../schema_markdown/schema/files/StakeholdersFile.md) - One or more files listing all stakeholders
   of the Company. Stakeholder types are enumerated in our standard, and we welcome comments on how to categorize
   stakeholders.
3. [Stock Classes File(s)](../schema_markdown/schema/files/StockClassesFile.md) - One or more files listing all classes /
   series of stock issued by the issuer.
4. [Stock Legend Templates File(s)](../schema_markdown/schema/files/StockLegendTemplatesFile.md) - One or more files storing the
   legends used by the issuer.
5. [Stock Plans File(s)](../schema_markdown/schema/files/StockPlansFile.md) - One or more files storing the issuer's stock plans
   and related information.
6. [Transactions File(s)](../schema_markdown/schema/files/TransactionsFile.md) - One or more files storing the transactions for
   the issuers. Any of our transaction event objects are supported.
7. [Valuations File(s)](../schema_markdown/schema/files/ValuationsFile.md) - One or more files storing valuations for the issuer.
8. [Vesting Terms File(s)](../schema_markdown/schema/files/VestingTermsFile.md) - One or more files storing vesting
   schedules used by the issuer.

**At the moment, we recommend combining all of these files into a single compressed file with a \*.ocf.zip extension:**

![](../images/OCF%20Container.png)

We are working on sample tooling to interact with compressed \*.ocf.zip files.

**You can also break out the various OCF Types and OCF Objects and make those available separately via API or other, suitable mechanism. The key part of OCF is the data structure, not the container itself, though, to ensure complete cap table integrity, a full cap table export is recommended.**
