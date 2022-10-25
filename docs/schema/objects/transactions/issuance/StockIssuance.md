:house: [Documentation Home](/README.md)

---

### Object - Stock Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](/docs/schema/primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                | Type                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                      | `STRING`                                                                                                                                                                                       | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                | [`STRING`]                                                                                                                                                                                     | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type             | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                                                                 | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                    | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id             | `STRING`                                                                                                                                                                                       | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id               | `STRING`                                                                                                                                                                                       | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                                                                                                       | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date     | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| consideration_text      | `STRING`                                                                                                                                                                                       | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                                                                                                  | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_class_id          | `STRING`                                                                                                                                                                                       | Identifier of the stock class for this stock issuance                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| share_price             | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                        | The price per share paid for the stock by the holder                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| quantity                | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                          | Number of shares issued to the stakeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| vesting_terms_id        | `STRING`                                                                                                                                                                                       | Identifier of the VestingTerms to which this security is subject. If not present, security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| cost_basis              | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/Monetary](/docs/schema/types/Monetary.md)</br>&bull; [schema/types/PreReleaseOmission](/docs/schema/types/PreReleaseOmission.md) | The cost basis for this particular stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `REQUIRED` |
| stock_legend_ids        | [`STRING`]                                                                                                                                                                                     | List of stock legend ids that apply to this stock                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

:house: [Documentation Home](../../../README.md)

# OCF Transfers

## Overview

Most likely, if you are modeling a real company's capitalization, someone is going to eventually want to transfer a security between one or more stakeholders. In order to achieve this, you're going to need to use one of the [transfer events](../../schema/objects/transactions/transfer).

Each of our four, core security types has its own transfer event:

1. [ConvertibleTransfer](../../schema/objects/transactions/transfer/ConvertibleTransfer.md)
2. [PlanSecurityTransfer](../../schema/objects/transactions/transfer/PlanSecurityTransfer.md)
3. [StockTransfer](../../schema/objects/transactions/transfer/StockTransfer.md)
4. [WarrantTransfer](../../schema/objects/transactions/transfer/WarrantTransfer.md)

Don't forget that OCF is event-driven. You do not want to mutate (or change) the OCF objects that already exist. So, for example, if you had a stock issuance to Bob, and Bob now wants to transfer all of his
shares to Alice, if you look at the transfer schema, you'll probably notice a problem:

```
  "properties": {
    "object_type": {
      "const": "TX_STOCK_TRANSFER"
    },
    "quantity": {
      "description": "Quantity of non-monetary security units transferred",
      "$ref": "https://opencaptablecoalition.com/schema/types/Numeric.schema.json"
    },
    "id": {},
    "comments": {},
    "security_id": {},
    "date": {},
    "consideration_text": {},
    "balance_security_id": {},
    "resulting_security_ids": {}
  },
```

We know the `security_id` of the source stock from its original issuance event. We also know from that issuance that Bob is the stakehoder-owner of the stock. But how does Alice come into play?

You'll notice that not only does the transaction object have a source `security_id`, there is also a field for `resulting_security_ids`. This should point to the **issuance(s)** that result from this transfer. So, in fact, to model a simple transfer from Bob to Alice, you need **two** events - a [StockIssuance](../../schema/objects/transactions/issuance/StockIssuance.md) to Alice **and** the transfer linking Bob's stock to Alice's.

If Bob has any remaining shares following the issuance, his remaining shares get a new security_id via another issuance event and the transfer's `balance_security_id` should point to that new security_id. If Bob transfers all of his shares, nothing further is required. Anyone traversing the events should be able to see that Bob's stock was transfered in its entirety to the security_ids in `resulting_security_ids` on the transfer.

Let's walk through it in depth.

## Walkthrough

### Stock Transfer

We a company with a StockClass with ID `SeriesA` and a name of `Series A Preferred Stock`.

1. The Company wants to issue 1,000 shares of Series A Preferred Stock to Bob Immaperson. To do this, create a [StockIssuance](../../schema/objects/transactions/issuance/StockIssuance.md) event in your OCF event stack:

```
{
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "give-bob-some-stock",
    "security_id": "bob-stock-1",
    "date": "2022-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "bob",
    "custom_id": "PA-1",
    "stock_class_id": "SeriesA",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "1.00",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "series-a-legend",
    ]
  },
```

Note: we are assuming you have a stakeholder object with id `bob` and a StockLegend with id `series-a-legend`.

2. Now, let's say a year later, Bob wants to transfer all of his shares to Alice Hooman. Create a new issuance for Alice in your event stack:

```
{
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "give-alice-the-stock",
    "security_id": "alice-stock-1",
    "date": "2023-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "alice",
    "custom_id": "PA-23",
    "stock_class_id": "SeriesA",
    "share_price": {
      "amount": "2.73",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "2.73",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "series-a-legend",
    ]
  },
```

Again, we assume you've created a stakeholder object for Alice.

3. Now, create the transfer to link the two security ids:

```
    {
        "object_type": "TX_STOCK_TRANSFER",
        "id": "bob-transfer-to-alice",
        "security_id": "bob-stock-1",
        "date": "2023-02-01",
        "resulting_security_ids": [
        "alice-stock-1"
        ],
        "quantity": "1000"
    },
```

So here are the three events you'd have in your event stack:

```
[
    {
        "object_type": "TX_STOCK_ISSUANCE",
        "id": "give-bob-some-stock",
        "security_id": "bob-stock-1",
        "date": "2022-02-01",
        "security_law_exemptions": [],
        "stakeholder_id": "bob",
        "custom_id": "PA-1",
        "stock_class_id": "SeriesA",
        "share_price": {
        "amount": "1.00",
        "currency": "USD"
        },
        "quantity": "1000",
        "cost_basis": {
        "amount": "1.00",
        "currency": "USD"
        },
        "stock_legend_ids": [
        "series-a-legend",
        ]
    },
    ...
    {
        "object_type": "TX_STOCK_ISSUANCE",
        "id": "give-alice-the-stock",
        "security_id": "alice-stock-1",
        "date": "2023-02-01",
        "security_law_exemptions": [],
        "stakeholder_id": "alice",
        "custom_id": "PA-23",
        "stock_class_id": "SeriesA",
        "share_price": {
        "amount": "2.73",
        "currency": "USD"
        },
        "quantity": "1000",
        "cost_basis": {
        "amount": "2.73",
        "currency": "USD"
        },
        "stock_legend_ids": [
        "series-a-legend",
        ]
    },
    {
        "object_type": "TX_STOCK_TRANSFER",
        "id": "bob-transfer-to-alice",
        "security_id": "bob-stock-1",
        "date": "2023-02-01",
        "resulting_security_ids": [
        "alice-stock-1"
        ],
        "quantity": "1000"
    }
]
```

You can clearly see that Bob transferred all 1,000 shares of his stock here. Nothing further is required to note that the transfer is "terminal" or that nothing further remains of security with id `bob-stock-1` to dispose of.


**Source Code:** [schema/objects/transactions/issuance/StockIssuance](/schema/objects/transactions/issuance/StockIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "stakeholder-id",
    "custom_id": "S-1",
    "stock_class_id": "stock-class-id",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "0",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ]
  },
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-full-fields",
    "security_id": "test-stock-issuance-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "consideration_text": "1.00 USD and 2 tickets to Lion King",
    "custom_id": "S-1",
    "stock_class_id": "stock-class-id",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "0",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ],
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "vesting_terms_id": "4yr-1yr-cliff-schedule"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
