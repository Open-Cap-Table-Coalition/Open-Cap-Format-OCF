:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Primitive - Security Conversion Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/conversion/Conversion.schema.json`

**Description** _Abstract object describing fields common to all conversion transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type       | Description                                                                   | Required   |
| ---------------------- | ---------- | ----------------------------------------------------------------------------- | ---------- |
| resulting_security_ids | [`STRING`] | Identifier for the security (or securities) that resulted from the conversion | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/conversion/Conversion](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/primitives/objects/transactions/conversion/Conversion.schema.json)

Copyright © 2022 Open Cap Table Coalition.
