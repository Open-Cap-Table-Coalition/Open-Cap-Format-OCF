:house: [Documentation Home](../../../../../README.md)

---

### Object - Equity Compensation Release Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/release/EquityCompensationRelease.schema.json`

**Description:** _Object describing equity compensation security release transaction_

**Data Type:** `Multiple Supported for Backwards Compatibility`</br>`OCF Object - TX_PLAN_SECURITY_RELEASE``OCF Object - TX_EQUITY_COMPENSATION_RELEASE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/release/Release](../../../primitives/objects/transactions/release/Release.md)

**Properties:**

| Property               | Type                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                                                           | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                                                         | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **ONE OF the Following Types/Objs:**</br>&bull; **Constant:** `TX_PLAN_SECURITY_RELEASE`</br>&bull; **Constant:** `TX_EQUITY_COMPENSATION_RELEASE` | This is done to avoid a breaking change as we work towards a bigger restructure of the equity types in v2.0.0. `TX_PLAN_SECURITY_RELEASE` will be deprecated in v2.0.0                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                                                        | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                                                           | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| settlement_date        | [schema/types/Date](../../../types/Date.md)                                                                                                        | The settlement date for the shares released, typically after the release transaction date                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| release_price          | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                | The release price used to determine the value of the security at the time of release                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| quantity               | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                  | Quantity of shares released                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| consideration_text     | `STRING`                                                                                                                                           | Unstructured text description of consideration provided in exchange for security release                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| resulting_security_ids | [`STRING`]                                                                                                                                         | Identifier of the new security (or securities) issuance resulting from a release transaction                                                                                                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |

**Source Code:** [schema/objects/transactions/release/EquityCompensationRelease](../../../../../../schema/objects/transactions/release/EquityCompensationRelease.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_RELEASE",
    "id": "test-plan-security-release-minimal",
    "security_id": "387878ba-8fb6-4673-812e-32c092947899",
    "date": "2017-07-22",
    "settlement_date": "2017-07-22",
    "quantity": "9000",
    "release_price": {
      "amount": "9.00",
      "currency": "CAD"
    },
    "resulting_security_ids": []
  },
  {
    "object_type": "TX_PLAN_SECURITY_RELEASE",
    "id": "test-plan-security-release-full-fields",
    "security_id": "387878ba-8fb6-4673-812e-32c092947899",
    "date": "2017-07-22",
    "settlement_date": "2017-07-25",
    "quantity": "9000",
    "release_price": {
      "amount": "9.00",
      "currency": "CAD"
    },
    "consideration_text": "9.00 CAD",
    "comments": [
      "Release the securities"
    ],
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2"
    ]
  }
]
```

Copyright © 2023 Open Cap Table Coalition.
