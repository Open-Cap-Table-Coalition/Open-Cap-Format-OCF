import json
from pathlib import Path
from utils.validate import STAKEHOLDER, TRANSACTION, validate_ocf_file, parent_dir, logger
from utils.loader import loadJSONL, __build_ocf_archive

target_ocf_file_path = parent_dir / "tests" / "Test.ocf"

manifest_example_path = parent_dir / "tests" / "ocf" / "Manifest.json"
transaction_example_path = parent_dir / "tests" / "ocf" / "Transactions_0.jsonl"
stakeholder_example_path = parent_dir / "tests" / "ocf" / "Stakeholders_0.jsonl"

manifest_example = json.loads(open(manifest_example_path.resolve(), 'r').read())
transaction_examples = loadJSONL(transaction_example_path.resolve())
stakeholder_examples = loadJSONL(stakeholder_example_path.resolve())

logger.info(f"-------------- Check Manifest")
valid = validate_ocf_file(manifest_example)

logger.info(f"Manifest is valid OCF: {valid}")
logger.info("-----------------------------------------")

logger.info(f"\n\n-------------- Check Transactions")
valid = validate_ocf_file(transaction_examples, type=TRANSACTION)
logger.info(f"Input file is valid OCF: {valid}")
logger.info("-----------------------------------------")

logger.info(f"\n\n-------------- Check Stakeholders")
valid = validate_ocf_file(stakeholder_examples, type=STAKEHOLDER)
logger.info(f"Input file is valid OCF: {valid}")
logger.info("-----------------------------------------")

# Roundtrip an OCF File (Incomplete... only writing out for now)
logger.info(f"\n\n-------------- Writeout OCF")
__build_ocf_archive(target_ocf_file_path, manifest_example_path, [transaction_example_path], [stakeholder_example_path])
logger.info("Done!")
logger.info("-----------------------------------------")
