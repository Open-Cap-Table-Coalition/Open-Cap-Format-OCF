### Enum - Compensation Type

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/CompensationType.schema.json`

**Description:** _Enumeration of equity compensation types (there are some things around the margins like RSAs that don't currently fit under the EquityCompensation umbrella but might arguably fall under this. If you want to create an RSA, create a stock issuance with vesting - you can link it to a plan as well, if you want).

**The enums stand for:**
1. OPTION_ISO (qualified)
2. OPTION_NSO (non-qualified)
3. OPTION (not NSO or ISO)
4. RSU (restricted share units)
5. CSAR(cash-settled stock appreciation rights)
6. SSAR(stock-settled stock appreciation rights)_

**ONE OF:**</br>&bull; OPTION_NSO </br>&bull; OPTION_ISO </br>&bull; OPTION </br>&bull; RSU </br>&bull; CSAR </br>&bull; SSAR

**Source Code:** [schema/enums/CompensationType](../../../../schema/enums/CompensationType.schema.json)

Copyright © 2025 Open Cap Table Coalition.
