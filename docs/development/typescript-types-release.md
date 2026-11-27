# Release the TypeScript types

The npm package `@open-captable/ocf-types` follows the OCF schema version. A push of an OCF `v*` tag
builds the declarations, packs them, checks a TypeScript consumer against the installed tarball, and
attaches the tested tarball to the tag's GitHub Release. Running the workflow with `release_tag`
blank produces a `0.0.0` workflow artifact for inspection.

## Build the first release from OCF v1.2.0

Once the workflow is on `main`, run:

```sh
gh workflow run release-ocf-types.yml --ref main -f release_tag=v1.2.0 -f historical_dist_tag=latest
```

The generator and packaging code come from the selected `main` commit. The entire `schema/` tree
comes from the existing `v1.2.0` tag. Download `open-captable-ocf-types-1.2.0.tgz` from the GitHub
Release or extract it from the run's `ocf-types-tarball` artifact.

For a new npm package, sign in with write access to the `@open-captable` scope and stage that
tarball once using npm 11.15 or later:

```sh
npm login
npm stage publish ./open-captable-ocf-types-1.2.0.tgz --access public --tag latest --provenance=false
```

Approve the version in **Staged Packages** on npmjs.com with 2FA. Consumers can then install
`@open-captable/ocf-types@1.2.0`.

## Automate subsequent releases

Configure the package's npm trusted publisher for GitHub repository
`Open-Cap-Table-Coalition/Open-Cap-Format-OCF` and workflow file `release-ocf-types.yml`. Grant the
`npm stage publish` permission and leave the environment field blank. Set the GitHub repository
Actions variable `PUBLISH_TYPESCRIPT_TYPES` to `true`. The workflow stages the same tarball with
OIDC and provenance. A maintainer approves the staged version on npm.

Stable tag pushes use the npm dist-tag `latest`, unless the tag is older than the current npm
`latest` (a backport), which uses `historical`. Prerelease tags use `next`. For older stable
releases, run from `main` with `release_tag` and leave `historical_dist_tag` at its default,
`historical`, to preserve the current `latest`. The first-release example explicitly selects
`latest` so a plain install resolves to 1.2.0.

[Staged publishing on npm](https://docs.npmjs.com/staged-publishing/) ·
[npm trusted publishers](https://docs.npmjs.com/trusted-publishers/)
