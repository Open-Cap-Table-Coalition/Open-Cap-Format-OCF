:house: [Documentation Home](/README.md)

---

### Primitive - Security Repurchase Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase`

**Description:** _Abstract object describing common properties to a repurchase transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type                                                                 | Description                                                                                                 | Required   |
| ---------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| price                  | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Repurchase price per share of the stock                                                                     | `REQUIRED` |
| quantity               | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)   | Number of shares of stock repurchased                                                                       | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Consideration for the repurchase of the stock                                                               | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                      | For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares | -          |

**Source Code:** [schema/primitives/transactions/repurchase/BaseRepurchase.schema.json](/schema/primitives/transactions/repurchase/BaseRepurchase.schema.json)

---
