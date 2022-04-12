:house: [Documentation Home](/README.md)

---

### Primitive - Security Conversion Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/conversion/BaseConversion.schema.json`

**Description** _Abstract object describing fields common to all conversion transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                              | Required   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------- |
| resulting_security_ids      | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier for the security (or securities) that resulted from the conversion            | `REQUIRED` |
| conversion_calculation_type | `Enum - Conversion Calculation Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types. We currently support:</br>1) `RATIO` - units of source security to units of target Stock Class</br>2) `FIXED` - converts to a fixed number of shares of Stock Class, and</br>3) `CUSTOM` - conversion cannot be structured in OCF.`</br></br>**ONE OF:** </br>&bull; FIXED </br>&bull; RATIO </br>&bull; CUSTOM | What type of conversion calculation was used to determine the resulting security amounts | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/conversion/BaseConversion](/schema/primitives/transactions/conversion/BaseConversion.schema.json)
