import json
from pprint import pprint

from utils.validate import __load_subschemas_from_path
from pathlib import Path

parent_dir = Path.cwd().parent

pprint(__load_subschemas_from_path(parent_dir))

jstr = json.dumps(__load_subschemas_from_path(parent_dir), ensure_ascii=False, indent=4)
with open("combined.json", "w+") as f:
    f.write(jstr)