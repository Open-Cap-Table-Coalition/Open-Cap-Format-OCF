import json
import io
import zipfile
import hashlib
from pathlib import Path
from zipfile import ZipFile

from .validate import logger, validate_ocf_file, TRANSACTION, STAKEHOLDER

blocksize = 1024**2  #1M chunks

def dumpObjectJSONL(objects, filepath):
    """Utility function to save a list of JSON objects as a jsonl file.

    Args:
        objects (JSONs): List of valid JSONs
        filepath (Path): Path to the location you want to save the jsonl.
    """
    with open(filepath, 'w') as outfile:
        for entry in objects:
            json.dump(entry, outfile)
            outfile.write('\n')


def loadJSONL(filepath):
    """Utility to load list of JSONs from a jsonl file.

    Args:
        filepath (Path): Path to the jsonl file you want to load

    Returns:
        List(JSON): List of JSON objects
    """
    with open(filepath, 'r') as json_file:
        json_list = list(json_file)
    
    return [json.loads(json_str) for json_str in json_list]


def __build_ocf_archive(target_path, manifest_path, transaction_paths, stakeholder_paths):
    """Utility function to validate and write out OCF manifest, transaction files
       and stakeholder files.

    Args:
        target_path (Path): Target location of the resulting .ocf file.
        manifest_path (Path): Path to your manifest json file.
        transaction_paths (List(Path)): List of Paths to your transaction jsonl files.
        stakeholder_paths (List(Path)): List of Paths to your stakeolder jsonl files.

    """
    # Variables to store zip archive in memory
    ocf_bytes = io.BytesIO()
    ocf_file = ZipFile(ocf_bytes, mode='w', compression=zipfile.ZIP_DEFLATED)

    # First, read in the manifest (NOTE: I'm going to do more error checking throughout if we like this approach)
    if not isinstance(manifest_path, Path):
        raise ValueError("Manifest path must be a Path object")
    else:
        logger.debug(f"\Manifest filename: {manifest_path.name}")
        if manifest_path.is_dir() or manifest_path.name[-5:] != ".json":
            raise ValueError("Manifest path is a directory or doesn't ended in .json")
        else:
            manifest = json.loads(open(manifest_path.resolve(), 'r').read())

    # Validate transaction files, calculate md5s and add to transaction_files array
    transaction_files = []
    for transaction_path in transaction_paths:
        stakeholder_example = loadJSONL(transaction_path.resolve())
        validate_ocf_file(stakeholder_example, type=TRANSACTION)
        ocf_file.writestr(transaction_path.name, open(transaction_path, 'r').read())
        entry = ocf_file.open(transaction_path.name)
        md5 = hashlib.md5()
        while True:
            block = entry.read(blocksize)
            if not block:
                break
            md5.update(block)
        transaction_files.append({
            "filepath": transaction_path.name,
            "md5": md5.hexdigest()
            })

    # Validate stakeholder files, calculate md5s and add to stakeholder_files array
    stakeholder_files = []
    for stakeholder_path in stakeholder_paths:
        stakeholder_example = loadJSONL(stakeholder_path.resolve())
        validate_ocf_file(stakeholder_example, type=STAKEHOLDER)
        ocf_file.writestr(stakeholder_path.name, open(stakeholder_path, 'r').read())
        entry = ocf_file.open(stakeholder_path.name)
        md5 = hashlib.md5()
        while True:
            block = entry.read(blocksize)
            if not block:
                break
            md5.update(block)
        stakeholder_files.append({
            "filepath": stakeholder_path.name,
            "md5": md5.hexdigest()
            })
    
    # Inject filenames and md5 checksums into the manifest
    manifest = {
        **manifest, 
        "stakeholder_files": stakeholder_files,
        "transaction_files": transaction_files
    }
    
    # Validate manifest prior to writing it.
    validate_ocf_file(manifest)


    ocf_file.writestr(f"Manifest.json", json.dumps(manifest))

    ocf_file.close()
    ocf_bytes.seek(io.SEEK_SET)
    
    with open(target_path.resolve(), 'wb') as f:
        f.writelines(ocf_bytes)
