import yargs, { Arguments, boolean } from "yargs";
import { hideBin } from "yargs/helpers";

import Schema from "./Schema/Schema.js";

interface DocGeneratorArgs extends Arguments {
  indexPath?: string;
  repoUrlRoot?: string;
  docUrlRoot?: string;
  addFileExtension?: boolean;
}

yargs(hideBin(process.argv))
  .command({
    command: "generate-docs",
    describe:
      "Generate markdown docs, complete with nav urls, for placement in repo or doc platform. Optional args allow replacement of root url.",
    builder: {
      indexPath: {
        describe:
          "Path to the documentation index from the root doc url (defaults to doc root url ROOT).",
        demandOption: true,
        type: "string",
        default: "",
      },
      repoUrlRoot: {
        describe:
          "If provided, the generator will use this url as the root for all nav links it generates to source jsons in the markdown. Otherwise, links are all relative and are meant for GitHub repo nav.",
        demandOption: false,
        type: "string",
      },
      docUrlRoot: {
        describe:
          "If provided, the generator will use this url as the root for all nav links it generates to other markdown files in the markdown. Otherwise, links are all relative and are meant for GitHub repo nav.",
        demandOption: false,
        type: "string",
      },
      addFileExtension: {
        describe:
          "If this flag is provided, add .md to links. This IS required for GitHub-hosted docs BUT will break MkDocs-hosted docs.",
        demandOption: false,
        type: "boolean",
      },
    },
    handler: async (argv: DocGeneratorArgs) => {
      await Schema.generateDocs(
        argv.indexPath ? argv.indexPath : "",
        argv.docUrlRoot,
        argv.repoUrlRoot,
        argv.addFileExtension
      );
    },
  })
  .help()
  .alias("help", "h").argv;
