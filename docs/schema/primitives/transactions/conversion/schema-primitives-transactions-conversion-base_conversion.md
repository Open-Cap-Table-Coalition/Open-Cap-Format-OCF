:house: [Documentation Home](/README.md)

---

### Primitive - Security Conversion Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion`

**Description:** _Abstract object describing fields common to all conversion transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type            | Description                                                                   | Required   |
| ---------------------- | --------------- | ----------------------------------------------------------------------------- | ---------- |
| resulting_security_ids | [`STRING`]</br> | Identifier for the security (or securities) that resulted from the conversion | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/conversion/BaseConversion.schema.json](/schema/primitives/transactions/conversion/BaseConversion.schema.json)

---
