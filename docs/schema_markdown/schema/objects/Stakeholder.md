### Object - Stakeholder

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Stakeholder.schema.json`

**Description:** _Object describing a stakeholder_

**Data Type:** `OCF Object - STAKEHOLDER`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                        | Required   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                    | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Identifier for the object                                                                                                          | `REQUIRED` |
| comments              | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Unstructured text comments related to and stored for the object                                                                    | -          |
| object_type           | **Constant:** `STAKEHOLDER`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                | Object type field                                                                                                                  | `REQUIRED` |
| name                  | [schema/types/Name](../types/Name.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Name for the stakeholder                                                                                                           | `REQUIRED` |
| stakeholder_type      | `Enum - Stakeholder Type`</br></br>_Description:_ Enumeration of stakeholder types - individual (human) or institution (entity)</br></br>**ONE OF:** </br>&bull; INDIVIDUAL </br>&bull; INSTITUTION                                                                                                                                                                                                                                                                                                           | Distinguish individuals from institutions                                                                                          | `REQUIRED` |
| issuer_assigned_id    | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | This might be any sort of id assigned to the stakeholder by the issuer, such as an internal company ID for an employee stakeholder | -          |
| current_relationship  | `Enum - Stakeholder Relationship Type`</br></br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br></br>**ONE OF:** </br>&bull; ADVISOR </br>&bull; BOARD_MEMBER </br>&bull; CONSULTANT </br>&bull; EMPLOYEE </br>&bull; EX_ADVISOR </br>&bull; EX_CONSULTANT </br>&bull; EX_EMPLOYEE </br>&bull; EXECUTIVE </br>&bull; FOUNDER </br>&bull; INVESTOR </br>&bull; NON_US_EMPLOYEE </br>&bull; OFFICER </br>&bull; OTHER                                                   | What is the current relationship of the stakeholder to the issuer?                                                                 | -          |
| current_relationships | [ `Enum - Stakeholder Relationship Type`</br></br>_Description:_ Enumeration of types of relationships between stakeholder and issuer</br></br>**ONE OF:** </br>&bull; ADVISOR </br>&bull; BOARD_MEMBER </br>&bull; CONSULTANT </br>&bull; EMPLOYEE </br>&bull; EX_ADVISOR </br>&bull; EX_CONSULTANT </br>&bull; EX_EMPLOYEE </br>&bull; EXECUTIVE </br>&bull; FOUNDER </br>&bull; INVESTOR </br>&bull; NON_US_EMPLOYEE </br>&bull; OFFICER </br>&bull; OTHER ]                                               | What is/are the current relationship(s) of the stakeholder to the issuer?                                                          | -          |
| current_status        | `Enum - Stakeholder Status Type`</br></br>_Description:_ Enumeration of types of activity statuses for a stakeholder</br></br>**ONE OF:** </br>&bull; ACTIVE </br>&bull; LEAVE_OF_ABSENCE </br>&bull; TERMINATION_VOLUNTARY_OTHER </br>&bull; TERMINATION_VOLUNTARY_GOOD_CAUSE </br>&bull; TERMINATION_VOLUNTARY_RETIREMENT </br>&bull; TERMINATION_INVOLUNTARY_OTHER </br>&bull; TERMINATION_INVOLUNTARY_DEATH </br>&bull; TERMINATION_INVOLUNTARY_DISABILITY </br>&bull; TERMINATION_INVOLUNTARY_WITH_CAUSE | What is the current activity status of the stakeholder?                                                                            | -          |
| primary_contact       | [schema/types/ContactInfo](../types/ContactInfo.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                           | The primary contact info for an institutional stakeholder                                                                          | -          |
| contact_info          | [schema/types/ContactInfoWithoutName](../types/ContactInfoWithoutName.md)                                                                                                                                                                                                                                                                                                                                                                                                                                     | The contact info for an individual stakeholder                                                                                     | -          |
| addresses             | [ [schema/types/Address](../types/Address.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Addresses for the stakeholder                                                                                                      | -          |
| tax_ids               | [ [schema/types/TaxID](../types/TaxID.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The tax ids for this stakeholder                                                                                                   | -          |

**Source Code:** [schema/objects/Stakeholder](../../../../schema/objects/Stakeholder.schema.json)

**Examples:**

```json
[
  {
    "object_type": "STAKEHOLDER",
    "id": "stakeholder-sample-individual-all-fields",
    "name": {
      "legal_name": "Person X",
      "first_name": "Person",
      "last_name": "X"
    },
    "stakeholder_type": "INDIVIDUAL",
    "issuer_assigned_id": "Employee-1",
    "current_relationships": [
      "EMPLOYEE"
    ],
    "current_status": "LEAVE_OF_ABSENCE",
    "contact_info": {
      "phone_numbers": [
        {
          "phone_type": "MOBILE",
          "phone_number": "+1 316 555 6789"
        },
        {
          "phone_type": "BUSINESS",
          "phone_number": "+1 316 555 1234"
        }
      ],
      "emails": [
        {
          "email_type": "PERSONAL",
          "email_address": "personal@test.email"
        },
        {
          "email_type": "BUSINESS",
          "email_address": "company@test.email"
        }
      ]
    },
    "addresses": [
      {
        "address_type": "LEGAL",
        "street_suite": "123 Abc St.",
        "city": "Cityville",
        "country_subdivision": "TX",
        "country": "US",
        "postal_code": "12345"
      },
      {
        "address_type": "CONTACT",
        "street_suite": "P.O. Box 404",
        "city": "Cityville",
        "country_subdivision": "TX",
        "country": "US",
        "postal_code": "12345"
      }
    ],
    "tax_ids": [
      {
        "tax_id": "256-33-1234",
        "country": "US"
      }
    ],
    "comments": [
      "comment-one",
      "comment-two"
    ]
  },
  {
    "object_type": "STAKEHOLDER",
    "id": "stakeholder-sample-institution-all-fields",
    "name": {
      "legal_name": "XYZ Holdings Fund III"
    },
    "stakeholder_type": "INSTITUTION",
    "issuer_assigned_id": "Entity-1",
    "current_relationships": [
      "INVESTOR",
      "CONSULTANT",
      "EX_EMPLOYEE"
    ],
    "current_status": "ACTIVE",
    "primary_contact": {
      "name": {
        "legal_name": "Todd Fund Manager",
        "first_name": "Todd",
        "last_name": "Fund Manager"
      },
      "phone_numbers": [
        {
          "phone_type": "MOBILE",
          "phone_number": "+1 313 555 6789"
        }
      ],
      "emails": [
        {
          "email_type": "PERSONAL",
          "email_address": "toddfundmanager@test.email"
        }
      ]
    },
    "addresses": [
      {
        "address_type": "LEGAL",
        "street_suite": "456 Xyz St.",
        "city": "Cityville",
        "country_subdivision": "NV",
        "country": "US",
        "postal_code": "67890"
      }
    ],
    "tax_ids": [
      {
        "tax_id": "256-33-5678",
        "country": "US"
      }
    ],
    "comments": [
      "comment-one",
      "comment-two"
    ]
  },
  {
    "object_type": "STAKEHOLDER",
    "id": "stakeholder-sample-minimal-fields",
    "name": {
      "legal_name": "XYZ Holdings Fund IV"
    },
    "stakeholder_type": "INSTITUTION",
    "comments": []
  },
  {
    "object_type": "STAKEHOLDER",
    "id": "d6c49a5a-257d-4b41-9f1d-073a77dfe719",
    "name": {
      "legal_name": "Person Y"
    },
    "stakeholder_type": "INDIVIDUAL",
    "contact_info": {
      "phone_numbers": [
        {
          "phone_type": "HOME",
          "phone_number": "+1 617 333 4444 ext. 100"
        },
        {
          "phone_type": "BUSINESS",
          "phone_number": "+1 800 333 1212 extension 200"
        }
      ]
    },
    "comments": []
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
