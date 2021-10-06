# ContactInfo Schema

```txt
Types.ContactInfo.schema.json
```

Type representation of a primary contact person for a stakeholder (e.g. a fund).

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ContactInfo.schema.json](../types/ContactInfo.schema.json "open original schema") |

## ContactInfo Type

`object` ([ContactInfo](contactinfo.md))

# ContactInfo Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                 |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [contact_first_name](#contact_first_name) | `string` | Required | cannot be null | [ContactInfo](contactinfo-properties-contact_first_name.md "Types.ContactInfo.schema.json#/properties/contact_first_name") |
| [contact_last_name](#contact_last_name)   | `string` | Required | cannot be null | [ContactInfo](contactinfo-properties-contact_last_name.md "Types.ContactInfo.schema.json#/properties/contact_last_name")   |

## contact_first_name

Contact's first name

`contact_first_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ContactInfo](contactinfo-properties-contact_first_name.md "Types.ContactInfo.schema.json#/properties/contact_first_name")

### contact_first_name Type

`string`

## contact_last_name

Contact's last name

`contact_last_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ContactInfo](contactinfo-properties-contact_last_name.md "Types.ContactInfo.schema.json#/properties/contact_last_name")

### contact_last_name Type

`string`
