:house: [Documentation Home](../../README.md)

# OCF - Getting Started with Issuances

## Overview

This is a minimalist example of a cap table may be exported, if it contains a single stock plan, single stakeholder, and issued some shares to that stakeholder.

While an issuance is an event, it references a few static objects: a stakeholder, a stock class, and a stock legend. It's important to remember that Objects and Events have different semantics - all events act on one or more objects.

## Exporting Static Data

First we define our [Stakeholder](../../schema_markdown/schema/objects/Stakeholder.md), Jim Jangles. We could make up a UUID on the fly, as long as it's consistent across this export, or we could use our internal id. This object would go into the `Stakeholders.ocf.json` file.

```json
{
  "object_type": "STAKEHOLDER",
  "id": "be7d1e2e-0c9c-485b-a27d-a5c982c4e659",
  "name": { "legal_name": "Jim Jangles" },
  "stakeholder_type": "INDIVIDUAL"
}
```

Next, we define our [StockClass](../../schema_markdown/schema/objects/StockClass.md). It's a very simple, minimal stock class for preferred shares. This object would go into the `StockClasses.ocf.json` file.

```json
{
  "object_type": "STOCK_CLASS",
  "id": "0c21a4fd-f758-4e8a-b0ec-3fab5a5dc452",
  "name": "Preferred Shares",
  "class_type": "PREFERRED",
  "default_id_prefix": "PS-",
  "initial_shares_authorized": "100000.00",
  "votes_per_share": "1",
  "seniority": "1"
}
```

We're also going to need the [StockLegend](../../schema_markdown/schema/objects/StockLegendTemplate.md), which is likely defined once and referenced across most shares. This object would go into the `StockLegends.ocf.json` file.

```json
{
  "object_type": "STOCK_LEGEND_TEMPLATE",
  "id": "650a3a80-868a-411b-b3c0-03ea6a1773ea",
  "name": "1933 Act Legend",
  "text": "THE SHARES REPRESENTED ... ACT OF 1933."
}
```

## Exporting Issuance Event

Now we export a record of the [StockIssuance](../../schema_markdown/schema/objects/transactions/issuance/StockIssuance.md) event. This ties together the stock we have defined with the stakeholder Jim Jangles, allowing us to issue 5000 shares to him. The lack of vesting terms indicates these shares are fully vested upon issuance. This **event** would go into the `Transactions.ocf.json` file.

Note the stakeholder_id is the UUID we gave Jim initially, the stock_class_id is the UUID we gave the stock class, and the stock_legend_ids is the UUID we gave the stock legend. However, the security_id is new - it identifies this event.

```json
{
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "issued-shares-to-jim",
    "security_id": "b39558bf-07cf-403a-8d07-a17dd9b651e0",
    "date": "2022-01-01",
    "security_law_exemptions": [],
    "stakeholder_id": "be7d1e2e-0c9c-485b-a27d-a5c982c4e659",
    "custom_id": "PS-1",
    "stock_class_id": "0c21a4fd-f758-4e8a-b0ec-3fab5a5dc452",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "5000",
    "cost_basis": {
      "amount": "1.00",
      "currency": "USD"
    },
    "stock_legend_ids": ["650a3a80-868a-411b-b3c0-03ea6a1773ea" ]
  },
```

## Finishing with a Manifest

No OCF export is complete without a manifest describing the issuer (aka, the company). There's only a few critically required fields, though the more you fill out, the better.

It will also need to include md5 hashes and references to the other files mentioned, as it's the "starting point" of the format.

```json
{
  "object_type": "ISSUER",
  "id": "07450528-10c4-4f38-855b-defe92563546",
  "legal_name": "Aperture Science, Inc.",
  "formation_date": "1940-09-25",
  "country_of_formation": "US",
  "country_subdivision_of_formation": "MI"
}
```

## Validate Your OCF

Our current validation tools will check that your OCF files have the appropriate data shapes / schemas. We are working on additional tooling to check internal id references and cap table constraints, but this second-order validation is currently not ready for release.

To check your OCF files, you can point our TypeScript validation tool at your sample directory. Assuming you're running your terminal / shell from the root of this repository (and you've first run `nvm use` and `npm install`), to validate the examples for this walkthrough, type:

```commandline
node ./utils/validate.mjs validate-ocf-directory -v -p ./docs/tutorials/quickstart/samples -t
```

## Bundle into final format

Once all the files are assembled into a folder (as demonstrated in this [Directory](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/docs/tutorials/quickstart/samples)), you'll need to generate the md5 hashes of these files to reference them in the manifest file (use `md5 *.json` on macos), and finally zip them into a file with the `.ocf.zip` extension, as demonstrated with this [ZipFile](./issuance_aperture_science_inc.ocf.zip).
