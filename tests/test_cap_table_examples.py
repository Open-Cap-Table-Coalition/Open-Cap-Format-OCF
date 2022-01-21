import json
import unittest
from contextlib import contextmanager

from jsonschema import ValidationError

from utils.validate import validate_ocf, parent_dir


@contextmanager
def load_json_file(filename: str):
    with open(filename, 'r') as f:
        data = json.load(f)
        yield data


class TestCapTableSchemaWithValidBaseExample(unittest.TestCase):
    base_example_path = parent_dir / "tests" / "CapTable.BaseExample.json"

    def test_valid_base_example(self):
        with load_json_file(self.base_example_path) as json_data:
            self.assertTrue(validate_ocf(json_data))


class TestCapTableSchemaWithValidFullExample(unittest.TestCase):
    expanded_example_path = parent_dir / "tests" / "CapTable_Example.json"

    def test_valid_full_example(self):
        with load_json_file(self.expanded_example_path) as json_data:
            self.assertTrue(validate_ocf(json_data))


class TestCapTableSchemaWithInvalidExample(unittest.TestCase):
    invalid_example_path = parent_dir / "tests" / "CapTable_ERROR_Example.json"

    def test_invalid_example(self):
        with load_json_file(self.invalid_example_path) as json_data:
            self.assertRaises(Exception, validate_ocf(json_data))
