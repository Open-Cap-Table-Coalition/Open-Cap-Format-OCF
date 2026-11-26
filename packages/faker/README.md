# @open-captable/faker

Author OCF objects for a specific schema release from the command line. The package includes the OCF
1.2.0 schemas and validates offline.

```sh
ocf describe STAKEHOLDER
echo '{"id":"p1","stakeholder_type":"INDIVIDUAL","name":{"legal_name":"A. Lee"}}' | ocf object STAKEHOLDER >> records.jsonl
ocf validate records.jsonl
ocf validate --schema-dir ./schema --format jsonl - < records.jsonl
```

Supply field values on stdin or with `--in file.json`. The object command supplies the discriminator
and emits one compact JSON record after validation. Validation accepts a JSON object, an array, or
one object per nonblank JSONL line. Use `--format jsonl` for JSONL on stdin. Errors go to stderr
with a nonzero exit code. Add `--json` for structured errors.

From a repository checkout with the v1.2.0 tag available, run `npm ci` and `npm test` in
`packages/faker`. Run the built CLI with `node cli.mjs`. The build compiles the repository’s schema
composition and object type routing utilities and packages the pinned release schemas with their
original IDs and notices.

## Assemble an export

```sh
ocf export records.jsonl --issuer issuer.json --as-of 2024-12-31 --out ./export
ocf validate ./export
```

Supply a complete OCF issuer object. The input can also be stdin, a JSON array, or a directory
containing JSON and JSONL files. Directory inputs are read in filename order, skipping the
separately supplied issuer file. Record order is preserved within each category. Use a new or empty
output directory.

The writer stages a manifest and typed files, verifies their schemas and MD5 checksums, then
publishes the directory. Directory validation starts at `Manifest.ocf.json` and checks each
referenced file against its manifest category. Validating an individual OCF file checks its schema
only.

## Select schemas

```sh
ocf validate ./export --ocf-version 1.2.0
ocf describe VESTING_TERMS --schema-ref main
ocf describe STAKEHOLDER --schema-ref v1.0.0-b2
ocf export records.jsonl --issuer issuer.json --as-of 2024-12-31 --out ./export --schema-dir ./schema
```

All commands accept one schema source. For `--ocf-version`, the CLI lists schema filenames from the
matching GitHub release tag and downloads their contents from the Coalition’s versioned schema URIs.
For `--schema-ref`, supply a branch (including names containing slashes), tag, or full commit SHA in
the Coalition's OCF GitHub repository. The CLI reports the resolved SHA on stderr and reads every
schema from that commit. References resolve against the selected snapshot even when their declared
IDs point to main or to a release URI.

Complete downloads are cached in `$XDG_CACHE_HOME/open-captable/faker` (default
`~/.cache/open-captable/faker`). A cached release version or full SHA works offline. Named GitHub
refs are resolved on each run so a moving branch picks up new commits.

## Stage a CLI release

The first release and every tagged release go through npm's staging queue. A maintainer reviews the
tarball in **Staged Packages** on npmjs.com and approves it with 2FA to make that version public.
[Staged publishing](https://docs.npmjs.com/staged-publishing/)

For the first release, run `release-faker.yml` manually on `main` and download and extract the
`faker-npm` artifact. From the extracted directory, sign in with an account that has write access to
`@open-captable` and stage the tested tarball. Use Node 22.14+ and npm 11.15+.

```sh
npm login
npm stage publish ./open-captable-faker-0.1.0.tgz --access public --tag latest
```

For a new package, npm creates a public `0.0.0-stage` placeholder. The contents of the staged
version become public when a maintainer approves it.

For automated staging, configure the package's GitHub Actions trusted publisher for
`Open-Cap-Table-Coalition/Open-Cap-Format-OCF`, workflow `release-faker.yml`. Grant only
`npm stage publish` permission. Leave direct publishing and dist-tag management disabled.
[npm trusted publishing](https://docs.npmjs.com/trusted-publishers/)

The CLI version is independent of the bundled OCF version. For subsequent releases, update it in
`packages/faker` with `npm version --no-git-tag-version <version>`, commit the package manifest and
lockfile, and push the matching tag (for example, `faker-v0.1.1`). CI stages the tested artifact
with the npm tag `latest` for stable releases or `next` for prereleases.
