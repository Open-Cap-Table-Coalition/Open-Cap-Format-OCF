import os
import json
from pathlib import Path

from jsonschema import Draft7Validator, RefResolver, ValidationError, SchemaError

# Validator for split schema files based on s1m0's answer @StackOverflow:
# https://stackoverflow.com/questions/42159346/jsonschema-refresolver-to-resolve-multiple-refs-in-python
# Further inspiration here on how to build a RefResolver against multiple ref files:
# https://stackoverflow.com/questions/31703752/python-jsonschema-validation-using-schema-list
# Ultimately found this, which I gleaned a couple further tweaks from and got the validator working:
# https://stackoverflow.com/questions/53968770/how-to-set-up-local-file-references-in-python-jsonschema-document
# Couple modifications:
#   1) I wanted multiple directories, not just one, so I made the input path argument an array of paths
#   2) Using a Draft7Validator instead of Draft4

# Using pathlib to get proper paths to provide easier, cross-platform dir performance
parent_dir = Path.cwd().parent
snapshot_schema = parent_dir / "CapTable.schema.json"
object_schema_dir = parent_dir / "objects"
type_schema_dir = parent_dir / "types"
enum_schema_dir = parent_dir / "enums"

schema_search_paths = [
    parent_dir.absolute(),
    object_schema_dir.absolute(),
    type_schema_dir.absolute(),
    enum_schema_dir.absolute()
]


def load_schemas():
    """
    :return: Dict of schema ids to jsonschemas
    """

    schemastore = {}

    for schema_search_path in schema_search_paths:
        fnames = os.listdir(schema_search_path)
        for fname in fnames:
            fpath = os.path.join(schema_search_path, fname)
            if fpath[-5:] == ".json":
                with open(fpath, "r") as schema_fd:
                    schema = json.load(schema_fd)
                    if "$id" in schema:
                        schemastore[schema["$id"]] = schema

    return schemastore

def validate_snapshot(instance, parent_schema):
    """

        Load the json file and validate against loaded schema

    :param instance: Json data to validate against the schema.
    :param schema: Parent schema (top-level schema file)
    :return:
    """
    try:

        schemastore = load_schemas()

        resolver = RefResolver.from_schema(parent_schema, store=schemastore)
        Draft7Validator(parent_schema, resolver=resolver).validate(instance)
        return True

    except ValidationError as error:
        print(f"ValidationError: {error}")
        pass
    except SchemaError as error:
        print(f"SchemaError: {error}")
        pass
    return False
