# Release Process

This guide describes the process for releasing a new version of the Open Cap Format schema.

## Quick Start (Automated)

The recommended way to create a release is using the automated release script:

```bash
# Preview what will happen (no changes made)
npm run release -- --type patch --dry-run

# Create a patch release (1.2.1 → 1.2.2)
npm run release:patch

# Create a minor release (1.2.1 → 1.3.0)
npm run release:minor

# Create a major release (1.2.1 → 2.0.0)
npm run release:major
```

The release script handles everything:

1. Validates tests and schemas pass
2. Updates version in schema and sample files
3. Updates copyright notices
4. Transforms URLs to release URLs
5. Generates documentation
6. Creates release commit and tag
7. Reverts URLs to development URLs
8. Creates next development version commit
9. Pushes to remote and creates GitHub release draft

### Options

| Flag          | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `--dry-run`   | Show what would happen without making changes                                      |
| `--skip-push` | Create commits locally without pushing or GitHub release                           |
| `--next-dev`  | Specify base version for next dev cycle (e.g., `2.0.0` becomes `2.0.0-alpha+main`) |

### Safety Confirmations

The release script **always** requires explicit confirmation before each destructive operation.
There is no way to skip these prompts - this is intentional because the script can modify production
schemas. You must type `I Understand` to proceed at each checkpoint:

1. **Create Release Commit & Tag** - Before committing and tagging the release locally
2. **Create Next Development Commit** - Before committing the next dev version locally
3. **Push to Remote & Create GitHub Release** - Before pushing to origin/main and creating the
   GitHub release

This ensures you understand what's happening at each step and can abort if something looks wrong.

## Prerequisites

-   Node.js v18.16.0 (see `.nvmrc`)
-   npm >= 9.5.1 < 10
-   GitHub CLI (`gh`) installed and authenticated
-   Clean git working directory
-   All tests passing

## Version Format

| Context     | Format             | Example            |
| ----------- | ------------------ | ------------------ |
| Development | `X.Y.Z-alpha+main` | `1.2.1-alpha+main` |
| Release     | `X.Y.Z`            | `1.2.1`            |

The version is stored in `schema/files/OCFManifestFile.schema.json` as the `ocf_version` const.

## URL Transformation

Schema files use different URL patterns for development vs. releases:

| Context     | URL Pattern                                             |
| ----------- | ------------------------------------------------------- |
| Development | `https://raw.githubusercontent.com/.../main/schema/...` |
| Release     | `https://schema.opencaptablecoalition.com/v/{tag}/...`  |

The `GenerateReleaseDocs.ts` utility handles bidirectional URL transformation:

```bash
# Transform to release URLs
npm run docs:generate-release -- --release --tag v1.2.1

# Transform to development URLs
npm run docs:generate-release -- --dev

# Use custom base URL (advanced)
npm run docs:generate-release -- --base-url "https://custom.example.com/schema"
```

## Manual Release Steps

If you need to perform a release manually (not recommended), follow these steps:

### 1. Ensure Clean State

```bash
npm test
npm run schema:validate-ocf-file-schemas
npm run schema:validate-example-ocf-files
npm run lint
```

### 2. Update Version

Edit `schema/files/OCFManifestFile.schema.json`:

```json
"ocf_version": {
  "const": "1.2.1"  // Remove -alpha+main suffix
}
```

Also update `samples/Manifest.ocf.json` to match.

### 3. Update Copyright Notices

```bash
npm run schema:enforce-copyright-notices
```

### 4. Transform URLs to Release

```bash
npm run docs:generate-release -- --release --tag v1.2.1
```

### 5. Generate Documentation

```bash
npm run docs:generate
```

### 6. Commit and Tag

```bash
git add .
git commit -m "Release v1.2.1"
git tag v1.2.1
```

### 7. Prepare Next Development Cycle

```bash
# Update version to next alpha
# Edit schema/files/OCFManifestFile.schema.json and samples/Manifest.ocf.json

# Transform URLs back to development
npm run docs:generate-release -- --dev

# Update copyright notices
npm run schema:enforce-copyright-notices

# Commit
git add .
git commit -m "Prepare for v1.2.2-alpha+main development"
```

### 8. Push and Create Release

```bash
git push origin main --tags
gh release create v1.2.1 --draft --generate-notes --title "OCF 1.2.1"
```

### 9. Publish Release

1. Review the draft release on GitHub
2. Edit release notes if needed
3. Publish to trigger documentation deployment

## Utility Reference

### Release.ts

Main orchestration script for automated releases. Requires explicit confirmation at each step.

```bash
npm run release -- --type <major|minor|patch> [options]
```

| Flag          | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| `-t, --type`  | Release type (major, minor, or patch)                               |
| `--dry-run`   | Preview changes without executing                                   |
| `--skip-push` | Create local commits only                                           |
| `--next-dev`  | Specify base version for next dev cycle (must be > release version) |

#### Example: Release and Start Major Version Development

```bash
# Release 1.2.1, then start working on 2.0.0
npm run release:patch -- --next-dev 2.0.0
```

### GenerateReleaseDocs.ts

Bidirectional URL transformation for schema files.

```bash
npm run docs:generate-release -- [options]
```

| Flag            | Description                                   |
| --------------- | --------------------------------------------- |
| `--dev`         | Use development URLs (raw.githubusercontent)  |
| `--release`     | Use release URLs (requires `--tag`)           |
| `--tag`         | Version tag for release URLs (e.g., `v1.2.1`) |
| `--base-url`    | Custom base URL (overrides --dev/--release)   |
| `-v, --verbose` | Show detailed output                          |

### EnforceCopyrightNotices.ts

Manages copyright notices in schema `$comment` fields.

```bash
npm run schema:enforce-copyright-notices
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

On PRs and pushes to main:

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

### Git working directory not clean

Commit or stash your changes before running the release script:

```bash
git stash
npm run release:patch
git stash pop
```

### GitHub CLI not available

Install the GitHub CLI or use `--skip-push` to create commits locally:

```bash
npm run release -- patch --skip-push
# Then manually: git push origin main --tags
```

### Schema validation fails after URL transformation

Ensure the tag matches exactly what you'll use for the GitHub release. Run with `--dry-run` first to
preview.

### Tests fail during release

Fix the failing tests before attempting a release. The script will abort if validations fail.
