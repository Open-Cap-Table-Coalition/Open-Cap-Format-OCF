# File - Transactions Schema

```txt
https://opencaptablecoalition.com/schema/files/transactions_file
```

List of OCF Transactions (meant for use in validating transactions loaded into an array from a JSONL)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TransactionsFile.schema.json](../../schema/files/TransactionsFile.schema.json "open original schema") |

## File - Transactions Type

`object` ([File - Transactions](transactionsfile.md))

all of

*   [Untitled undefined type in File - Transactions](transactionsfile-allof-0.md "check type definition")

# File - Transactions Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                               |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Transactions](transactionsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/transactions_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Transactions](transactionsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/transactions_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: an array of merged types ([Details](transactionsfile-properties-items-items.md))

*   cannot be null

*   defined in: [File - Transactions](transactionsfile-properties-items.md "https://opencaptablecoalition.com/schema/files/transactions_file#/properties/items")

### items Type

an array of merged types ([Details](transactionsfile-properties-items-items.md))

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Transactions](transactionsfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/transactions_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_TRANSACTIONS_FILE"
```
