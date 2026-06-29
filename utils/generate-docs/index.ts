import { experimentalFromArgv } from "../schema-utils/SchemaComposer.js";

import Schema from "./Schema/Schema.js";

await Schema.generateDocs(experimentalFromArgv(process.argv.slice(2)));
