"""Mistakes the OCF types are meant to catch. A type checker must reject every marked line.

Each mistake carries a `# type: ignore`. CI runs pyright and mypy over this file with unused
ignores reported as errors, so the check fails if a mistake stops being caught.
"""

import ocf_types as ocf


def misspelt_field(transfer: ocf.StockTransfer) -> object:
    return transfer["quantitty"]  # type: ignore


def field_only_some_transfers_have(transfer: ocf.AnyTransfer) -> object:
    # A convertible transfer has an amount, not a quantity.
    return transfer["quantity"]  # type: ignore


def optional_field_read_as_required(transfer: ocf.StockTransfer) -> str:
    return transfer.get("balance_security_id")  # type: ignore


WRONG_OBJECT_TYPE: ocf.Issuer = {
    "object_type": "STOCK_CLASS",  # type: ignore
    "id": "issuer",
    "legal_name": "Example Co",
    "formation_date": "2022-01-03",
    "country_of_formation": "US",
}

MISSING_REQUIRED_FIELD: ocf.StockTransfer = {  # type: ignore
    "object_type": "TX_STOCK_TRANSFER",
    "id": "tx-1",
    "date": "2024-01-02",
    "security_id": "cs-1",
    "resulting_security_ids": ["cs-2"],
}

NOT_A_VALUE_OF_THE_ENUM: ocf.StockClassType = "ORDINARY"  # type: ignore
