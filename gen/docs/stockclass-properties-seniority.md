# Untitled undefined type in Object - Stock Class Schema

```txt
https://opencaptablecoalition.com/schema/objects/stock_class#/properties/seniority
```

Seniority of the stock - determines repayment priority. Seniority is ordered by increasing number so that stock classes with a higher seniority have higher repayment priority. The following properties hold for all stock classes for a given company:
a) transitivity: stock classes are absolutely stackable by seniority and in increasing numerical order,
b) non-uniqueness: multiple stock classes can have the same Seniority number and therefore have the same liquidation/repayment order.
In practice, stock classes with same seniority may be created at different points in time and (for example, an extension of an existing preferred financing round), and also a new stock class can be created with seniority between two existing stock classes, in which case it is assigned some decimal number between the numbers representing seniority of the respective classes.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [StockClass.schema.json*](../../schema/objects/StockClass.schema.json "open original schema") |

## seniority Type

unknown
