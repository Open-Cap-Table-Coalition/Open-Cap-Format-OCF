import json
import logging
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


# Setup Logger
logger = logging.getLogger('OCF Validator')
logger.setLevel(logging.DEBUG)
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

# Using pathlib to get proper paths to provide easier, cross-platform dir performance
parent_dir = Path.cwd().parent
schema_dir = Path.cwd().parent / "schema"
ocf_schema_path = schema_dir / "CapTable.schema.json"


def load_ocf_schemastore():
    return __load_subschemas_from_path(schema_dir)


def dump_full_ocf_schemastore(save_to_path=None):
    schemastore = load_ocf_schemastore()
    with open(save_to_path if save_to_path else 'schema_store.json', 'w') as outfile:
        json.dump(schemastore, outfile)


def __load_subschemas_from_path(path):

    logger.debug(f"\t__load_subschemas_from_path() - path: {path}")

    loaded_schemas = {}

    if path.is_dir():
        logger.debug("\tPath is a directory... handle recursively")
        child_schemas = list(map(lambda p: __load_subschemas_from_path(p), path.iterdir()))
        loaded_schemas = {**loaded_schemas, **{k: v for schema in child_schemas for k, v in schema.items()}}
    else:
        logger.debug(f"\tFile name is: {path.name}")
        if path.name[-12:] == ".schema.json":
            logger.debug("\tPath appears to point to schema file")
            with open(path.resolve(), "r") as schema_fd:
                logger.debug("\t\tJSON loaded... check for $id")
                schema = json.load(schema_fd)
                if "$id" in schema:
                    logger.debug(f"\t\tOCF subschema id is: {schema['$id']}")
                    loaded_schemas[schema["$id"]] = schema
        else:
            logger.debug("\tNot a schema file")

    logger.debug(f"__load_subschemas_from_path - DONE for path: {path}")

    return loaded_schemas


def validate_ocf(ocf_instance):
    logger.info(f"Load ocf schema from file path: {ocf_schema_path.resolve()}")
    ocf_schema = json.loads(open(ocf_schema_path.absolute(), 'r').read())
    logger.info(f"Loaded parent ocf schema: {ocf_schema}")
    return __validate_against_schemastore(ocf_instance, ocf_schema)


def __get_ocf_refresolver(target_schema=json.loads(open(ocf_schema_path.absolute(), 'r').read())):
    target_ocf_schema = target_schema
    schemastore = load_ocf_schemastore()
    logger.debug(json.dumps(schemastore, indent=4))
    return RefResolver.from_schema(target_ocf_schema, store=schemastore)


def __validate_against_schemastore(ocf_instance, parent_schema):
    """
    Load the json file and validate against loaded schema
    ok for scope of _schema:ok for scope of _schema:Load the json file and validate against loaded schema

    :param ocf_instance: OCF json to validate against the schema.
    :param parent_schema: Parent schema (top-level schema file)
    :return: True if valid, otherwise raise an error.
    """
    try:

        schemastore = load_ocf_schemastore()
        logger.debug(json.dumps(schemastore, indent=4))
        resolver = RefResolver.from_schema(parent_schema, store=schemastore)
        logger.info("Resolver loaded... instantiate validator")
        Draft7Validator(parent_schema, resolver=resolver).validate(ocf_instance)
        logger.info("Validation passed")
        return True

    except ValidationError as error:
        logger.error(f"ValidationError: {error}")
        pass
    except SchemaError as error:
        logger.error(f"SchemaError: {error}")
        pass
    return False
