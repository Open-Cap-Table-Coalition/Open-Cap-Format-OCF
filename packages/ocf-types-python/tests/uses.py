"""Correct uses of the OCF types. A type checker must accept every line.

CI runs pyright and mypy over this file in strict mode, against the built package.
"""

from typing import Literal

import ocf_types as ocf


def quantity(transfer: ocf.StockTransfer) -> str:
    return transfer["quantity"]


def results(transfer: ocf.AnyTransfer) -> list[str]:
    # Every transfer is built from Transfer, so every one has this field.
    return transfer["resulting_security_ids"]


def balance(transfer: ocf.AnyTransfer) -> str | None:
    return transfer.get("balance_security_id")


def as_its_primitive(transfer: ocf.StockTransfer) -> ocf.Transfer:
    # An object is each of the schemas it is built from.
    return transfer


def security(transaction: ocf.AnySecurityTransaction) -> str:
    return transaction["security_id"]


def told_apart_by_object_type(item: ocf.StockIssuance | ocf.StockTransfer) -> str:
    if item["object_type"] == "TX_STOCK_ISSUANCE":
        return item["stock_class_id"]
    return item["quantity"]


def start_of(trigger: ocf.AnyConversionTrigger) -> str | None:
    return trigger["start_date"] if trigger["type"] == "ELECTIVE_IN_RANGE" else None


def older_name(issuance: ocf.PlanSecurityIssuance) -> ocf.EquityCompensationIssuance:
    return issuance


def legacy_discriminator(issuance: ocf.PlanSecurityIssuance) -> Literal["TX_PLAN_SECURITY_ISSUANCE"]:
    return issuance["object_type"]


ISSUER: ocf.Issuer = {
    "object_type": "ISSUER",
    "id": "issuer",
    "legal_name": "Example Co",
    "formation_date": "2022-01-03",
    "country_of_formation": "US",
}

TRANSFER: ocf.StockTransfer = {
    "object_type": "TX_STOCK_TRANSFER",
    "id": "tx-1",
    "date": "2024-01-02",
    "security_id": "cs-1",
    "quantity": "100",
    "resulting_security_ids": ["cs-2"],
}
