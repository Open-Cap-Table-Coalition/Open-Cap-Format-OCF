# Cap Table ("Snapshot") Schema

```txt
CapTable.schema.json
```

Top-level object describing a capitalization table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json](../CapTable.schema.json "open original schema") |

## Cap Table ("Snapshot") Type

`object` ([Cap Table ("Snapshot")](captable.md))

# Cap Table ("Snapshot") Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [issuer](#issuer)                       | `object` | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-object---issuer.md "Objects.Issuer.schema.json#/properties/issuer")                                        |
| [stakeholders](#stakeholders)           | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstakeholderschemajson-array.md "CapTable.schema.json#/properties/stakeholders")          |
| [stock_plans](#stock_plans)             | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstockplanschemajson-array.md "CapTable.schema.json#/properties/stock_plans")             |
| [plan_securities](#plan_securities)     | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsplansecuritiesschemajson-array.md "CapTable.schema.json#/properties/plan_securities")    |
| [warrants](#warrants)                   | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectswarrantschemajson-array.md "CapTable.schema.json#/properties/warrants")                  |
| [stock_issuances](#stock_issuances)     | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstockschemajson-array.md "CapTable.schema.json#/properties/stock_issuances")             |
| [convertibles](#convertibles)           | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsconvertibleschemajson-array.md "CapTable.schema.json#/properties/convertibles")          |
| [vesting_schedules](#vesting_schedules) | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsvestingscheduleschemajson-array.md "CapTable.schema.json#/properties/vesting_schedules") |
| [valuations](#valuations)               | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsvaluationschemajson-array.md "CapTable.schema.json#/properties/valuations")              |

## issuer

Object describing the issuer of the cap table

`issuer`

*   is required

*   Type: `object` ([Object - Issuer](captable-properties-object---issuer.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-object---issuer.md "Objects.Issuer.schema.json#/properties/issuer")

### issuer Type

`object` ([Object - Issuer](captable-properties-object---issuer.md))

## stakeholders

List of stakeholders for the cap table

`stakeholders`

*   is required

*   Type: `object[]` ([Object - Stakeholder](captable-properties-captable---objectsstakeholderschemajson-array-object---stakeholder.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstakeholderschemajson-array.md "CapTable.schema.json#/properties/stakeholders")

### stakeholders Type

`object[]` ([Object - Stakeholder](captable-properties-captable---objectsstakeholderschemajson-array-object---stakeholder.md))

## stock_plans

List of issued stock plans for the cap table

`stock_plans`

*   is required

*   Type: `object[]` ([Object - StockPlan](captable-properties-captable---objectsstockplanschemajson-array-object---stockplan.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstockplanschemajson-array.md "CapTable.schema.json#/properties/stock_plans")

### stock_plans Type

`object[]` ([Object - StockPlan](captable-properties-captable---objectsstockplanschemajson-array-object---stockplan.md))

## plan_securities

List of plan securities for the cap table

`plan_securities`

*   is required

*   Type: `object[]` ([Object - PlanSecurities](captable-properties-captable---objectsplansecuritiesschemajson-array-object---plansecurities.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsplansecuritiesschemajson-array.md "CapTable.schema.json#/properties/plan_securities")

### plan_securities Type

`object[]` ([Object - PlanSecurities](captable-properties-captable---objectsplansecuritiesschemajson-array-object---plansecurities.md))

## warrants

List of warrants for the cap table

`warrants`

*   is required

*   Type: `object[]` ([Object - Warrant](captable-properties-captable---objectswarrantschemajson-array-object---warrant.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectswarrantschemajson-array.md "CapTable.schema.json#/properties/warrants")

### warrants Type

`object[]` ([Object - Warrant](captable-properties-captable---objectswarrantschemajson-array-object---warrant.md))

## stock_issuances

List of stock issuances (Stock) for the cap table

`stock_issuances`

*   is required

*   Type: `object[]` ([Object - Stock](captable-properties-captable---objectsstockschemajson-array-object---stock.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstockschemajson-array.md "CapTable.schema.json#/properties/stock_issuances")

### stock_issuances Type

`object[]` ([Object - Stock](captable-properties-captable---objectsstockschemajson-array-object---stock.md))

## convertibles

List of convertibles for the cap table

`convertibles`

*   is required

*   Type: `object[]` ([Object - Convertible](captable-properties-captable---objectsconvertibleschemajson-array-object---convertible.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsconvertibleschemajson-array.md "CapTable.schema.json#/properties/convertibles")

### convertibles Type

`object[]` ([Object - Convertible](captable-properties-captable---objectsconvertibleschemajson-array-object---convertible.md))

## vesting_schedules

List of vesting schedules used by the issuer

`vesting_schedules`

*   is required

*   Type: `object[]` ([Object - VestingSchedule](captable-properties-captable---objectsvestingscheduleschemajson-array-object---vestingschedule.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsvestingscheduleschemajson-array.md "CapTable.schema.json#/properties/vesting_schedules")

### vesting_schedules Type

`object[]` ([Object - VestingSchedule](captable-properties-captable---objectsvestingscheduleschemajson-array-object---vestingschedule.md))

## valuations

List of valuations for the cap table

`valuations`

*   is required

*   Type: `object[]` ([Object - Valuation](captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsvaluationschemajson-array.md "CapTable.schema.json#/properties/valuations")

### valuations Type

`object[]` ([Object - Valuation](captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md))
