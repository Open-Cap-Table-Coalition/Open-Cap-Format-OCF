import {
  DEFAULT_EXPERIMENTAL_MODE,
  EXPERIMENTAL_MODES,
  isExperimentalMode,
} from "../schema-utils/SchemaComposer.js";

import Schema from "./Schema/Schema.js";

/** Read `--experimental <mode>` (or `--experimental=<mode>`) from argv, falling
 *  back to the default. Kept as a tiny hand-parser so the doc-gen entrypoint
 *  stays dependency-light; the value is validated against the known modes. */
function experimentalFromArgv(argv: string[]) {
  const flag = "--experimental";
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === flag) {
      const value = argv[i + 1];
      if (!isExperimentalMode(value)) {
        throw new Error(
          `--experimental must be one of: ${EXPERIMENTAL_MODES.join(", ")}`
        );
      }
      return value;
    }
    if (arg.startsWith(`${flag}=`)) {
      const value = arg.slice(flag.length + 1);
      if (!isExperimentalMode(value)) {
        throw new Error(
          `--experimental must be one of: ${EXPERIMENTAL_MODES.join(", ")}`
        );
      }
      return value;
    }
  }
  return DEFAULT_EXPERIMENTAL_MODE;
}

await Schema.generateDocs(experimentalFromArgv(process.argv.slice(2)));
