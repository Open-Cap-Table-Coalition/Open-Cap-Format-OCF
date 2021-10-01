# Open-Cap-Format-OCF
Data Schema and Specification for Open Cap Format (OCF)

## Schema Development Info

### Editors
- John Schrudato (Gunderson)
- Ray Shan (LTSE)
- Caroline Taymor (LTSE)
- Dan Owen (Carta)
- Eric Vogl (Carta)
- Ben Hutchings (Shareworks by Morgan Stanley)
- Jacob Yavis (Shareworks by Morgan Stanley)

### Proposed Format
- OAS 3 [(OpenAPI 3.0.3 at time of writing)](https://swagger.io/specification/)

### Recommended Editor for the openapi.json file
- Simply use [VSCode](https://code.visualstudio.com/) with the following extensions for a setup including simple schema validation, formatting and intellisense:
  - OpenAPI (Swagger) Editor
  - Prettier - Code formatter

### Schema Organization within the file
- List schemas in alphabetical order within three categories
  1. Objects describing the structure of OCF (e.g. CapTable, Issuer)
  2. Enumeration definitions (e.g. StakeholderType, ValuationType)
  3. Helper types used as common building blocks (e.g. DateTime, Name, Numeric)

### Visualization
- https://editor.swagger.io/ can be used to visualize the schemas
  - an API endpoint is included in the file to visualize the top level object as a GET response