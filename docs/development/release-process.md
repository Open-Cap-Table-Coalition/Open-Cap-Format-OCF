# Release Process

This guide describes the step-by-step process for releasing a new version of the Open Cap Format
schema. It covers updating version numbers, generating release documentation, and publishing.

## Prerequisites

-   Node.js v18.16.0 (see `.nvmrc`)
-   npm >= 9.5.1 < 10
-   Python 3.8+ (for mkdocs)
-   All tests passing (`npm test`)
-   All schema validations passing (`npm run schema:validate-ocf-file-schemas`)

## Version Locations

The OCF version appears in one authoritative location:

| File                                       | Field                 | Example              |
| ------------------------------------------ | --------------------- | -------------------- |
| `schema/files/OCFManifestFile.schema.json` | `ocf_version` (const) | `"1.2.1-alpha+main"` |

During development, the version uses the format `X.Y.Z-alpha+main`. For releases, it becomes
`X.Y.Z`.

## URL Transformation

Schema files use different URL patterns for development vs. releases:

| Context                   | `$id` / `$ref` URL Pattern                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| Development (main branch) | `https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/...` |
| Released version          | `https://schema.opencaptablecoalition.com/v/{tag}/...`                                           |

The `GenerateReleaseDocs.ts` utility transforms these URLs during the release process.

## Release Steps

### 1. Ensure Clean State

```bash
# Verify all tests pass
npm test

# Verify schema validation passes
npm run schema:validate-ocf-file-schemas

# Verify example files validate
npm run schema:validate-example-ocf-files

# Check for lint issues
npm run lint
```

### 2. Update the OCF Version

Edit `schema/files/OCFManifestFile.schema.json` and change `ocf_version` from the alpha version to
the release version:

```json
// Before (development)
"ocf_version": {
  "const": "1.2.1-alpha+main"
}

// After (release)
"ocf_version": {
  "const": "1.2.1"
}
```

### 3. Update Copyright Notices

Run the copyright notice enforcer to ensure all schemas have current year and valid copyright
notices:

```bash
npm run schema:enforce-copyright-notices
```

This command uses the flags `-fvart --tag main` which:

-   `-f` (force): Regenerates copyright on all schemas
-   `-v` (verbose): Shows detailed output
-   `-a` (add): Adds missing copyright notices
-   `-r` (replace): Replaces invalid copyright notices
-   `-t` (test): Runs in test mode for CI validation

### 4. Generate Release Documentation

Transform all schema `$id` and `$ref` URLs from development URLs to release URLs:

```bash
npm run docs:generate-release -- --tag v1.2.1
```

Replace `v1.2.1` with your actual version tag. This command:

1. Updates `utils/schema-utils/UriLookupForFileType.json` with release URLs
2. Transforms `$id` fields in all schemas to use
   `https://schema.opencaptablecoalition.com/v/{tag}/...`
3. Transforms `$ref` fields in all schemas to use the release URL pattern

### 5. Generate Markdown Documentation

```bash
npm run docs:generate
```

This regenerates the markdown documentation in `docs/schema_markdown/` from the updated schemas.

### 6. Verify Changes

```bash
# Re-run validations to ensure nothing broke
npm run schema:validate-ocf-file-schemas
npm run schema:validate-example-ocf-files
npm test
```

### 7. Commit and Tag

```bash
git add .
git commit -m "Release v1.2.1"
git tag v1.2.1
git push origin main --tags
```

### 8. Create GitHub Release

1. Go to the repository's Releases page on GitHub
2. Click "Create a new release"
3. Select the tag you just pushed (e.g., `v1.2.1`)
4. Add release notes describing changes
5. Publish the release

When the release is published, the `generate-and-publish-mkdocs.yml` workflow automatically:

-   Generates documentation (`npm run docs:generate`)
-   Deploys to GitHub Pages (`mkdocs gh-deploy --force`)

### 9. Prepare for Next Development Cycle

After the release is published, prepare the repository for the next development cycle:

1. Update `ocf_version` back to the next alpha version:

    ```json
    "ocf_version": {
      "const": "1.2.2-alpha+main"
    }
    ```

2. Revert schema URLs back to development URLs (pointing to `main` branch):

    ```bash
    # This needs to be done manually or via a script that reverses GenerateReleaseDocs
    # The URLs should point back to:
    # https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/...
    ```

3. Update copyright notices for the new development cycle:

    ```bash
    npm run schema:enforce-copyright-notices
    ```

4. Commit the changes:
    ```bash
    git add .
    git commit -m "Prepare for v1.2.2 development"
    git push origin main
    ```

## Utility Reference

### GenerateReleaseDocs.ts

Transforms development URLs to release URLs in all schema files.

```bash
node --loader ts-node/esm ./utils/schema-utils/GenerateReleaseDocs.ts generate-release-docs --tag <version>
```

| Flag            | Description                            |
| --------------- | -------------------------------------- |
| `--tag`         | Required. Version tag (e.g., `v1.2.1`) |
| `-v, --verbose` | Show detailed output                   |

### EnforceCopyrightNotices.ts

Manages copyright notices in the `$comment` field of all schemas.

```bash
node --loader ts-node/esm ./utils/schema-utils/EnforceCopyrightNotices.ts check-notices [flags]
```

| Flag            | Description                           |
| --------------- | ------------------------------------- |
| `-v, --verbose` | Show detailed output                  |
| `-t, --test`    | Run as GitHub Actions test            |
| `-f, --force`   | Regenerate all copyright notices      |
| `-a, --add`     | Add missing copyright notices         |
| `-r, --replace` | Replace invalid copyright notices     |
| `--tag`         | Branch tag for URLs (default: `main`) |

## Automated CI Checks

The following GitHub Actions run on PRs and pushes to main:

| Workflow                                      | Purpose                               |
| --------------------------------------------- | ------------------------------------- |
| `check-schema-files.yml`                      | Validates schema files                |
| `check-example-ocf-files.yml`                 | Validates sample OCF files            |
| `check-ocf-schema-file-copyright-notices.yml` | Verifies copyright notices            |
| `check-gen-docs.yml`                          | Ensures generated docs are up-to-date |
| `jest.yml`                                    | Runs unit tests                       |
| `lint.yml`                                    | Checks code formatting                |

On release publication:

| Workflow                          | Purpose                                    |
| --------------------------------- | ------------------------------------------ |
| `generate-and-publish-mkdocs.yml` | Generates and deploys docs to GitHub Pages |

## Troubleshooting

### Schema validation fails after URL transformation

Ensure the tag you specified matches exactly what you'll use for the GitHub release. The URLs must
resolve correctly.

### Copyright notice check fails

Run with verbose mode to see which schemas have issues:

```bash
npm run schema:enforce-copyright-notices -- -v
```

### Generated docs are out of date

Regenerate and commit:

```bash
npm run docs:generate
git add docs/schema_markdown/
git commit -m "Regenerate documentation"
```
