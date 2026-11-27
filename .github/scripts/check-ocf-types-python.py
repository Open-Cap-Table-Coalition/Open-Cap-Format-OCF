"""Checks the installed `ocf_types` module by importing it, with no type checker.

CI runs this on every pull request, and the release workflow runs it on the built package
just before it publishes. It reads only names every OCF release has had since v1.0.0, so it
also holds for a package built from an older tag.
"""

from typing import get_args, get_type_hints

from typing_extensions import NotRequired

import ocf_types as ocf

# Which fields are optional, and which are read-only, survives in the built module.
assert "balance_security_id" in ocf.StockTransfer.__optional_keys__
assert "balance_security_id" not in ocf.StockTransfer.__required_keys__
assert "object_type" in ocf.Object.__readonly_keys__
hints = get_type_hints(ocf.Issuance, include_extras=True)
assert hints["board_approval_date"] == NotRequired[ocf.Date]

# An object is built from its primitives.
assert ocf.Transfer in ocf.StockTransfer.__orig_bases__

# Each primitive has a union of everything built from it. A module generated without
# recognizing the primitives has none of these, and still imports.
assert ocf.StockTransfer in get_args(ocf.AnyTransfer)
assert ocf.StockTransfer in get_args(ocf.AnyTransaction)
assert ocf.Issuer in get_args(ocf.AnyObject)

print("The installed ocf_types module has its fields, its bases and its unions.")
