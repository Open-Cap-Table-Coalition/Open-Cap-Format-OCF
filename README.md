# Open-Cap-Format-OCF
Data Schema and Specification for Open Cap Format (OCF)

## Schema Development Info

### Editors
- John Scrudato (Gunderson Dettmer)
- Ray Shan (LTSE)
- Caroline Taymor (LTSE)
- Dan Owen (Carta)
- Eric Vogl (Carta)
- Ben Hutchings (Shareworks by Morgan Stanley)
- Jacob Yavis (Shareworks by Morgan Stanley)

### Proposed Format
- [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) - *The latest 2020-12 version of JSON
  Schema is not yet fully supported in our toolchain. Jsonschema2md supports 2019-09 and Python's implementation of 
  jsonschema only offers full support through Draft 7.*

### Recommended Editor for the openapi.json file
- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter" 

### Schema Organization
- Schemas divided into three folders
  1. `objects` describing the structure of OCF -- these contain the common object properties `id` and `comments`
     1. [CapTable](docs/captable.md)
     2. [Issuer](docs/issuer.md)
  2. `enums` definitions 
     1. [StakeholderType](docs/stakeholder.md#stakeholder-type)
     2. [ValuationType](docs/valuation.md#valuation-type)
  3. `types` used as common building blocks 
     1. [DateTime](docs/datetime.md) 
     2. [Name](docs/name.md) 
     3. [Numeric](docs/numeric.md)
- Documentation generated with [jsonschema2md](https://github.com/adobe/jsonschema2md)