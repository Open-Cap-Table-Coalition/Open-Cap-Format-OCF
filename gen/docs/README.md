# README

## Top-level Schemas

*   [Cap Table ("Snapshot")](./captable.md "Top-level schema describing a capitalization table") – `CapTable.schema.json`

*   [Enum - AccrualPeriod Type](./accrualperiod.md "Enumeration of interest accrual period type") – `Enums.AccrualPeriod.schema.json`

*   [Enum - Address Type](./address.md "Enumeration of address types") – `Enums.Address.schema.json`

*   [Enum - AllocationType](./allocationtype.md "Enumeration of allocation types for vesting schedules") – `Enums.AllocationType.schema.json`

*   [Enum - Compensation Type](./compensation.md "Enumeration of stock compensation types") – `Enums.Compensation.schema.json`

*   [Enum - Compounding Type](./compounding.md "Enumeration of interest compounding type") – `Enums.Compounding.schema.json`

*   [Enum - Convertible Conversion Type](./conversion.md "Enumeration of convertible conversion type") – `Enums.Conversion.schema.json`

*   [Enum - Convertible Type](./convertible.md "Enumeration of convertible instrument types") – `Enums.Convertible.schema.json`

*   [Enum - DayCount Type](./daycount.md "Enumeration of how the number of days are determined per period") – `Enums.DayCount.schema.json`

*   [Enum - Email Type](./email.md "Enumeration of email types") – `Enums.Email.schema.json`

*   [Enum - InterestPayout Type](./interestpayout.md "Enumeration of type of interest payout (e") – `Enums.InterestPayout.schema.json`

*   [Enum - Object Type](./object.md "Enumeration of object types") – `Enums.Object.schema.json`

*   [Enum - Option Type](./option.md "Enumeration of option types") – `Enums.Option.schema.json`

*   [Enum - Parent Stock Type](./parent.md "Enumeration of parent sources a stock can be issued or created from") – `Enums.Parent.schema.json`

*   [Enum - PhoneNumber Type](./phonenumber.md "Enumeration of phone number types") – `Enums.PhoneNumber.schema.json`

*   [Enum - Relationships between stakeholder and issuer](./stakeholderrelationship.md "Enumeration of types of relationships") – `Enums.StakeholderRelationship.schema.json`

*   [Enum - Rounding Type](./rounding.md "Enumeration of rounding types") – `Enums.Rounding.schema.json`

*   [Enum - Stakeholder Type](./stakeholder.md "Enumeration of stakeholder types - individual (human) or institution (entity)") – `Enums.Stakeholder.schema.json`

*   [Enum - StockClass Type](./stockclass.md "Enumeration of stockclass types") – `Enums.StockClass.schema.json`

*   [Enum - TerminationWindow Type](./terminationwindow.md "Enumeration of TerminationWindow types") – `Enums.TerminationWindow.schema.json`

*   [Enum - Time Period Type](./period.md "Enumeration of time period types") – `Enums.Period.schema.json`

*   [Enum - Valuation Type](./valuation.md "Enumeration of valuation types") – `Enums.Valuation.schema.json`

*   [Enum - Vesting Type](./vesting.md "Enumeration of vesting types") – `Enums.Vesting.schema.json`

*   [Object - BaseObject](./baseobject.md "Abstract object to be extended by all other objects") – `Primitives.BaseObject.schema.json`

*   [Object - Convertible Acceptance Transaction](./convertibleacceptance.md "Object describing a convertible acceptance transaction") – `Objects.Transactions.Acceptance.ConvertibleAcceptance.schema.json`

*   [Object - Convertible Cancellation Transaction](./convertiblecancellation.md "Object describing a cancellation of a convertible security") – `Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json`

