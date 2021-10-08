---
template: reference
hide-nav: 'false'
---

# Cap Table Schema

```txt
CapTable.schema.json
```

Top-level object describing a capitalization table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json](../CapTable.schema.json "open original schema") |

## Cap Table Type

`object` ([Cap Table](captable.md))

# Cap Table Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                       |
| :---------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------- |
| [issuer](#issuer)             | `object` | Required | cannot be null | [Cap Table](captable-properties-cap-table.md "Objects.Issuer.schema.json#/properties/issuer")    |
| [stakeholders](#stakeholders) | `array`  | Required | cannot be null | [Cap Table](captable-properties-stakeholders.md "CapTable.schema.json#/properties/stakeholders") |
| [stock_plans](#stock_plans)   | `array`  | Required | cannot be null | [Cap Table](captable-properties-stock_plans.md "CapTable.schema.json#/properties/stock_plans")   |
| [valuations](#valuations)     | `array`  | Required | cannot be null | [Cap Table](captable-properties-valuations.md "CapTable.schema.json#/properties/valuations")     |

## issuer

Object describing the issuer of the cap table

`issuer`

*   is required

*   Type: `object` ([Cap Table](captable-properties-cap-table.md))

*   cannot be null

*   defined in: [Cap Table](captable-properties-cap-table.md "Objects.Issuer.schema.json#/properties/issuer")

### issuer Type

`object` ([Cap Table](captable-properties-cap-table.md))

## stakeholders

List of stakeholders for the cap table

`stakeholders`

*   is required

*   Type: `object[]` ([Stakeholder](captable-properties-stakeholders-stakeholder.md))

*   cannot be null

*   defined in: [Cap Table](captable-properties-stakeholders.md "CapTable.schema.json#/properties/stakeholders")

### stakeholders Type

`object[]` ([Stakeholder](captable-properties-stakeholders-stakeholder.md))

## stock_plans

List of issued stock plans for the cap table

`stock_plans`

*   is required

*   Type: `object[]` ([Stock Plan](captable-properties-stock_plans-stock-plan.md))

*   cannot be null

*   defined in: [Cap Table](captable-properties-stock_plans.md "CapTable.schema.json#/properties/stock_plans")

### stock_plans Type

`object[]` ([Stock Plan](captable-properties-stock_plans-stock-plan.md))

## valuations

List of valuations for the cap table

`valuations`

*   is required

*   Type: `object[]` ([Valuation](captable-properties-valuations-valuation.md))

*   cannot be null

*   defined in: [Cap Table](captable-properties-valuations.md "CapTable.schema.json#/properties/valuations")

### valuations Type

`object[]` ([Valuation](captable-properties-valuations-valuation.md))
