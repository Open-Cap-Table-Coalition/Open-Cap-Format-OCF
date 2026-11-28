# Release channels and maintainer procedures

Choose the tag by what you are releasing. An OCF schema tag such as `v1.2.0` identifies the schema
snapshot used by both types packages. The authoring CLI has its own version and uses a tag such as
`cli-v0.2.1`. Publishing the documentation site is a separate deployment.

| Release channel                         | Trigger                                                                                | Where the result goes                                                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| OCF JSON Schemas                        | Prepare and push an OCF `v*` tag, then upload the tagged schemas to the schema host    | GitHub tag and versioned JSON files at `schema.opencaptablecoalition.com/v/<version>/`                                                           |
| TypeScript · `@open-captable/ocf-types` | OCF tag push or a historical tag supplied to [Release OCF TypeScript Types][ts-action] | Tested tarball on the GitHub Release. With `PUBLISH_TYPESCRIPT_TYPES=true`, the job stages it on npm for maintainer approval with 2FA.           |
| Python · `ocf-types`                    | OCF tag push or a historical tag supplied to [Release OCF Python Types][py-action]     | Wheel and source archive on the GitHub Release. With `PUBLISH_PYTHON_TYPES=true`, the job publishes them to PyPI through the `pypi` environment. |
| Authoring CLI · `@open-captable/cli`    | Matching `cli-v*` tag push to [Release OCF authoring CLI][cli-action]                  | Tested `cli-npm` workflow artifact and a staged npm version for maintainer approval with 2FA.                                                    |
| Documentation site                      | GitHub Release `released` event, or a manual run of [Publish Docs][docs-action]        | Generated MkDocs site deployed to GitHub Pages.                                                                                                  |

## Cut a new OCF schema release

1. Choose the version using the [schema versioning rules](versioning.md). Prepare a release branch
   from the intended commit. Set the manifest's `ocf_version`, update sample manifests and copyright
   links, and generate the release URLs for schema IDs and references. The version in the URLs omits
   the tag's leading `v`. Regenerate the docs, run the schema and sample checks, and review the
   resulting commit. See the [schema release preparation checklist][schema-checklist].
2. Tag that **release commit** and push the individual tag. For example, with `tag` set to the new
   tag name and `release_commit` set to the reviewed SHA, run `git tag "$tag" "$release_commit"`
   followed by `git push origin "refs/tags/$tag"`. The two types workflows build from that tag. A
   tag with a hyphen, such as `v1.3.0-b1`, is a pre-release: its GitHub Release is marked as a
   pre-release, npm files it under `next`, and PyPI lists it as `1.3.0b1`.
3. Upload the contents of the tagged `schema/` directory to the schema host under `/v/<version>/`,
   preserving the directory layout. Verify that `files/OCFManifestFile.schema.json` at that URL
   resolves and declares the released version. This upload is a manual release step.
4. Review the GitHub Release notes and assets. Check the registry jobs in Actions and complete any
   pending approvals. Confirm the exact package versions in the registries. Update the development
   version on `main` for the next cycle.

## Release types for a tag that already exists

Use the historical release input when adding language bindings to an older OCF release. Run the
workflow from `main` and pass the existing tag as `release_tag`. Actions takes the generator and
packaging code from the selected `main` commit and the **entire schema tree from the tag**. The tag
stays on its original commit. Run only the command for the package you intend to release.

```sh
# TypeScript for OCF 1.2.0. Older stable backfills default to the historical npm dist-tag.
gh workflow run release-ocf-types.yml --ref main -f release_tag=v1.2.0

# Python for OCF 1.2.0. An enabled publish job uploads ocf-types==1.2.0 directly to PyPI.
gh workflow run release-ocf-types-python.yml --ref main -f release_tag=v1.2.0
```

For the **first stable TypeScript release**, add `-f historical_dist_tag=latest` if plain
`npm install @open-captable/ocf-types` should select it. npm's `latest`, `next`, and `historical`
are package distribution tags, independent of Git's `v1.2.0`. The
[TypeScript release guide](typescript-types-release.md) explains how tag pushes and backfills select
them.

To **preview** either types package, dispatch its workflow with `release_tag` blank. The run uploads
a `0.0.0` Actions artifact. A manual CLI run also builds an artifact, using the version already in
`packages/cli/package.json`.

## Finish and verify a package release

-   **TypeScript:** Check both **Pack and attach OCF types tarball** and **Stage the tarball on
    npm**. If packing succeeds and staging is skipped on a versioned run, the tarball is available
    on the GitHub Release. For the first release, download that exact file, stage it with an npm
    account that can publish to `@open-captable`, and approve it in **Staged Packages** with 2FA.
    For later releases, configure npm trusted publishing and enable the repository Actions variable.
    [First-release commands and publisher setup](typescript-types-release.md)
-   **Python:** Check **Publish to PyPI** and approve the `pypi` environment deployment if reviewers
    are configured. A skipped publish job leaves the built distributions on the GitHub Release.
    [PyPI trusted publisher and environment setup](python-types-release.md)
-   **CLI:** Update the version in `packages/cli/package.json` and its lockfile, commit them, then
    push the matching `cli-v<version>` tag. Actions tests the packed CLI and stages it on npm.
    Approve the staged version with 2FA. Stable releases use `latest` and prereleases use `next`.
    [CLI bootstrap and release commands](cli-release.md)

For example, these read-only checks show the GitHub assets and registry entries for OCF 1.2.0:

```sh
gh release view v1.2.0 --json assets --jq '.assets[].name'
npm view @open-captable/ocf-types@1.2.0 version
curl -fsS https://pypi.org/pypi/ocf-types/1.2.0/json | jq -r '.urls[].filename'
```

## Deploy the documentation site

Check [Publish Docs][docs-action] after releasing. To deploy the documentation for a specific ref,
run `gh workflow run generate-and-publish-mkdocs.yml --ref "$docs_ref"` with `docs_ref` set to the
intended branch or tag. The manual run deploys the selected documentation to the live site. To
preview locally, run `npm run docs:generate` and `mkdocs serve`. After deployment, verify the
published pages on the [OCF documentation site][site].

[ts-action]:
    https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/actions/workflows/release-ocf-types.yml
[py-action]:
    https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/actions/workflows/release-ocf-types-python.yml
[cli-action]:
    https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/actions/workflows/release-cli.yml
[docs-action]:
    https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/actions/workflows/generate-and-publish-mkdocs.yml
[schema-checklist]: https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/issues/519
[site]: https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/
