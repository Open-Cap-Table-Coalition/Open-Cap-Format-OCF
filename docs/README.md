# README

## Top-level Schemas

- [Cap Table ("Snapshot")](./captable.md "Top-level object describing a capitalization table") – `CapTable.schema.json`

- [Enum - AccrualPeriod Types](./accrualperiod.md "Enumeration of interest accrual period type") – `Enums.AccrualPeriod.schema.json`

- [Enum - Address Types](./address.md "Enumeration of address types") – `Enums.Address.schema.json`

- [Enum - AllocationType](./allocationtype.md "Enumeration of allocation types for vesting schedules") – `Enums.AllocationType.schema.json`

- [Enum - Compensation Type](./compensation.md "Enumeration of stock compensation types") – `Enums.Compensation.schema.json`

- [Enum - Compounding Type](./compounding.md "Enumeration of interest compounding type") – `Enums.Compounding.schema.json`

- [Enum - Convertible Conversion Type](./conversion.md "Enumeration of convertible conversion type") – `Enums.Conversion.schema.json`

- [Enum - Convertible Type](./convertible.md "Enumeration of convertible instrument types") – `Enums.Convertible.schema.json`

- [Enum - DayCount Type](./daycount.md "Enumeration of how the number of days are determined per period") – `Enums.DayCount.schema.json`

- [Enum - Email Type](./email.md "Enumeration of email types") – `Enums.Email.schema.json`

- [Enum - InterestPayout Type](./interestpayout.md "Enumeration of type of interest payout (e") – `Enums.InterestPayout.schema.json`

- [Enum - Option Type](./option.md "Enumeration of option types") – `Enums.Option.schema.json`

- [Enum - Parent Stock Type](./parent.md "Enumeration of parent sources a stock can be issued or created from") – `Enums.Parent.schema.json`

- [Enum - PhoneNumber Type](./phonenumber.md "Enumeration of phone number types") – `Enums.PhoneNumber.schema.json`

- [Enum - Relationships between stakeholder and issuer](./stakeholderrelationship.md "Enumeration of types of relationships") – `Enums.StakeholderRelationship.schema.json`

- [Enum - Rounding Type](./rounding.md "Enumeration of rounding types") – `Enums.Rounding.schema.json`

- [Enum - Stakeholder Type](./stakeholder.md "Enumeration of stakeholder types - individual (human) or institution (entity)") – `Enums.Stakeholder.schema.json`

- [Enum - StockClass Type](./stockclass.md "Enumeration of stockclass types") – `Enums.StockClass.schema.json`

- [Enum - TerminationWindow.schema.json](./terminationwindow.md "Enumeration of TerminationWindow types") – `Enums.TerminationWindow.schema.json`

- [Enum - Time Period Type](./period.md "Enumeration of time period types") – `Enums.Period.schema.json`

- [Enum - Valuation Type](./valuation.md "Enumeration of valuation types") – `Enums.Valuation.schema.json`

- [Enum - Vesting Type](./vesting.md "Enumeration of vesting types") – `Enums.Vesting.schema.json`

- [Object - Convertible](./convertible-1.md "Object describing convertible instrument issued by the issuer and held by a stakeholder") – `Objects.Convertible.schema.json`

- [Object - Issuer](./issuer.md "Object describing the issuer of the cap table") – `Objects.Issuer.schema.json`

- [Object - PlanSecurities](./plansecurities.md "Object describing securities issued from a plan by the issuer and held by a stakeholder") – `Objects.PlanSecurities.schema.json`

- [Object - Stakeholder](./stakeholder-1.md "Object describing a stakeholder") – `Objects.Stakeholder.schema.json`

- [Object - Stock](./stock.md "Object describing stock issued by the issuer and held by a stakeholder") – `Objects.Stock.schema.json`

- [Object - StockClass](./stockclass-1.md "Object describing a type of stock class issued by the issuer") – `Objects.StockClass.schema.json`

