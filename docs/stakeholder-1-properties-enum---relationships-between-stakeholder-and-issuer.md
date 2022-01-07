# Enum - Relationships between stakeholder and issuer Schema

```txt
Enums.StakeholderRelationship.schema.json#/properties/current_relationship
```

Enumeration of types of relationships

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Stakeholder.schema.json\*](../schema/objects/Stakeholder.schema.json "open original schema") |

## current_relationship Type

`string` ([Enum - Relationships between stakeholder and issuer](stakeholder-1-properties-enum---relationships-between-stakeholder-and-issuer.md))

## current_relationship Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"ADVISOR"`         |             |
| `"BOARD_MEMBER"`    |             |
| `"CONSULTANT"`      |             |
| `"EMPLOYEE"`        |             |
| `"EX_ADVISOR"`      |             |
| `"EX_CONSULTANT"`   |             |
| `"EX_EMPLOYEE"`     |             |
| `"EXECUTIVE"`       |             |
| `"FOUNDER"`         |             |
| `"INVESTOR"`        |             |
| `"NON_US_EMPLOYEE"` |             |
| `"OFFICER"`         |             |
| `"OTHER"`           |             |
