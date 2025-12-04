# Developer Information

## Format

OCF uses [JSON Schema Draft 7](https://json-schema.org/specification-links.html#draft-7) for maximum
compatibility with JSON Schema [implementations](https://json-schema.org/implementations.html)
across different programming languages and platforms.

## Understanding OCF's Schema Architecture

Before diving into development, we recommend familiarizing yourself with OCF's core design patterns:

-   **[Architecture](./Architecture.md)**: Understand OCF's event-driven model and how conversions
    and vesting work
-   **[Design Patterns](./DesignPatterns.md)**: Learn about object composition, OCF Objects vs
    Types, and schema organization
-   **[Transaction Traversal](./TraversingTransactions.md)**: How to navigate the event stack to
    compute cap table state

These concepts are fundamental to working effectively with OCF schemas and data.

## Recommended Code Editor For Schema Files

-   Use [VSCode](https://code.visualstudio.com/) with the **"Prettier - Code formatter"** extension
-   All files in this repo must be formatted with Prettier before commit (enforced via pre-commit
    hook)

## Development Environment Setup

This repo requires Prettier to be run on all files.

1. **Install dependencies**: Run `npm install` to install dev dependencies
2. **Automatic formatting**: Prettier will automatically run pre-commit via Husky
3. **Manual formatting**: Run `npm run lint:fix` to format all files

### Windows Development Environment Setup

Follow the step-by-step guide for setting up a
[WSL development environment](https://learn.microsoft.com/en-us/windows/wsl/setup/environment?source=recommendations)
and then set up the repo on WSL.

## Available NPM Scripts

### Validation Scripts

Validate that schemas and examples conform to OCF standards:

-   **Validate schemas**: `npm run schema:validate-ocf-file-schemas`  
    Validates all schema files in the repo against JSON Schema Draft 7
-   **Validate examples**: `npm run schema:validate-example-ocf-files`  
    Validates all example OCF files in the `/samples` folder against their respective schemas
-   **Validate all objects have samples**: `npm run schema:validate-all-objects-have-samples`  
    Ensures every OCF Object type has at least one example in the samples folder

### Documentation Scripts

-   **Generate documentation**: `npm run docs:generate`  
    Generates markdown documentation from JSON schemas (outputs to `/docs/schema_markdown/`)
-   **Generate release docs**: `npm run docs:generate-release`  
    Generates versioned release documentation

### Code Quality Scripts

-   **Lint check**: `npm run lint`  
    Checks formatting without making changes
-   **Lint fix**: `npm run lint:fix`  
    Automatically fixes formatting issues with Prettier

### Testing Scripts

-   **Run tests**: `npm test`  
    Runs the Jest test suite
-   **Watch mode**: `npm run test:watch`  
    Runs tests in watch mode for development

## Validating Your Own OCF Files

If you want to use the validator for your own OCF files, you can run the following command from the
repo root:

```bash
node ./utils/validate.mjs validate-ocf-directory -p [path/to/ocf/files] -v
```

_Omit the `-v` flag if you don't want verbose console logs of the validation process._

We'll be releasing more complete documentation for validating and packaging in the future.

**NOTE:** We are still refining our toolchain and everything here is subject to change.