- [Object - StockLegendTemplate](./stocklegendtemplate.md "Object describing a stock legend template") – `Objects.StockLegendTemplate.schema.json`

- [Object - StockPlan](./stockplan.md "Object describing a plan which stock options are issued from") – `Objects.StockPlan.schema.json`

- [Object - Valuation](./valuation-1.md "Object describing a valuation used in the cap table") – `Objects.Valuation.schema.json`

- [Object - VestingSchedule](./vestingschedule.md "Object describing a strictly time-based vesting schedule") – `Objects.VestingSchedule.schema.json`

- [Object - Warrant](./warrant.md "Object describing warrants issued by the issuer and held by a stakeholder") – `Objects.Warrant.schema.json`

- [Type - Address](./address-1.md "Type representation of an address as an object") – `Types.Address.schema.json`

- [Type - ContactInfo](./contactinfo.md "Type representation of a primary contact person for a stakeholder (e") – `Types.ContactInfo.schema.json`

- [Type - ConversionTrigger](./conversiontrigger.md "Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)") – `Types.ConversionTrigger.schema.json`

- [Type - Custom Vesting Tranche](./customvestingtranche.md "Type representation of an vesting tranche by date and quantity") – `Types.CustomVestingTranche.schema.json`

- [Type - DateTime](./datetime.md "Type representing an instant in Universal Coordinated Time (UTC)") – `Types.DateTime.schema.json`

- [Type - Email](./email-1.md "Type representation of an email address") – `Types.Email.schema.json`

- [Type - Event-driven Vesting Condition](./eventdrivenvestingcondition.md "Type representation of complex event-driven vesting criteria") – `Types.EventDrivenVestingCondition.schema.json`

- [Type - Money](./money.md "Type representing a monetary value in a specified currency code") – `Types.Money.schema.json`

- [Type - Name](./name.md "Type comprising of multiple name components") – `Types.Name.schema.json`

- [Type - Numeric](./numeric.md "Type representation of a number (up to 10 decimal places supported by the spec)") – `Types.Numeric.schema.json`

- [Type - PhoneNumber](./phonenumber-1.md "Type representation of a phone number") – `Types.PhoneNumber.schema.json`

- [Type - Ratio](./ratio.md "Type representation of a ratio as antecedent and consequent numeric values") – `Types.Ratio.schema.json`

- [Type - Schedule-driven Vesting Condition](./scheduledrivenvestingcondition.md "Type representation of a row in a vesting schedule") – `Types.ScheduleDrivenVestingCondition.schema.json`

- [Type - SecurityExemption](./securityexemption.md "Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis") – `Types.SecurityExemption.schema.json`

- [Type - StockClassConversionRights](./stockclassconversionrights.md "Type representation of a conversion right from one security into a StockClass") – `Types.StockClassConversionRights.schema.json`

- [Type - StockParent](./stockparent.md "Type representation of the parent security of a given stock issuance (e") – `Types.StockParent.schema.json`

- [Type - TaxID](./taxid.md "Type representation of a government identifier for tax purposes (e") – `Types.TaxID.schema.json`

- [Type - TerminationWindow](./terminationwindow-1.md "Type representation of a termination window as an object") – `Types.TerminationWindow.schema.json`

- [Type - Vesting](./vesting-1.md "Type representing all aspects related to vesting securities") – `Types.Vesting.schema.json`

## Other Schemas

### Objects

### Arrays

- [CapTable - Objects.Convertible.schema.json Array](./captable-properties-captable---objectsconvertibleschemajson-array.md "List of convertibles for the cap table") – `CapTable.schema.json#/properties/convertibles`

- [CapTable - Objects.PlanSecurities.schema.json Array](./captable-properties-captable---objectsplansecuritiesschemajson-array.md "List of plan securities for the cap table") – `CapTable.schema.json#/properties/plan_securities`

- [CapTable - Objects.Stakeholder.schema.json Array](./captable-properties-captable---objectsstakeholderschemajson-array.md "List of stakeholders for the cap table") – `CapTable.schema.json#/properties/stakeholders`

