# Open-Cap-Format-OCF

Data Schema and Specification for Open Cap Format (OCF)

## Schema Development Info

### Proposed Format

- [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) for maximum compatibility with
  JSON Schema [implementations](https://protect-us.mimecast.com/s/bvw6ClYgmKf29D5ZHqNca4?domain=json-schema.org)

### Recommended Editor for the openapi.json file

- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter"

### Developing

This repo requires Prettier to be run on all files. Run `npm install` to install dev dependencies and Prettier will automatically run pre-commit.

### Schema Organization

- [Full documentation](docs/README.md) is available in the docs folder. Most of the documentation is auto-generated and our toolchain is still being refined, so expect the layout to change and pardon any inconsistencies.
- Schemas divided into three folders

1. `objects` describing the structure of OCF -- these contain the common object properties `id` and `comments`

   | Object                                     | Type                                  | Description                                                                                   |
   | :----------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------- |
   | [Convertible](docs/convertible-1.md)       | `Objects.Convertible.schema.json`     | Object describing convertible instrument issued by the issuer and held by a stakeholder       |
   | [Issuer](docs/issuer.md)                   | `Objects.Issuer.schema.json`          | Object describing the issuer of the cap table                                                 |
   | [PlanSecurities](docs/plansecurities.md)   | `Objects.PlanSecurities.schema.json`  | Object describing securities issued from a StockPlan by the issuer and held by a stakeholder  |
   | [Stakeholder](docs/stakeholder-1.md)       | `Objects.Stakeholder.schema.json`     | Object describing a stakeholder of the issuer                                                 |
   | [Stock](docs/stock.md)                     | `Objects.Stock.schema.json`           | Object describing stock issued by the issuer and held by a stakeholder                        |
   | [StockClass](docs/stockclass-1.md)         | `Objects.StockClass.schema.json`      | Object describing a type of stock class issued by the issuer                                  |
   | [StockPlan](docs/stockplan.md)             | `Objects.StockPlan.schema.json`       | Object describing a plan which stock options are issued from                                  |
   | [Valuation](docs/valuation-1.md)           | `Objects.Valuation.schema.json`       | Object describing a valuation used in the cap table                                           |
   | [VestingSchedule](docs/vestingschedule.md) | `Objects.VestingSchedule.schema.json` | Object describing a strictly time-based vesting schedule which can be re-used accross objects |
   | [Warrant](docs/warrant.md)                 | `Objects.Warrants.schema.json`        | Object describing warrants issued by the issuer and held by a stakeholder                     |

2. `enums` definitions

   | Enumeration                                                | Type                                  | Description                                                                   |
   | :--------------------------------------------------------- | :------------------------------------ | :---------------------------------------------------------------------------- |
   | [AccrualPeriod Types](docs/accrualperiod.md)               | `Enums.AccrualPeriod.schema.json`     | Enumeration of interest accrual period type                                   |
   | [Address Types](docs/address.md)                           | `Enums.Address.schema.json`           | Enumeration of address types                                                  |
   | [AllocationType](docs/allocationtype.md)                   | `Enums.AllocationType.schema.json`    | Enumeration of allocation types for vesting schedules                         |
   | [Compensation Type](docs/compensation.md)                  | `Enums.Compensation.schema.json`      | Enumeration of stock compensation types                                       |
   | [Compounding Type](docs/compounding.md)                    | `Enums.Compounding.schema.json`       | Enumeration of interest compounding type                                      |
   | [Convertible Conversion Type](docs/conversion.md)          | `Enums.Conversion.schema.json`        | Enumeration of convertible conversion type                                    |
   | [Convertible Type](docs/convertible.md)                    | `Enums.Convertible.schema.json`       | Enumeration of convertible instrument types                                   |
   | [DayCount Type](docs/daycount.md)                          | `Enums.DayCount.schema.json`          | Enumeration of how the number of days are determined per period               |
   | [Email Type](docs/email.md)                                | `Enums.Email.schema.json`             | Enumeration of email types                                                    |
   | [InterestPayout Type](docs/interestpayout.md)              | `Enums.InterestPayout.schema.json`    | Enumeration of type of interest payout                                        |
   | [Option Type](docs/option.md)                              | `Enums.Option.schema.json`            | Enumeration of option types                                                   |
   | [Parent Stock Type](docs/parent.md)                        | `Enums.Parent.schema.json`            | Enumeration of parent stock types                                             |
   | [PhoneNumber Type](docs/phonenumber.md)                    | `Enums.PhoneNumber.schema.json`       | Enumeration of phone number types                                             |
   | [Rounding Type](docs/rounding.md)                          | `Enums.Rounding.schema.json`          | Enumeration of rounding types                                                 |
   | [Stakeholder Type](docs/stakeholder.md)                    | `Enums.Stakeholder.schema.json`       | Enumeration of stakeholder types - individual (human) or institution (entity) |
   | [StockClass Type](docs/stockclass.md)                      | `Enums.Stockclass.schema.json`        | Enumeration of stockclass types                                               |
   | [TerminationWindow.schema.json](docs/terminationwindow.md) | `Enums.TerminationWindow.schema.json` | Enumeration of TerminationWindow types                                        |
   | [Time Period Type](docs/period.md)                         | `Enums.Period.schema.json`            | Enumeration of time period types                                              |
   | [Valuation Type](docs/valuation.md)                        | `Enums.Valuation.schema.json`         | Enumeration of valuation types                                                |

3. `types` used as common building blocks

   | Types                                                                       | Type                                               | Description                                                                                                                                                        |
   | :-------------------------------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | [Address](docs/address-1.md)                                                | `Types.Address.schema.json`                        | Type representation of an address as an object                                                                                                                     |
   | [ContactInfo](docs/contactinfo.md)                                          | `Types.ContactInfo.schema.json`                    | Type representation of a primary contact person for a stakeholder                                                                                                  |
   | [ConversionTrigger](docs/conversiontrigger.md)                              | `Types.ConversionTrigger.schema.json`              | Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)                                    |
   | [Custom Vesting Tranche](docs/customvestingtranche.md)                      | `Types.CustomVestingTranche.schema.json`           | Type representation of an vesting tranche by date and quantity                                                                                                     |
   | [DateTime](docs/datetime.md)                                                | `Types.DateTime.schema.json`                       | Type representing an instant in Universal Coordinated Time (UTC)                                                                                                   |
   | [Email](docs/email-1.md)                                                    | `Types.Email.schema.json`                          | Type representation of an email address                                                                                                                            |
   | [Event-driven Vesting Condition](docs/eventdrivenvestingcondition.md)       | `Types.EventDrivenVestingCondition.schema.json`    | Type representation of complex event-driven vesting criteria                                                                                                       |
   | [Money](docs/money.md)                                                      | `Types.Money.schema.json`                          | Type representing a monetary value in a specified currency code                                                                                                    |
   | [Name](docs/name.md)                                                        | `Types.Name.schema.json`                           | Type comprising of multiple name components                                                                                                                        |
   | [Numeric](docs/numeric.md)                                                  | `Types.Numeric.schema.json`                        | Type representation of a number (up to 10 decimal places supported by the spec)                                                                                    |
   | [PhoneNumber](docs/phone.md)                                                | `Types.PhoneNumber.schema.json`                    | Type representation of a phone number                                                                                                                              |
   | [Ratio](docs/ratio.md)                                                      | `Types.Ratio.schema.json`                          | Type representation of a ratio as antecedent and consequent numeric values                                                                                         |
   | [Schedule-driven Vesting Condition](docs/scheduledrivenvestingcondition.md) | `Types.ScheduleDrivenVestingCondition.schema.json` | Type representation of a row in a vesting schedule                                                                                                                 |
   | [SecurityExemption](docs/securityexemption.md)                              | `Types.SecurityExemption.schema.json`              | Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis |
   | [StockClassConversionRights](docs/stockclassconversionrights.md)            | `Types.StockClassConversionRights.schema.json`     | Type representation of a stock class or series conversion rights into another stock class or series as an object                                                   |
   | [StockParent](docs/stockparent.md)                                          | `Types.StockParent.schema.json`                    | Type representation of the parent security of a given stock issuance                                                                                               |
   | [TaxID](docs/taxid.md)                                                      | `Types.TaxID.schema.json`                          | Type representation of a government identifier for tax purposes                                                                                                    |
   | [TerminationWindow](docs/terminationwindow-1.md)                            | `Types.TerminationWindow.schema.json`              | Type representation of a termination window as an object                                                                                                           |
   | [Vesting](docs/vesting.md)                                                  | `Types.Vesting.schema.json`                        | Type representing all aspects related to vesting securities                                                                                                        |

_Documentation automatically generated with [jsonschema2md](https://github.com/adobe/jsonschema2md)_

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
