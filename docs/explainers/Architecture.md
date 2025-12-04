# OCF Architecture

_OCF is designed to be extremely expressive and extensible. Pay particular attention to vesting and
conversion, which have both been designed to support the types of complex, bespoke vesting and
conversion conditions commonly found on attorney-drafted options and convertibles yet are (today)
challenging to model in a structured format_

## Event-Driven Architecture

OCF is powered by an **event-driven architecture**. All securities—Stocks, Plan Securities,
Warrants, and Convertibles—have object-specific transaction events that are added to an event
"stack" to represent the complete lifecycle history of that security. Each transaction event
describes the relevant data needed to capture key events such as issuances, transfers, conversions,
cancellations, and more.

Rather than storing mutable state, OCF creates an **immutable, auditable trail** of transactions
that can be traversed to determine the current state of any security at any point in time. You can
see a full list of transaction events supported in our
[transactions schemas folder](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/objects/transactions).

Here's an example of how an event stack would work to track the lifecycle of a single issuance of
preferred stock:

![](../images/Transaction%20Stack%20Animation.gif)

## Conversions

The conversion of one OCF security into another is modeled using **three key concepts** which
describe how, when, and into what a convertible security converts:

1. [Conversion Right](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_rights):
   **WHAT** can the security convert into?
2. [Conversion Trigger](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_triggers):
   **WHEN** and under what conditions does the Conversion Right come into effect?
3. [Conversion Mechanism](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_mechanisms):
   **HOW** is the conversion amount calculated?

This **separation of concerns** allows you to mix and match these components to model complex,
attorney-drafted conversion terms that would be difficult to express in traditional cap table
systems. We use the same design patterns for convertible stock (e.g. preferred stock converting into
common), warrants (which don't "convert" but can be "exercised"), and convertible securities (e.g.
notes and SAFEs).

Let's illustrate the design pattern using a convertible note as an example:

![](../images/OCF%20Conversion%20Diagram.png)

And here's what some sample data looks like in practice:

![](../images/OCF%20Conversion%20Example.png)

## Lossless Vesting

Our vesting data model supports **arbitrarily-complex directed graphs** of dependent vesting
conditions that can mix time-based and event-based vesting (e.g. vesting over time and "milestone"
vesting, in any execution order with any desired dependencies). Each vesting condition specifies:

-   A **trigger** (when the condition is met)
-   A **portion** or **quantity** (how much vests)
-   **Next condition IDs** (what can trigger next)

This graph structure allows OCF to model complex vesting schedules including cliffs, milestones,
performance-based vesting, and custom conditions that would be impossible to express in traditional
vesting schedule formats.

For detailed documentation and examples, please review:

-   The [vesting terms object](../schema_markdown/schema/objects/VestingTerms.md) (essentially a
    "vesting schedule")
-   The [VestingTerms explainer](./VestingTerms.md) with comprehensive examples
-   The vesting OCF Types in
    [/schema/types/vesting](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/vesting)
-   The vesting transaction events in
    [/schema/objects/transactions/vesting](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/objects/transactions/vesting)

You can also see example vesting schedules in our samples folder.

## OCF File Format

OCF is a **multi-file format** designed to make it easy to split, compress, or stream company
capitalization tables. A valid OCF cap table is made up of JSON objects that match the schemas
available in our repo in the `/schema` folder.

OCF objects are grouped and stored in file types defined in our
[file schemas folder](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/files).

_There are currently 10 file types that make up a complete cap table_:

1. [A Manifest File](../schema_markdown/schema/files/OCFManifestFile.md) - The manifest holds basic
   issuer information and references to the instances of the other 7 file types needed to represent
   a company's capitalization history.
2. [Stakeholders File(s)](../schema_markdown/schema/files/StakeholdersFile.md) - One or more files
   listing all stakeholders of the Company. Stakeholder types are enumerated in our standard, and we
   welcome comments on how to categorize stakeholders.
3. [Stock Classes File(s)](../schema_markdown/schema/files/StockClassesFile.md) - One or more files
   listing all classes / series of stock issued by the issuer.
4. [Stock Legend Templates File(s)](../schema_markdown/schema/files/StockLegendTemplatesFile.md) -
   One or more files storing the legends used by the issuer.
5. [Stock Plans File(s)](../schema_markdown/schema/files/StockPlansFile.md) - One or more files
   storing the issuer's stock plans and related information.
6. [Transactions File(s)](../schema_markdown/schema/files/TransactionsFile.md) - One or more files
   storing the transactions for the issuers. Any of our transaction event objects are supported.
7. [Valuations File(s)](../schema_markdown/schema/files/ValuationsFile.md) - One or more files
   storing valuations for the issuer.
8. [Vesting Terms File(s)](../schema_markdown/schema/files/VestingTermsFile.md) - One or more files
   storing vesting schedules used by the issuer.
9. [Financings File(s)](../schema_markdown/schema/files/FinancingsFile.md) - One or more files
   storing the issuer's financing events.
10. [Documents File(s)](../schema_markdown/schema/files/DocumentsFile.md) - One or more files
    storing references to related stakeholder documents, either via path referring to a location
    within an associated ZIP archive (packaged separately from the OCF archive), or via a uniform
    resource identifier (URI).

### OCF Container Format

**We recommend combining all of these files into a single compressed archive with a `*.ocf.zip`
extension:**

![](../images/OCF%20Container.png)

This approach provides:

-   **Portability**: A single file contains the complete cap table
-   **Integrity**: The manifest's MD5 checksums ensure file integrity
-   **Compression**: Reduces storage and transfer size

We are working on sample tooling to interact with compressed `*.ocf.zip` files.

### Alternative Delivery Methods

**You can also make OCF data available via API or other mechanisms.** The key part of OCF is the
**data structure**, not the container itself. However, to ensure complete cap table integrity and
enable full auditing capabilities, we recommend providing a mechanism to export a complete cap table
snapshot that includes all file types referenced in the manifest.