- [CapTable - Objects.Stock.schema.json Array](./captable-properties-captable---objectsstockschemajson-array.md "List of stock issuances (Stock) for the cap table") – `CapTable.schema.json#/properties/stock`

- [CapTable - Objects.StockClass.schema.json Array](./captable-properties-captable---objectsstockclassschemajson-array.md "List of StockClasses authorized for the issuer") – `CapTable.schema.json#/properties/stockclasses`

- [CapTable - Objects.StockLegendTemplates.schema.json Array](./captable-properties-captable---objectsstocklegendtemplatesschemajson-array.md "List of stock legend templates for the cap table") – `CapTable.schema.json#/properties/stock_legend_templates`

- [CapTable - Objects.StockPlan.schema.json Array](./captable-properties-captable---objectsstockplanschemajson-array.md "List of issued stock plans for the cap table") – `CapTable.schema.json#/properties/stock_plans`

- [CapTable - Objects.Valuation.schema.json Array](./captable-properties-captable---objectsvaluationschemajson-array.md "List of valuations for the cap table") – `CapTable.schema.json#/properties/valuations`

- [CapTable - Objects.VestingSchedule.schema.json Array](./captable-properties-captable---objectsvestingscheduleschemajson-array.md "List of vesting schedules used by the issuer") – `CapTable.schema.json#/properties/vesting_schedules`

- [CapTable - Objects.Warrant.schema.json Array](./captable-properties-captable---objectswarrantschemajson-array.md "List of warrants for the cap table") – `CapTable.schema.json#/properties/warrants`

- [ContactInfo - Email Array](./contactinfo-properties-contactinfo---email-array.md "Emails to reach the contact at") – `Types.ContactInfo.schema.json#/properties/emails`

- [ContactInfo - Phone Number Array](./contactinfo-properties-contactinfo---phone-number-array.md "Phone numbers to reach the contact at") – `Types.ContactInfo.schema.json#/properties/phone_numbers`

- [Convertible - Comments](./convertible-1-properties-convertible---comments.md "Unstructured text comments related to and stored for this convertible") – `Objects.Convertible.schema.json#/properties/comments`

- [Convertible - Types.SecurityExemption.schema.json Array](./convertible-1-properties-convertible---typessecurityexemptionschemajson-array.md "List of security law exemptions (and applicable jurisdictions) for this convertible") – `Objects.Convertible.schema.json#/properties/security_law_exemptions`

