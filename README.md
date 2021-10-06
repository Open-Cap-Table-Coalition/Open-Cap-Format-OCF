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
- [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) for maximum compatibility with 
  JSON Schema [implementations](https://protect-us.mimecast.com/s/bvw6ClYgmKf29D5ZHqNca4?domain=json-schema.org)

### Recommended Editor for the openapi.json file
- Simply use [VSCode](https://code.visualstudio.com/) with the "Prettier - Code formatter" 

### Schema Organization
- Schemas divided into three folders
  1. `objects` describing the structure of OCF -- these contain the common object properties `id` and `comments`
     1. [Cap Table](docs/captable.md)
     2. [Issuer](docs/issuer.md)
     3. [Stakeholder](docs/stakeholder.md)
     4. [Stock](docs/stock.md)
     5. [Stock Class](docs/stockclass.md)
     6. [Stock Plan](docs/stockplan.md)
     7. [Valuation](docs/valuation.md)
     8. [Vesting Schedule](docs/vestingscheduletemplate.md)
  2. `enums` definitions 
     1. [Address Type](docs/address-properties-address-type.md)
     2. [Email Type](docs/email-properties-email-type.md)
     3. [Time Period Type](docs/terminationwindow-properties-period-type.md)
     4. [Phone Number Type](docs/phone-properties-phone-number-type.md)
     5. [Rounding Type](docs/stockclassconversionrights-properties-rounding-type.md)
     6. [Stakeholder Type](docs/stakeholder.md#stakeholder-type)
     7. [Stock Class Type](docs/stockclass-properties-stockclass-type.md)
     8. [Termination Window Type](docs/terminationwindow-properties-terminationwindow-type.md)
     9. [Valuation Type](docs/valuation.md#valuation-type)
  3. `types` used as common building blocks 
     1. [Address](docs/address.md)
     2. [ContactInfo](docs/contactinfo.md)
     3. [DateTime](docs/datetime.md) 
     4. [Email](docs/email.md)
     5. [Money](docs/money.md)
     6. [Name](docs/name.md) 
     7. [Numeric](docs/numeric.md)
     8. [Phone](docs/phone.md)
     9. [Ratio](docs/ratio.md)
     10. [SecurityExemption](docs/securityexemption.md)
     11. [StockClassConversionRights](docs/stockclassconversionrights.md)
     12. [TaxID](docs/taxid.md)
     13. [TerminationWindow](docs/terminationwindow.md)
- Documentation generated with [jsonschema2md](https://github.com/adobe/jsonschema2md)