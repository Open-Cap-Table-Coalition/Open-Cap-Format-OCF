### Type - Profile or vendor extension declaration

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/ProfileDeclaration.schema.json`

_Declares a coalition profile or vendor extension id and the concrete semver version of its schema used in this package_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type     | Description                                                | Required   |
| -------- | -------- | ---------------------------------------------------------- | ---------- |
| id       | `STRING` | Profile or vendor extension identifier (dotted convention) | `REQUIRED` |
| version  | `STRING` | Semantic version of the profile or vendor extension schema | `REQUIRED` |

**Source Code:** [schema/types/ProfileDeclaration](../../../../schema/types/ProfileDeclaration.schema.json)

Copyright © 2026 Open Cap Table Coalition.
