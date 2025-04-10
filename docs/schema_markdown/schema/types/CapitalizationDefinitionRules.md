### Type - Capitalization Definition Rules

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/CapitalizationDefinitionRules.schema.json`

_Type represents the rules for determining the capitalization definition for a security_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                                       | Type      | Description                                                                                                                                         | Required   |
| ---------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| include_outstanding_shares                     | `BOOLEAN` | Include all outstanding share issuances in the capitalization definition                                                                            | `REQUIRED` |
| include_outstanding_options                    | `BOOLEAN` | Include all outstanding options in the capitalization definition                                                                                    | `REQUIRED` |
| include_outstanding_unissued_options           | `BOOLEAN` | Include all outstanding options that have been reserved but have not been issued yet in the capitalization definition                               | `REQUIRED` |
| include_this_security                          | `BOOLEAN` | Include the shares issued for converting this security in the capitalization definition                                                             | `REQUIRED` |
| include_other_converting_securities            | `BOOLEAN` | Include the shares issued for converting all other convertibles that are converted as part of the conversion event in the capitalization definition | `REQUIRED` |
| include_option_pool_topup_for_promised_options | `BOOLEAN` | Include the shares reserved for increasing option plans to cover all promised options in the capitalization definition                              | `REQUIRED` |
| include_additional_option_pool_topup           | `BOOLEAN` | Include the shares reserved for increasing option plans beyond the amount needed for any promised options in the capitalization definition          | `REQUIRED` |
| include_new_money                              | `BOOLEAN` | Include the shares issued for any new share subscriptions that are part of the conversion event in the capitalization definition                    | `REQUIRED` |

**Source Code:** [schema/types/CapitalizationDefinitionRules](../../../../schema/types/CapitalizationDefinitionRules.schema.json)

Copyright © 2025 Open Cap Table Coalition.