- [EventDrivenVestingCondition - Types.EventDrivenVestingCondition.schema.json Array](./eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Additional vesting conditions which become operative once this condition is met") – `Types.EventDrivenVestingCondition.schema.json#/properties/dependent_vesting`

- [Issuer - Comments](./issuer-properties-issuer---comments.md "Unstructured comments related to and stored for the issuer") – `Objects.Issuer.schema.json#/properties/comments`

- [Issuer - TaxID Array](./issuer-properties-issuer---taxid-array.md "The tax ids for this issuer company") – `Objects.Issuer.schema.json#/properties/tax_ids`

- [PlanSecurity - Comments](./plansecurities-properties-plansecurity---comments.md "Unstructured text comments related to and stored for this PlanSecurity") – `Objects.PlanSecurities.schema.json#/properties/comments`

- [PlanSecurity - Types.SecurityExemption.schema.json Array](./plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array.md "List of security law exemptions (and applicable jurisdictions) applicable to the PlanSecurities") – `Objects.PlanSecurities.schema.json#/properties/security_law_exemptions`

- [PlanSecurity - Types.TerminationWindow.schema.json Array](./plansecurities-properties-plansecurity---typesterminationwindowschemajson-array.md "Exercise periods applicable to plan security after a termination for a given, enumerated reason") – `Objects.PlanSecurities.schema.json#/properties/termination_exercise_windows`

- [ScheduleDrivenVestingCondition - Dependent Vesting Conditions Array](./scheduledrivenvestingcondition-properties-scheduledrivenvestingcondition---dependent-vesting-conditions-array.md "Vesting periods or conditions which become operative once this condition is met") – `Types.ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting`

- [Stakeholder - Address Array](./stakeholder-1-properties-stakeholder---address-array.md "Addresses for the stakeholder") – `Objects.Stakeholder.schema.json#/properties/addresses`

- [Stakeholder - Comments](./stakeholder-1-properties-stakeholder---comments.md "Unstructured text comments related to and stored for this Stakeholder") – `Objects.Stakeholder.schema.json#/properties/comments`

- [Stakeholder - TaxID Array](./stakeholder-1-properties-stakeholder---taxid-array.md "The tax ids for this stakeholder") – `Objects.Stakeholder.schema.json#/properties/tax_ids`

- [Stock - Comments](./stock-properties-stock---comments.md "List of comments for this stock") – `Objects.Stock.schema.json#/properties/comments`

- [Stock - Security Law Exemption Ids Array](./stock-properties-stock---security-law-exemption-ids-array.md "List of security law exemptions applicable to this stock and corresponding jurisdictions") – `Objects.Stock.schema.json#/properties/security_law_exemptions`

- [Stock - Stock Legend Id Array](./stock-properties-stock---stock-legend-id-array.md "List of stock legend ids that apply to this stock") – `Objects.Stock.schema.json#/properties/stock_legend_ids`

- [StockClass - Comments](./stockclass-1-properties-stockclass---comments.md "List of comments for the stock class") – `Objects.StockClass.schema.json#/properties/comments`

- [StockClass - StockClassConversionRights Array](./stockclass-1-properties-stockclass---stockclassconversionrights-array.md "List of StockClassConversionRights possible for this StockClass") – `Objects.StockClass.schema.json#/properties/conversion_rights`

- [StockLegendTemplate - Comments](./stocklegendtemplate-properties-stocklegendtemplate---comments.md "Unstructured text comments related to and stored for this StockLegend") – `Objects.StockLegendTemplate.schema.json#/properties/comments`

- [StockPlan - Comments](./stockplan-properties-stockplan---comments.md "List of comments for the stock plan") – `Objects.StockPlan.schema.json#/properties/comments`

- [Valuation - Comments](./valuation-1-properties-valuation---comments.md "List of comments for the valuation") – `Objects.Valuation.schema.json#/properties/comments`

- [Vesting Type - CustomVestingTranche Array](./vesting-1-properties-vesting-type---customvestingtranche-array.md "Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule") – `Types.Vesting.schema.json#/properties/custom_vesting_tranches`

- [Vesting Type - EventDrivenVestingCondition Array](./vesting-1-properties-vesting-type---eventdrivenvestingcondition-array.md "Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration") – `Types.Vesting.schema.json#/properties/event_driven_vesting_conditions`

- [VestingSchedule - Comments](./vestingschedule-properties-vestingschedule---comments.md "List of comments for the vesting schedule") – `Objects.VestingSchedule.schema.json#/properties/comments`

- [VestingSchedule - ScheduleDrivenVestingCondition Array](./vestingschedule-properties-vestingschedule---scheduledrivenvestingcondition-array.md "Schedule rows defining the vesting schedule tranches") – `Objects.VestingSchedule.schema.json#/properties/schedule_driven_vesting_conditions`

- [Warrant - Comments](./warrant-properties-warrant---comments.md "List of comments for this stock") – `Objects.Warrant.schema.json#/properties/comments`

- [Warrant - SecurityExemption Array](./warrant-properties-warrant---securityexemption-array.md "List of security law exemptions applicable to this warrant") – `Objects.Warrant.schema.json#/properties/security_law_exemptions`

- [Warrant - StockClassConversionRights Array](./warrant-properties-warrant---stockclassconversionrights-array.md "What can this instrument convert into for a maturity or next equity financing conversion?") – `Objects.Warrant.schema.json#/properties/conversion_rights`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema`