*   [Object - Convertible Issuance Transaction](./convertibleissuance.md "Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.ConvertibleIssuance.schema.json`

*   [Object - Convertible Retraction Transaction](./convertibleretraction.md "Object describing a retraction of a convertible security") – `Objects.Transactions.Retraction.ConvertibleRetraction.schema.json`

*   [Object - Convertible Transfer Transaction](./convertibletransfer.md "Object describing a transfer or secondary sale of a convertible security") – `Objects.Transactions.Transfer.ConvertibleTransfer.schema.json`

*   [Object - Issuer](./issuer.md "Object describing the issuer of the cap table") – `Objects.Issuer.schema.json`

*   [Object - Plan Security Acceptance Transaction](./plansecurityacceptance.md "Object describing a plan security acceptance transaction") – `Objects.Transactions.Acceptance.PlanSecurityAcceptance.schema.json`

*   [Object - Plan Security Cancellation Transaction](./plansecuritycancellation.md "Object describing a cancellation of a plan security") – `Objects.Transactions.Cancellation.PlanSecurityCancellation.schema.json`

*   [Object - Plan Security Exercise Transaction](./plansecurityexercise.md "Object describing a plan security exercise transaction") – `Objects.Transactions.Exercise.PlanSecurityExercise.schema.json`

*   [Object - Plan Security Issuance Transaction](./plansecurityissuance.md "Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json`

*   [Object - Plan Security Repurchase Release Transaction](./plansecurityrepurchaserelease.md "Object describing a plan security repurchase release transaction (when the right to repurchase is removed)") – `Objects.Transactions.RepurchaseRelease.PlanSecurityRepurchaseRelease.schema.json`

*   [Object - Plan Security Retraction Transaction](./plansecurityretraction.md "Object describing a retraction of a plan security") – `Objects.Transactions.Retraction.PlanSecurityRetraction.schema.json`

*   [Object - Plan Security Split Transaction](./plansecuritysplit.md "Object describing a split of a plan security") – `Objects.Transactions.Split.PlanSecuritySplit.schema.json`

*   [Object - Plan Security Transfer Transaction](./plansecuritytransfer.md "Object describing a transfer of a plan security") – `Objects.Transactions.Transfer.PlanSecurityTransfer.schema.json`

*   [Object - Stakeholder](./stakeholder-1.md "Object describing a stakeholder") – `Objects.Stakeholder.schema.json`

*   [Object - Stock Acceptance Transaction](./stockacceptance.md "Object describing a stock acceptance transaction") – `Objects.Transactions.Acceptance.StockAcceptance.schema.json`

*   [Object - Stock Cancellation Transaction](./stockcancellation.md "Object describing a cancellation of a stock security") – `Objects.Transactions.Cancellation.StockCancellation.schema.json`

*   [Object - Stock Issuance Transaction](./stockissuance.md "Object describing a stock issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.StockIssuance.schema.json`

*   [Object - Stock Re-issuance Transaction](./stockreissuance.md "Object describing a re-issuance of stock") – `Objects.Transactions.Reissuance.StockReissuance.schema.json`

*   [Object - Stock Repurchase Transaction](./stockrepurchase.md "Object describing a stock repurchase transaction") – `Objects.Transactions.Repurchase.StockRepurchase.schema.json`

*   [Object - Stock Retraction Transaction](./stockretraction.md "Object describing a retraction of a stock security") – `Objects.Transactions.Retraction.StockRetraction.schema.json`

*   [Object - Stock Split Transaction](./stocksplit.md "Object describing a split of a stock security") – `Objects.Transactions.Split.StockSplit.schema.json`

*   [Object - Stock Transfer Transaction](./stocktransfer.md "Object describing a transfer or secondary sale of a stock security") – `Objects.Transactions.Transfer.StockTransfer.schema.json`

*   [Object - StockClass](./stockclass-1.md "Object describing a type of stock class issued by the issuer") – `Objects.StockClass.schema.json`

*   [Object - StockLegendTemplate](./stocklegendtemplate.md "Object describing a stock legend template") – `Objects.StockLegendTemplate.schema.json`

*   [Object - StockPlan](./stockplan.md "Object describing a plan which stock options are issued from") – `Objects.StockPlan.schema.json`

*   [Object - Valuation](./valuation-1.md "Object describing a valuation used in the cap table") – `Objects.Valuation.schema.json`

*   [Object - VestingSchedule](./vestingschedule.md "Object describing a strictly time-based vesting schedule") – `Objects.VestingSchedule.schema.json`

*   [Object - Warrant Acceptance Transaction](./warrantacceptance.md "Object describing a warrant acceptance transaction") – `Objects.Transactions.Acceptance.WarrantAcceptance.schema.json`

*   [Object - Warrant Cancellation Transaction](./warrantcancellation.md "Object describing a cancellation of a warrant security") – `Objects.Transactions.Cancellation.WarrantCancellation.schema.json`

*   [Object - Warrant Exercise Transaction](./warrantexercise.md "Object describing a warrant exercise transaction") – `Objects.Transactions.Exercise.WarrantExercise.schema.json`

*   [Object - Warrant Issuance Transaction](./warrantissuance.md "Object describing warrant issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.WarrantIssuance.schema.json`

*   [Object - Warrant Retraction Transaction](./warrantretraction.md "Object describing a retraction of a warrant security") – `Objects.Transactions.Retraction.WarrantRetraction.schema.json`

*   [Object - Warrant Split Transaction](./warrantsplit.md "Object describing a split of a warrant security") – `Objects.Transactions.Split.WarrantSplit.schema.json`

*   [Object - Warrant Transfer Transaction](./warranttransfer.md "Object describing a transfer or secondary sale of a warrant security") – `Objects.Transactions.Transfer.WarrantTransfer.schema.json`

*   [Primitive - Security Acceptance Transaction](./baseacceptance.md "Abstract object describing a security acceptance transaction") – `Primitives.Transactions.Acceptance.BaseAcceptance.schema.json`

*   [Primitive - Security Cancellation Transaction](./basecancellation.md "Abstract object describing fields common to all cancellation transaction objects") – `Primitives.Transactions.Cancellation.BaseCancellation.schema.json`

*   [Primitive - Security Exercise Transaction](./baseexercise.md "Abstract object describing fields common to all exercise transaction objects") – `Primitives.Transactions.Exercise.BaseExercise.schema.json`

*   [Primitive - Security Issuance Transaction](./baseissuance.md "Abstract object describing fields common to all issuance objects") – `Primitives.Transactions.Issuance.BaseIssuance.schema.json`

*   [Primitive - Security Re-issuance Transaction](./basereissuance.md "Abstract object describing common properties to a re-issuance of a security") – `Primitives.Transactions.Reissuance.BaseReissuance.schema.json`

*   [Primitive - Security Repurchase Release Transaction](./baserepurchaserelease.md "Abstract object describing fields common to all repurchase release transaction objects") – `Primitives.Transactions.RepurchaseRelease.BaseRepurchaseRelease.schema.json`

*   [Primitive - Security Repurchase Transaction](./baserepurchase.md "Abstract object describing a repurchase transaction") – `Primitives.Transactions.Repurchase.BaseRepurchase.schema.json`

*   [Primitive - Security Retraction Transaction](./baseretraction.md "Abstract object describing a security retraction transaction") – `Primitives.Transactions.Retraction.BaseRetraction.schema.json`

*   [Primitive - Security Split Transaction](./basesplit.md "Abstract object describing a security split transaction") – `Primitives.Transactions.Split.BaseSplit.schema.json`

*   [Primitive - Security Transaction](./basetransaction.md "Abstract transaction object to be extended by all other transaction objects") – `Primitives.Transactions.BaseTransaction.schema.json`

*   [Primitive - Security Transfer Transaction](./basetransfer.md "Abstract object describing a security transfer or secondary sale transaction") – `Primitives.Transactions.Transfer.BaseTransfer.schema.json`

*   [Type - Address](./address-1.md "Type representation of an address as an object") – `Types.Address.schema.json`

*   [Type - ContactInfo](./contactinfo.md "Type representation of a primary contact person for a stakeholder (e") – `Types.ContactInfo.schema.json`

*   [Type - ConversionTrigger](./conversiontrigger.md "Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)") – `Types.ConversionTrigger.schema.json`

*   [Type - Custom Vesting Tranche](./customvestingtranche.md "Type representation of an vesting tranche by date and quantity") – `Types.CustomVestingTranche.schema.json`

*   [Type - DateString](./datestring.md "Type representing an ISO-8601 date, e") – `Types.DateString.schema.json`

*   [Type - Email](./email-1.md "Type representation of an email address") – `Types.Email.schema.json`

*   [Type - Event-driven Vesting Condition](./eventdrivenvestingcondition.md "Type representation of complex event-driven vesting criteria") – `Types.EventDrivenVestingCondition.schema.json`

*   [Type - Money](./money.md "Type representing a monetary value in a specified currency code") – `Types.Money.schema.json`

*   [Type - Name](./name.md "Type comprising of multiple name components") – `Types.Name.schema.json`

*   [Type - Numeric](./numeric.md "Type representation of a number (up to 10 decimal places supported by the spec)") – `Types.Numeric.schema.json`

*   [Type - PhoneNumber](./phonenumber-1.md "Type representation of a phone number") – `Types.PhoneNumber.schema.json`

*   [Type - Ratio](./ratio.md "Type representation of a ratio as antecedent and consequent numeric values") – `Types.Ratio.schema.json`

*   [Type - Schedule-driven Vesting Condition](./scheduledrivenvestingcondition.md "Type representation of a row in a vesting schedule") – `Types.ScheduleDrivenVestingCondition.schema.json`

*   [Type - SecurityExemption](./securityexemption.md "Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis") – `Types.SecurityExemption.schema.json`

*   [Type - StockClassConversionRights](./stockclassconversionrights.md "Type representation of a conversion right from one security into a StockClass") – `Types.StockClassConversionRights.schema.json`

*   [Type - StockParent](./stockparent.md "Type representation of the parent security of a given stock issuance (e") – `Types.StockParent.schema.json`

*   [Type - TaxID](./taxid.md "Type representation of a government identifier for tax purposes (e") – `Types.TaxID.schema.json`

*   [Type - TerminationWindow](./terminationwindow-1.md "Type representation of a termination window as an object") – `Types.TerminationWindow.schema.json`

*   [Type - Vesting](./vesting-1.md "Type representing all aspects related to vesting securities") – `Types.Vesting.schema.json`

## Other Schemas

### Objects

*   [Object - BaseObject](./issuer-allof-object---baseobject.md "Abstract object to be extended by all other objects") – `Primitives.BaseObject.schema.json#/allOf/0`

*   [Object - Convertible Cancellation Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---convertible-cancellation-transaction.md "Object describing a cancellation of a convertible security") – `Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/transactions/items/oneOf/6`

*   [Object - Convertible Issuance Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---convertible-issuance-transaction.md "Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.ConvertibleIssuance.schema.json#/properties/transactions/items/oneOf/1`

*   [Object - Convertible Retraction Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---convertible-retraction-transaction.md "Object describing a retraction of a convertible security") – `Objects.Transactions.Retraction.ConvertibleRetraction.schema.json#/properties/transactions/items/oneOf/16`

*   [Object - Convertible Transfer Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---convertible-transfer-transaction.md "Object describing a transfer or secondary sale of a convertible security") – `Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/transactions/items/oneOf/15`

*   [Object - Issuer](./captable-properties-object---issuer.md "Object describing the issuer of the cap table") – `Objects.Issuer.schema.json#/properties/issuer`

*   [Object - Plan Security Acceptance Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-acceptance-transaction.md "Object describing a plan security acceptance transaction") – `Objects.Transactions.Acceptance.PlanSecurityAcceptance.schema.json#/properties/transactions/items/oneOf/4`

*   [Object - Plan Security Cancellation Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-cancellation-transaction.md "Object describing a cancellation of a plan security") – `Objects.Transactions.Cancellation.PlanSecurityCancellation.schema.json#/properties/transactions/items/oneOf/5`

*   [Object - Plan Security Issuance Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-issuance-transaction.md "Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/transactions/items/oneOf/0`

*   [Object - Plan Security Retraction Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-retraction-transaction.md "Object describing a retraction of a plan security") – `Objects.Transactions.Retraction.PlanSecurityRetraction.schema.json#/properties/transactions/items/oneOf/17`

*   [Object - Plan Security Split Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-split-transaction.md "Object describing a split of a plan security") – `Objects.Transactions.Split.PlanSecuritySplit.schema.json#/properties/transactions/items/oneOf/9`

*   [Object - Plan Security Transfer Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---plan-security-transfer-transaction.md "Object describing a transfer of a plan security") – `Objects.Transactions.Transfer.PlanSecurityTransfer.schema.json#/properties/transactions/items/oneOf/13`

*   [Object - Stakeholder](./captable-properties-captable---objectsstakeholderschemajson-array-object---stakeholder.md "Object describing a stakeholder") – `Objects.Stakeholder.schema.json#/properties/stakeholders/items`

*   [Object - Stock Cancellation Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---stock-cancellation-transaction.md "Object describing a cancellation of a stock security") – `Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/transactions/items/oneOf/8`

*   [Object - Stock Issuance Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---stock-issuance-transaction.md "Object describing a stock issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/transactions/items/oneOf/3`

*   [Object - Stock Retraction Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---stock-retraction-transaction.md "Object describing a retraction of a stock security") – `Objects.Transactions.Retraction.StockRetraction.schema.json#/properties/transactions/items/oneOf/18`

*   [Object - Stock Split Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---stock-split-transaction.md "Object describing a split of a stock security") – `Objects.Transactions.Split.StockSplit.schema.json#/properties/transactions/items/oneOf/11`

*   [Object - Stock Transfer Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---stock-transfer-transaction.md "Object describing a transfer or secondary sale of a stock security") – `Objects.Transactions.Transfer.StockTransfer.schema.json#/properties/transactions/items/oneOf/12`

*   [Object - StockClass](./captable-properties-stock_classes-object---stockclass.md "Object describing a type of stock class issued by the issuer") – `Objects.StockClass.schema.json#/properties/stock_classes/items`

*   [Object - StockLegendTemplate](./captable-properties-captable---objectsstocklegendtemplatesschemajson-array-object---stocklegendtemplate.md "Object describing a stock legend template") – `Objects.StockLegendTemplate.schema.json#/properties/stock_legend_templates/items`

*   [Object - StockPlan](./captable-properties-captable---objectsstockplanschemajson-array-object---stockplan.md "Object describing a plan which stock options are issued from") – `Objects.StockPlan.schema.json#/properties/stock_plans/items`

*   [Object - Valuation](./captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md "Object describing a valuation used in the cap table") – `Objects.Valuation.schema.json#/properties/valuations/items`

*   [Object - VestingSchedule](./captable-properties-captable---objectsvestingscheduleschemajson-array-object---vestingschedule.md "Object describing a strictly time-based vesting schedule") – `Objects.VestingSchedule.schema.json#/properties/vesting_schedules/items`

*   [Object - Warrant Cancellation Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-cancellation-transaction.md "Object describing a cancellation of a warrant security") – `Objects.Transactions.Cancellation.WarrantCancellation.schema.json#/properties/transactions/items/oneOf/7`

*   [Object - Warrant Issuance Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-issuance-transaction.md "Object describing warrant issuance transaction by the issuer and held by a stakeholder") – `Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/transactions/items/oneOf/2`

*   [Object - Warrant Retraction Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-retraction-transaction.md "Object describing a retraction of a warrant security") – `Objects.Transactions.Retraction.WarrantRetraction.schema.json#/properties/transactions/items/oneOf/19`

*   [Object - Warrant Split Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-split-transaction.md "Object describing a split of a warrant security") – `Objects.Transactions.Split.WarrantSplit.schema.json#/properties/transactions/items/oneOf/10`

*   [Object - Warrant Transfer Transaction](./captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-transfer-transaction.md "Object describing a transfer or secondary sale of a warrant security") – `Objects.Transactions.Transfer.WarrantTransfer.schema.json#/properties/transactions/items/oneOf/14`

*   [Primitive - Security Acceptance Transaction](./plansecurityacceptance-allof-primitive---security-acceptance-transaction.md "Abstract object describing a security acceptance transaction") – `Primitives.Transactions.Acceptance.BaseAcceptance.schema.json#/allOf/0`

*   [Primitive - Security Cancellation Transaction](./plansecuritycancellation-allof-primitive---security-cancellation-transaction.md "Abstract object describing fields common to all cancellation transaction objects") – `Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/allOf/0`

*   [Primitive - Security Issuance Transaction](./plansecurityissuance-allof-primitive---security-issuance-transaction.md "Abstract object describing fields common to all issuance objects") – `Primitives.Transactions.Issuance.BaseIssuance.schema.json#/allOf/0`

*   [Primitive - Security Retraction Transaction](./convertibleretraction-allof-primitive---security-retraction-transaction.md "Abstract object describing a security retraction transaction") – `Primitives.Transactions.Retraction.BaseRetraction.schema.json#/allOf/0`

*   [Primitive - Security Split Transaction](./plansecuritysplit-allof-primitive---security-split-transaction.md "Abstract object describing a security split transaction") – `Primitives.Transactions.Split.BaseSplit.schema.json#/allOf/0`

*   [Primitive - Security Transaction](./baseissuance-allof-primitive---security-transaction.md "Abstract transaction object to be extended by all other transaction objects") – `Primitives.Transactions.BaseTransaction.schema.json#/allOf/0`

*   [Primitive - Security Transfer Transaction](./stocktransfer-allof-primitive---security-transfer-transaction.md "Abstract object describing a security transfer or secondary sale transaction") – `Primitives.Transactions.Transfer.BaseTransfer.schema.json#/allOf/0`

*   [Type - Address](./issuer-properties-type---address.md "Type representation of an address as an object") – `Types.Address.schema.json#/properties/address`

*   [Type - ContactInfo](./stakeholder-1-properties-type---contactinfo.md "Type representation of a primary contact person for a stakeholder (e") – `Types.ContactInfo.schema.json#/properties/primary_contact`

*   [Type - ConversionTrigger](./convertibleissuance-properties-convertible---typesconversiontriggerschemajson-array-type---conversiontrigger.md "Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)") – `Types.ConversionTrigger.schema.json#/properties/conversion_triggers/items`

*   [Type - Custom Vesting Tranche](./vesting-1-properties-vesting-type---customvestingtranche-array-type---custom-vesting-tranche.md "Type representation of an vesting tranche by date and quantity") – `Types.CustomVestingTranche.schema.json#/properties/custom_vesting_tranches/items`

*   [Type - Email](./issuer-properties-type---email.md "Type representation of an email address") – `Types.Email.schema.json#/properties/email`

*   [Type - Event-driven Vesting Condition](./vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items-anyof-type---event-driven-vesting-condition.md "Type representation of complex event-driven vesting criteria") – `Types.EventDrivenVestingCondition.schema.json#/properties/event_driven_vesting_conditions/items/anyOf/0`

*   [Type - Money](./baseissuance-properties-type---money.md "Type representing a monetary value in a specified currency code") – `Types.Money.schema.json#/properties/consideration`

*   [Type - Name](./stakeholder-1-properties-type---name.md "Type comprising of multiple name components") – `Types.Name.schema.json#/properties/name`

*   [Type - Numeric](./stockplan-properties-type---numeric.md "Type representation of a number (up to 10 decimal places supported by the spec)") – `Types.Numeric.schema.json#/properties/current_shares_reserved`

*   [Type - PhoneNumber](./issuer-properties-type---phonenumber.md "Type representation of a phone number") – `Types.PhoneNumber.schema.json#/properties/phone`

*   [Type - Ratio](./stockclassconversionrights-properties-type---ratio.md "Type representation of a ratio as antecedent and consequent numeric values") – `Types.Ratio.schema.json#/properties/ratio`

*   [Type - Schedule-driven Vesting Condition](./eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array-items-anyof-type---schedule-driven-vesting-condition.md "Type representation of a row in a vesting schedule") – `Types.ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting/items/anyOf/1`

*   [Type - SecurityExemption](./baseissuance-properties-convertible---typessecurityexemptionschemajson-array-type---securityexemption.md "Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis") – `Types.SecurityExemption.schema.json#/properties/security_law_exemptions/items`

*   [Type - StockClassConversionRights](./convertibleissuance-properties-type---stockclassconversionrights.md "Type representation of a conversion right from one security into a StockClass") – `Types.StockClassConversionRights.schema.json#/properties/default_conversion_rights`

*   [Type - StockParent](./stockissuance-properties-type---stockparent.md "Type representation of the parent security of a given stock issuance (e") – `Types.StockParent.schema.json#/properties/issued_from_parent_object`

*   [Type - TaxID](./issuer-properties-issuer---taxid-array-type---taxid.md "Type representation of a government identifier for tax purposes (e") – `Types.TaxID.schema.json#/properties/tax_ids/items`

*   [Type - TerminationWindow](./plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array-type---terminationwindow.md "Type representation of a termination window as an object") – `Types.TerminationWindow.schema.json#/properties/termination_exercise_windows/items`

*   [Type - Vesting](./plansecurityissuance-properties-type---vesting.md "Type representing all aspects related to vesting securities") – `Types.Vesting.schema.json#/properties/vesting`

### Arrays

*   [CapTable - Objects.Stakeholder.schema.json Array](./captable-properties-captable---objectsstakeholderschemajson-array.md "List of stakeholders for the cap table") – `CapTable.schema.json#/properties/stakeholders`

*   [CapTable - Objects.StockLegendTemplates.schema.json Array](./captable-properties-captable---objectsstocklegendtemplatesschemajson-array.md "List of stock legend templates for the cap table") – `CapTable.schema.json#/properties/stock_legend_templates`

*   [CapTable - Objects.StockPlan.schema.json Array](./captable-properties-captable---objectsstockplanschemajson-array.md "List of issued stock plans for the cap table") – `CapTable.schema.json#/properties/stock_plans`

*   [CapTable - Objects.Transactions.\*.schema.json Array](./captable-properties-captable---objectstransactionsschemajson-array.md "List of transactions for the cap table") – `CapTable.schema.json#/properties/transactions`

*   [CapTable - Objects.Valuation.schema.json Array](./captable-properties-captable---objectsvaluationschemajson-array.md "List of valuations for the cap table") – `CapTable.schema.json#/properties/valuations`

*   [CapTable - Objects.VestingSchedule.schema.json Array](./captable-properties-captable---objectsvestingscheduleschemajson-array.md "List of vesting schedules used by the issuer") – `CapTable.schema.json#/properties/vesting_schedules`

*   [ContactInfo - Email Array](./contactinfo-properties-contactinfo---email-array.md "Emails to reach the contact at") – `Types.ContactInfo.schema.json#/properties/emails`

*   [ContactInfo - Email Array](./contactinfo-properties-contactinfo---email-array.md "Emails to reach the contact at") – `Types.ContactInfo.schema.json#/properties/emails`

*   [ContactInfo - Phone Number Array](./contactinfo-properties-contactinfo---phone-number-array.md "Phone numbers to reach the contact at") – `Types.ContactInfo.schema.json#/properties/phone_numbers`

*   [ContactInfo - Phone Number Array](./contactinfo-properties-contactinfo---phone-number-array.md "Phone numbers to reach the contact at") – `Types.ContactInfo.schema.json#/properties/phone_numbers`

*   [Convertible - Types.SecurityExemption.schema.json Array](./baseissuance-properties-convertible---typessecurityexemptionschemajson-array.md "List of security law exemptions (and applicable jurisdictions) for this convertible") – `Primitives.Transactions.Issuance.BaseIssuance.schema.json#/properties/security_law_exemptions`

*   [Convertible - Types.SecurityExemption.schema.json Array](./baseissuance-properties-convertible---typessecurityexemptionschemajson-array.md "List of security law exemptions (and applicable jurisdictions) for this convertible") – `Primitives.Transactions.Issuance.BaseIssuance.schema.json#/properties/security_law_exemptions`

*   [EventDrivenVestingCondition - Types.EventDrivenVestingCondition.schema.json Array](./eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Additional vesting conditions which become operative once this condition is met") – `Types.EventDrivenVestingCondition.schema.json#/properties/dependent_vesting`

*   [EventDrivenVestingCondition - Types.EventDrivenVestingCondition.schema.json Array](./eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Additional vesting conditions which become operative once this condition is met") – `Types.EventDrivenVestingCondition.schema.json#/properties/dependent_vesting`

*   [Issuer - TaxID Array](./issuer-properties-issuer---taxid-array.md "The tax ids for this issuer company") – `Objects.Issuer.schema.json#/properties/tax_ids`

*   [Issuer - TaxID Array](./issuer-properties-issuer---taxid-array.md "The tax ids for this issuer company") – `Objects.Issuer.schema.json#/properties/tax_ids`

*   [PlanSecurity - Types.TerminationWindow.schema.json Array](./plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array.md "Exercise periods applicable to plan security after a termination for a given, enumerated reason") – `Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/termination_exercise_windows`

*   [PlanSecurity - Types.TerminationWindow.schema.json Array](./plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array.md "Exercise periods applicable to plan security after a termination for a given, enumerated reason") – `Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/termination_exercise_windows`

*   [ScheduleDrivenVestingCondition - Dependent Vesting Conditions Array](./scheduledrivenvestingcondition-properties-scheduledrivenvestingcondition---dependent-vesting-conditions-array.md "Vesting periods or conditions which become operative once this condition is met") – `Types.ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting`

*   [ScheduleDrivenVestingCondition - Dependent Vesting Conditions Array](./scheduledrivenvestingcondition-properties-scheduledrivenvestingcondition---dependent-vesting-conditions-array.md "Vesting periods or conditions which become operative once this condition is met") – `Types.ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting`

*   [Security Exercise - Resulting Security Id Array](./baseexercise-properties-security-exercise---resulting-security-id-array.md "Identifier for the security (or securities) that resulted from the exercise") – `Primitives.Transactions.Exercise.BaseExercise.schema.json#/properties/resulting_security_ids`

*   [Security Reissuance - Resulting Security Id Array](./basereissuance-properties-security-reissuance---resulting-security-id-array.md "Identifier of the new security (or securities) issuance resulting from a re-issuance") – `Primitives.Transactions.Reissuance.BaseReissuance.schema.json#/properties/resulting_security_ids`

*   [Security Repurchase - Resulting Security Id Array](./baserepurchase-properties-security-repurchase---resulting-security-id-array.md "For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares") – `Primitives.Transactions.Repurchase.BaseRepurchase.schema.json#/properties/resulting_security_ids`

*   [Security Split - Resulting Security Id Array](./basesplit-properties-security-split---resulting-security-id-array.md "Array of identifiers for new security (or securities) created as a result of the transaction") – `Primitives.Transactions.Split.BaseSplit.schema.json#/properties/resulting_security_ids`

*   [Security Split - Resulting Security Id Array](./basesplit-properties-security-split---resulting-security-id-array.md "Array of identifiers for new security (or securities) created as a result of the transaction") – `Primitives.Transactions.Split.BaseSplit.schema.json#/properties/resulting_security_ids`

*   [Security Transfer - Resulting Security Id Array](./basetransfer-properties-security-transfer---resulting-security-id-array.md "Array of identifiers for new security (or securities) created as a result of the transaction") – `Primitives.Transactions.Transfer.BaseTransfer.schema.json#/properties/resulting_security_ids`

*   [Security Transfer - Resulting Security Id Array](./basetransfer-properties-security-transfer---resulting-security-id-array.md "Array of identifiers for new security (or securities) created as a result of the transaction") – `Primitives.Transactions.Transfer.BaseTransfer.schema.json#/properties/resulting_security_ids`

*   [Stakeholder - Address Array](./stakeholder-1-properties-stakeholder---address-array.md "Addresses for the stakeholder") – `Objects.Stakeholder.schema.json#/properties/addresses`

*   [Stakeholder - Address Array](./stakeholder-1-properties-stakeholder---address-array.md "Addresses for the stakeholder") – `Objects.Stakeholder.schema.json#/properties/addresses`

*   [Stakeholder - TaxID Array](./stakeholder-1-properties-stakeholder---taxid-array.md "The tax ids for this stakeholder") – `Objects.Stakeholder.schema.json#/properties/tax_ids`

*   [Stakeholder - TaxID Array](./stakeholder-1-properties-stakeholder---taxid-array.md "The tax ids for this stakeholder") – `Objects.Stakeholder.schema.json#/properties/tax_ids`

*   [Stock - Stock Legend Id Array](./stockissuance-properties-stock---stock-legend-id-array.md "List of stock legend ids that apply to this stock") – `Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_legend_ids`

*   [Stock - Stock Legend Id Array](./stockissuance-properties-stock---stock-legend-id-array.md "List of stock legend ids that apply to this stock") – `Objects.Transactions.Issuance.StockIssuance.schema.json#/properties/stock_legend_ids`

*   [StockClass - StockClassConversionRights Array](./stockclass-1-properties-stockclass---stockclassconversionrights-array.md "List of StockClassConversionRights possible for this StockClass") – `Objects.StockClass.schema.json#/properties/conversion_rights`

*   [StockClass - StockClassConversionRights Array](./stockclass-1-properties-stockclass---stockclassconversionrights-array.md "List of StockClassConversionRights possible for this StockClass") – `Objects.StockClass.schema.json#/properties/conversion_rights`

*   [Untitled array in Cap Table ("Snapshot")](./captable-properties-stock_classes.md "List of StockClasses authorized for the issuer") – `CapTable.schema.json#/properties/stock_classes`

*   [Untitled array in Cap Table ("Snapshot")](./captable-properties-comments.md "Unstructured text comments related to and stored for the cap table") – `CapTable.schema.json#/properties/comments`

*   [Untitled array in Object - BaseObject](./baseobject-properties-comments.md "Unstructured text comments related to and stored for the object") – `Primitives.BaseObject.schema.json#/properties/comments`

*   [Untitled array in Object - BaseObject](./baseobject-properties-comments.md "Unstructured text comments related to and stored for the object") – `Primitives.BaseObject.schema.json#/properties/comments`

*   [Vesting Type - CustomVestingTranche Array](./vesting-1-properties-vesting-type---customvestingtranche-array.md "Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule") – `Types.Vesting.schema.json#/properties/custom_vesting_tranches`

*   [Vesting Type - CustomVestingTranche Array](./vesting-1-properties-vesting-type---customvestingtranche-array.md "Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule") – `Types.Vesting.schema.json#/properties/custom_vesting_tranches`

*   [Vesting Type - EventDrivenVestingCondition Array](./vesting-1-properties-vesting-type---eventdrivenvestingcondition-array.md "Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration") – `Types.Vesting.schema.json#/properties/event_driven_vesting_conditions`

*   [Vesting Type - EventDrivenVestingCondition Array](./vesting-1-properties-vesting-type---eventdrivenvestingcondition-array.md "Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration") – `Types.Vesting.schema.json#/properties/event_driven_vesting_conditions`

*   [VestingSchedule - ScheduleDrivenVestingCondition Array](./vestingschedule-properties-vestingschedule---scheduledrivenvestingcondition-array.md "Schedule rows defining the vesting schedule tranches") – `Objects.VestingSchedule.schema.json#/properties/schedule_driven_vesting_conditions`

*   [VestingSchedule - ScheduleDrivenVestingCondition Array](./vestingschedule-properties-vestingschedule---scheduledrivenvestingcondition-array.md "Schedule rows defining the vesting schedule tranches") – `Objects.VestingSchedule.schema.json#/properties/schedule_driven_vesting_conditions`

*   [Warrant - StockClassConversionRights Array](./warrantissuance-properties-warrant---stockclassconversionrights-array.md "What can this instrument convert into for a maturity or next equity financing conversion?") – `Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/conversion_rights`

*   [Warrant - StockClassConversionRights Array](./warrantissuance-properties-warrant---stockclassconversionrights-array.md "What can this instrument convert into for a maturity or next equity financing conversion?") – `Objects.Transactions.Issuance.WarrantIssuance.schema.json#/properties/conversion_rights`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema`
