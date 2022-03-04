import * as path from "path";
import { fileURLToPath } from "url";
import Schema from "./Schema/Schema.js";

const root = fileURLToPath(import.meta.url);

const SCHEMA_SOURCE = path.resolve(root, "../../../schema");
const EXAMPLES_SOURCE = path.resolve(root, "../../../samples");
const OUTPUT = path.resolve(root, "../../../docs");
const README = path.resolve(root, "../../../README.md");

await Schema.generateDocs(SCHEMA_SOURCE, EXAMPLES_SOURCE, OUTPUT, README);
