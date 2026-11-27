# Release the TypeScript types

The npm package `@open-captable/ocf-types` follows the OCF schema version. A push of an OCF `v*` tag
builds the declarations, packs them, checks a TypeScript consumer against the installed tarball, and
attaches the tested tarball to the tag's GitHub Release. Running the workflow with `release_tag`
blank produces a `0.0.0` workflow artifact for inspection.

## Build the first release from OCF v1.2.0

Run the workflow from `main`:

```sh
gh workflow run release-ocf-types.yml --ref main -f release_tag=v1.2.0 -f historical_dist_tag=latest
```

The generator and packaging code come from the selected `main` commit. The entire `schema/` tree
comes from the existing `v1.2.0` tag. Download `open-captable-ocf-types-1.2.0.tgz` from the GitHub
Release or extract it from the run's `ocf-types-tarball` artifact. To download the release asset:

```sh
gh release download v1.2.0 --pattern open-captable-ocf-types-1.2.0.tgz
```

If **Pack and attach OCF types tarball** succeeded and **Stage the tarball on npm** was skipped, the
tarball is ready to download. On a versioned run, staging is enabled only when the repository
Actions variable `PUBLISH_TYPESCRIPT_TYPES` equals `true`. First-time maintainers can use the
tarball from that run to bootstrap the package.

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
`npm stage publish` permission and leave the environment field blank. Then enable the GitHub
repository Actions variable:

```sh
gh variable set PUBLISH_TYPESCRIPT_TYPES --body true
```

On the next eligible run, the workflow stages the same tarball with OIDC and provenance. A
maintainer approves the staged version on npm.

If **Stage the tarball on npm** runs and npm returns `E401`, the flag has already enabled the job.
For a first release, use the maintainer bootstrap above. For an existing package, check its npm
trusted-publisher repository, workflow filename, environment, and staging permission before retrying
the failed job. The tarball from the successful pack job is still available.

Stable tag pushes use the npm dist-tag `latest`, unless the tag is older than the current npm
`latest` (a backport), which uses `historical`. Prerelease tags use `next`. For older stable
releases, run from `main` with `release_tag` and leave `historical_dist_tag` at its default,
`historical`, to preserve the current `latest`. The first-release example explicitly selects
`latest` so a plain install resolves to 1.2.0.

[Staged publishing on npm](https://docs.npmjs.com/staged-publishing/) ·
[npm trusted publishers](https://docs.npmjs.com/trusted-publishers/)
