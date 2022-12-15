# Developer Information

## Format

- We use [JSON Schema Draft 7](https:/json-schema.org/specification-links.html#draft-7) for maximum compatibility with
  JSON Schema [implementations](https:/protect-us.mimecast.com/s/bvw6ClYgmKf29D5ZHqNca4?domain=json-schema.org)

## Recommended Code Editor For Schema Files

- Simply use [VSCode](https:/code.visualstudio.com/) with the "Prettier - Code formatter"

## Development Environment Setup

This repo requires Prettier to be run on all files. Run `npm install` to install dev dependencies and Prettier will automatically run pre-commit.

## Testing

We have created npm scripts to perform various validations, such as validating the schemas themselves and our
example ocf object instances:

- To validate schemas in the repo, run `npm run validate-ocf-file-schemas`
- To validate examples in the repo, run `npm run validate-example-ocf-files`

If you want to use the validator for your own files, you can run the following command from the repo root:

- `node ./utils/validate.mjs validate-ocf-director -p [path/to/ocf/files] -v`

_Feel free to omit the -v if you don't want full console logs of the validation process_

We'll be releasing more complete documentation for validating and packaging in the future. _NOTE: We are still refining
our toolchain and everything here is subject to change_
