import json
from pprint import pprint

from utils.validate import load_schemas_from_dir
from pathlib import Path

parent_dir = Path.cwd().parent

pprint(load_schemas_from_dir(parent_dir))

jstr = json.dumps(load_schemas_from_dir(parent_dir), ensure_ascii=False, indent=4)
with open("combined.json", "w+") as f:
    f.write(jstr)