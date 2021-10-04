<!-- Generator: Widdershins v4.0.1 -->

<h1 id="ocf-specification-open-cap-table-format-">OCF Specification (Open Cap Table Format) v1.0.0</h1>

> Scroll down to see object schemas and type definitions for the OCF specification.

</aside>

# Schemas

<h2 id="tocS_Issuer">Cap Table</h2>

Top-level object describing a capitalization table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the cap table|
|issuer|[Issuer](#schemaissuer)|false|none|Issuer for the cap table|
|stakeholders|[[Stakeholder](#schemastakeholder)]|false|none|List of stakeholders|
|stock_plans|[[StockPlan](#schemastockplan)]|false|none|List of issued stock plans|
|valuations|[[Valuation](#schemavaluation)]|false|none|List of valuations|
|comments|[string]¦null|false|none|List of comments for the cap table|

---

<h2 id="tocS_Issuer">Issuer</h2>

Object describing the issuer of the cap table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the issuer|
|legal_name|string|false|none|Legal name of the issuer|
|formation_date|[DateTime](#schemadatetime)|false|none|Date of formation|
|comments|[string]¦null|false|none|List of comments for the issuer|

---

<h2 id="tocS_Stakeholder">Stakeholder</h2>

Object describing a stakeholder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the stakeholder|
|name|[Name](#schemaname)|false|none|Name for the stakeholder|
|stakeholder_type|[StakeholderType](#schemastakeholdertype)|false|none|Distinguish individuals from institutions|
|comments|[string]¦null|false|none|List of comments for the stakeholder|

---

<h2 id="tocS_StockPlan">StockPlan</h2>

Object describing a plan which stock options are issued from

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the stock plan|
|plan_name|string|false|none|Name for the stock plan|
|board_approval_date|[DateTime](#schemadatetime)|false|none|Date which board approved the plan|
|shares_reserved|[Numeric](#schemanumeric)|false|none|Date which board approved the plan|
|comments|[string]¦null|false|none|List of comments for the stock plan|

---

<h2 id="tocS_Valuation">Valuation</h2>

Object describing a valuation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the valuation|
|provider|string¦null|false|none|Entity which provided the valuation|
|price_per_share|[Money](#schemamoney)|false|none|Valued price per share|
|valuation_date|[DateTime](#schemadatetime)|false|none|Date of the valuation|
|valuation_type|[ValuationType](#schemavaluationtype)|false|none|Seam for supporting different types of valuations in future versions|
|comments|[string]¦null|false|none|List of comments for the valuation|

---

<h2 id="tocS_StakeholderType">StakeholderType</h2>

Enumeration of stakeholder types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Enumeration of stakeholder types|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|INDIVIDUAL|
|*anonymous*|INSTITUTION|

---

<h2 id="tocS_ValuationType">ValuationType</h2>

Enumeration of valuation types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Enumeration of valuation types|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|409A|

---

<h2 id="tocS_DateTime">DateTime</h2>

Type representing an instant in Universal Coordinated Time (UTC)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch_millis|integer(int64)|false|none|Number of milliseconds elapsed since Unix epoch|

---

<h2 id="tocS_Money">Money</h2>

Type representing a monetary value in a specified currency code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Numeric](#schemanumeric)|false|none|Numeric value|
|currency|string|false|none|ISO-4217 currency code|

---

<h2 id="tocS_Name">Name</h2>

Type representing multiple name components

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legal_name|string|false|none|Legal full name for the individual/institution|
|first_name|string¦null|false|none|First/given name for the individual|
|last_name|string¦null|false|none|Last/family name for the individual|

---

<h2 id="tocS_Numeric">Numeric</h2>

Type representation of a number (up to 10 decimal places supported by the spec)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|string_value|string|false|none|Fixed-point numeric value as string|

