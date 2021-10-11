# Type - DateTime Schema

```txt
Types.DateTime.schema.json#/properties/formation_date
```

Type representing an instant in Universal Coordinated Time (UTC)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Issuer.schema.json*](../out/objects/Issuer.schema.json "open original schema") |

## formation_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

# formation_date Properties

| Property                      | Type      | Required | Nullable       | Defined by                                                                                                   |
| :---------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------- |
| [epoch_millis](#epoch_millis) | `integer` | Required | cannot be null | [Type - DateTime](datetime-properties-epoch_millis.md "Types.DateTime.schema.json#/properties/epoch_millis") |

## epoch_millis

Number of milliseconds elapsed since Unix epoch

`epoch_millis`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - DateTime](datetime-properties-epoch_millis.md "Types.DateTime.schema.json#/properties/epoch_millis")

### epoch_millis Type

`integer`

### epoch_millis Constraints

**unknown format**: the value of this string must follow the format: `int64`
