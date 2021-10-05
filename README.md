# Open-Cap-Format-OCF
Data Schema and Specification for Open Cap Format (OCF)

## Schema Development Info

### Editors
- John Scrudato (Gunderson)
- Ray Shan (LTSE)
- Caroline Taymor (LTSE)
- Dan Owen (Carta)
- Eric Vogl (Carta)
- Ben Hutchings (Shareworks by Morgan Stanley)
- Jacob Yavis (Shareworks by Morgan Stanley)

### Proposed Format
- [JSON Schema 2020-12](https://json-schema.org/specification-links.html#2020-12)

### Recommended Editor for the openapi.json file
- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter" 

### Schema Organization
- Schemas divided into three folders
  1. `objects` describing the structure of OCF (e.g. `CapTable`, `Issuer`) -- these contain the common object properties `id` and `comments`
  2. `enums` definitions (e.g. `StakeholderType`, `ValuationType`)
  3. `types` used as common building blocks (e.g. `DateTime`, `Name`, `Numeric`)

