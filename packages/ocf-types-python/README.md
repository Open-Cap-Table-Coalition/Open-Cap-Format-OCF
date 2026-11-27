# ocf-types

Python types for the
[Open Cap Format (OCF)](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF), generated
directly from the OCF JSON Schemas.

> **Generated. Do not edit by hand.** `ocf_types/__init__.py` is produced by
> `npm run build:ocf-types-python` from the schemas under [`/schema`](../../schema). It is built at
> release time and is _not_ committed to the repository.

This is the Python counterpart of [`@opencaptablecoalition/ocf-types`](../ocf-types), the TypeScript
types.

## Install

```bash
pip install ocf-types
```

The package version is the OCF schema release it was generated from: `ocf-types==1.2.0` has the
types for OCF `v1.2.0`. It needs Python 3.10 or later and depends only on `typing_extensions`.

## Usage

```python
import ocf_types as ocf


def quantity_transferred(transfer: ocf.StockTransfer) -> str:
    return transfer["quantity"]


issuer: ocf.Issuer = {
    "object_type": "ISSUER",
    "id": "issuer",
    "legal_name": "Example Co",
    "formation_date": "2022-01-03",
    "country_of_formation": "US",
}
```

Every type is a `TypedDict`, a `Literal` or a union of those, so an OCF object stays the plain
`dict` that `json.load` gives you. The package adds no behaviour at run time.

## What's included

One named type per OCF schema:

-   **Objects, types and file wrappers** are `TypedDict` classes. A field the schema does not
    require is `NotRequired`.
-   **Enums** are `Literal` types: `StockClassType = Literal["COMMON", "PREFERRED"]`.
-   **Scalar types** are aliases: `Numeric = str`, `Date = str`.
-   **Versioned schemas** are the union of their versions:
    `EquityCompensationIssuance = EquityCompensationIssuanceV1 | EquityCompensationIssuanceV2`.

### Objects are built the way OCF builds them

OCF composes each object from primitives with `allOf`. The Python types keep that, where the
TypeScript types flatten it:

```python
class Transfer(TypedDict):
    balance_security_id: NotRequired[str]
    resulting_security_ids: list[str]


class StockTransfer(Object, Transaction, SecurityTransaction, Transfer):
    object_type: Literal["TX_STOCK_TRANSFER"]
    quantity: Numeric
```

So a function that takes a `Transfer` accepts a stock, convertible, warrant or equity compensation
transfer.

For each primitive there is also a union of everything built from it, named `Any` plus the
primitive: `AnyTransfer`, `AnyIssuance`, `AnyTransaction`, `AnyObject`, `AnyConversionTrigger`. Use
one when code handles every member and should be checked against the fields they share:

```python
def results(transfer: ocf.AnyTransfer) -> list[str]:
    return transfer["resulting_security_ids"]  # every transfer has this


def quantity(transfer: ocf.AnyTransfer) -> str:
    return transfer["quantity"]  # error: a convertible transfer has an amount, not a quantity
```

### Names

The names are the ones the TypeScript types use, without the `OCF` prefix: `StockIssuance` here is
`OCFStockIssuance` there. A Python module is its own namespace, so `import ocf_types as ocf` gives
`ocf.StockIssuance`. To generate with the prefix, pass `--prefix OCF` to
`npm run schema:gen-python-types`.

## What the types do not check

A type says which fields an object has and what each holds. It cannot say everything a JSON Schema
does. These are not represented:

-   patterns and formats (a `Numeric` or a `Date` is a `str`);
-   minimums and other limits on a value;
-   conditional requirements, such as "an option has an `exercise_price`";
-   that no other field is allowed.

Validate OCF data against the JSON Schemas for full correctness, for example with
[`@open-captable/cli`](https://www.npmjs.com/package/@open-captable/cli). Treat a value as its OCF
type once it has passed.

## Type checkers

The types are checked in CI with **pyright** and **mypy** in strict mode, as an installed package:
correct uses must pass, and a set of deliberate mistakes must each be reported.

A schema often narrows a field of a schema it is built from: every object narrows `object_type` from
the `ObjectType` enum to its own value. The types allow that by declaring such a field `ReadOnly` in
the base class ([PEP 705](https://peps.python.org/pep-0705/)).

An older mypy does not accept that narrowing when it checks the module's own source: mypy 1.18.2
reports "Overwriting TypedDict field", and mypy 2.4.1 does not. This does not affect an installed
package, which mypy does not report on. It matters only if you copy `ocf_types` into your own source
tree. As an installed package the types were tested with mypy 1.18.2 and 2.4.1, and pyright 1.1.414.

## License

Generated from the OCF schemas. See [LICENSE.md](LICENSE.md).
