# Stock Transfers

## Overview

Most likely, if you are modeling a real company's capitalization, someone is going to eventually want to transfer a security between one or more stakeholders. In order to achieve this, you're going to need to use one of the transfer events.

Each of our four, core security types has its own transfer event:

1. [ConvertibleTransfer](../../schema_markdown/schema/objects/transactions/transfer/ConvertibleTransfer.md)
2. [PlanSecurityTransfer](../../schema_markdown/schema/objects/transactions/transfer/PlanSecurityTransfer.md)
3. [StockTransfer](../../schema_markdown/schema/objects/transactions/transfer/StockTransfer.md)
4. [WarrantTransfer](../../schema_markdown/schema/objects/transactions/transfer/WarrantTransfer.md)

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

You'll notice that not only does the transaction object have a source `security_id`, there is also a field for `resulting_security_ids`. This should point to the **issuance(s)** that result from this transfer. So, in fact, to model a simple transfer from Bob to Alice, you need **two** events - a [StockIssuance](../../schema_markdown/schema/objects/transactions/issuance/StockIssuance.md) to Alice **and** the transfer linking Bob's stock to Alice's.

If Bob has any remaining shares following the issuance, his remaining shares get a new security_id via another issuance event and the transfer's `balance_security_id` should point to that new security_id. If Bob transfers all of his shares, nothing further is required. Anyone traversing the events should be able to see that Bob's stock was transfered in its entirety to the security_ids in `resulting_security_ids` on the transfer.

Let's walk through it in depth.

## Walkthrough

_Note: We have a company with a StockClass with ID `SeriesA` and a name of `Series A Preferred Stock`._

### 1. Initial Stock Issuance

The Company wants to issue 1,000 shares of Series A Preferred Stock to Bob Immaperson. To do this, create a [StockIssuance](../../schema_markdown/schema/objects/transactions/issuance/StockIssuance.md) event in your OCF event stack:

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

### 2. Issuance for Transferee

Now, let's say a year later, Bob wants to transfer all of his shares to Alice Hooman. Create a new issuance for Alice in your event stack:

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
      "series-a-legend"
    ]
  }
```

Again, we assume you've created a stakeholder object for Alice.

### 3. Transfer Event

Now, create the transfer to link the two security ids:

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
    }
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
        "series-a-legend"
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
        "series-a-legend"
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

## Final Notes

You can clearly see that Bob transferred all 1,000 shares of his stock here. Nothing further is required to note that the transfer is "terminal" or that nothing further remains of security with id `bob-stock-1` to dispose of.
