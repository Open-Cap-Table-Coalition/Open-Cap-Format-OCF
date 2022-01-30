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

If you would like to suggest a bug-fix or correction to the existing spec, please go head and submit a pull request
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

{{ files_toc }}

### [Objects](/schema/objects)

_Describing the structure of OCF -- these contain the common object properties `id` and `comments`_

{{ objects_toc }}

### [Enums](/schema/enums)

_Key enumerations used throughout the schemas_

{{ enums_toc }}

### [Types](/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._

{{ types_toc }}

### [Primitives](/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._

{{ primitives_toc }}

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
