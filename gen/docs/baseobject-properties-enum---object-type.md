# Enum - Object Type Schema

```txt
Enums.Object.schema.json#/properties/object_type
```

Enumeration of object types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [BaseObject.schema.json*](../../schema/primitives/BaseObject.schema.json "open original schema") |

## object_type Type

`string` ([Enum - Object Type](baseobject-properties-enum---object-type.md))

## object_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                             | Explanation |
| :-------------------------------- | :---------- |
| `"ISSUER"`                        |             |
| `"STAKEHOLDER"`                   |             |
| `"STOCK_CLASS"`                   |             |
| `"STOCK_LEGEND_TEMPLATE"`         |             |
| `"STOCK_PLAN"`                    |             |
| `"VALUATION"`                     |             |
| `"VESTING_SCHEDULE"`              |             |
| `"TX_STOCK_ISSUANCE"`             |             |
| `"TX_STOCK_REISSUANCE"`           |             |
| `"TX_STOCK_ACCEPTANCE"`           |             |
| `"TX_STOCK_CANCELLATION"`         |             |
| `"TX_STOCK_REPURCHASE"`           |             |
| `"TX_STOCK_SPLIT"`                |             |
| `"TX_PLAN_SECURITY_ISSUANCE"`     |             |
| `"TX_PLAN_SECURITY_ACCEPTANCE"`   |             |
| `"TX_PLAN_SECURITY_CANCELLATION"` |             |
| `"TX_PLAN_SECURITY_SPLIT"`        |             |
| `"TX_WARRANT_ISSUANCE"`           |             |
| `"TX_WARRANT_ACCEPTANCE"`         |             |
| `"TX_WARRANT_CANCELLATION"`       |             |
| `"TX_WARRANT_SPLIT"`              |             |
| `"TX_CONVERTIBLE_ISSUANCE"`       |             |
| `"TX_CONVERTIBLE_ACCEPTANCE"`     |             |
| `"TX_CONVERTIBLE_CANCELLATION"`   |             |
