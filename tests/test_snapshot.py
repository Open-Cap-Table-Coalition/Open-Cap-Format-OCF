import json
import jsonschema
from pathlib import Path
from utils.validate import validate_snapshot, parent_dir, snapshot_schema

snapshot_instance = {}

example = parent_dir / "tests" / "CapTable_Example.json"
broken_example = parent_dir / "tests" / "CapTable_ERROR_Example.json"

broken_snapshot_instance = json.loads(open(broken_example.absolute(), 'r').read())
snapshot_instance = json.loads(open(example.absolute(), 'r').read())
schema = json.loads(open(snapshot_schema.absolute(), 'r').read())

print(f"-------------- Check Valid Example File")
print(f"File: {example.absolute()}")
valid = validate_snapshot(
    snapshot_instance,
    schema,
)
print(f"Input file is valid OCF: {valid}")
print("-----------------------------------------")

print(f"\n\n-------------- Check Invalid Example File")
print(f"File: {broken_example.absolute()}")
valid = validate_snapshot(
    broken_snapshot_instance,
    schema,
)
print(f"Input file is valid OCF: {valid}")
print("-----------------------------------------")

