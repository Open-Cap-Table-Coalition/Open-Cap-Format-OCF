import json
import jsonschema
from pathlib import Path
from utils.validate import validate_ocf, parent_dir, logger, dump_full_ocf_schemastore

base_example_path = parent_dir / "tests" / "CapTable.BaseExample.json"
expanded_example_path = parent_dir / "tests" / "CapTable_Example.json"
broken_example_path = parent_dir / "tests" / "CapTable_ERROR_Example.json"

base_ocf_example = json.loads(open(base_example_path.resolve(), 'r').read())
broken_ocf_example = json.loads(open(broken_example_path.resolve(), 'r').read())
expanded_ocf_example = json.loads(open(expanded_example_path.resolve(), 'r').read())

logger.info(f"-------------- Check Base Valid Example File")
logger.info(f"File: {base_example_path.resolve()}")
valid = validate_ocf(
    base_ocf_example,
)
logger.info(f"Input file is valid OCF: {valid}")
logger.info("-----------------------------------------")

logger.info(f"-------------- Check Full Example Cap For Schema Integrity")
logger.info(f"File: {expanded_example_path.resolve()}")
valid = validate_ocf(
    expanded_ocf_example,
)
logger.info(f"Input file is valid OCF: {valid}")
logger.info("-----------------------------------------")

logger.info(f"\n\n-------------- Check Invalid Example File")
logger.info(f"File: {broken_example_path.resolve()}")
valid = validate_ocf(
    broken_ocf_example,
)
logger.info(f"Input file is valid OCF: {valid}")
logger.info("-----------------------------------------")

