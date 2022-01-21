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

logger.info("Check Base Valid Example File")
logger.info(f"File: {base_example_path.resolve()}")
valid_base = validate_ocf(base_ocf_example)
logger.info(f"Input file is valid OCF: {valid_base}")

logger.info("Check Full Example Cap For Schema Integrity")
logger.info(f"File: {expanded_example_path.resolve()}")
valid_example = validate_ocf(expanded_ocf_example)
logger.info(f"Input file is valid OCF: {valid_example}")

logger.info("Check Invalid Example File")
logger.info(f"File: {broken_example_path.resolve()}")
valid_bad_file = validate_ocf(broken_ocf_example)
logger.info(f"Input file is valid OCF: {valid_bad_file}")

if valid_base and valid_example and (not valid_bad_file):
    logger.info("All tests passed")
    exit(0)

logger.error("Validation results did not match expectations")
logger.info(f"CapTable.BaseExample.json: expected True got {valid_base}")
logger.info(f"CapTable_Example.json: expected True got {valid_example}")
logger.info(f"CapTable_ERROR_Example: expected False got {valid_bad_file}")

exit(1)
