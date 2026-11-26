# Stage a CLI release

The first release and every tagged release go through npm's staging queue. A maintainer reviews the
tarball in **Staged Packages** on npmjs.com and approves it with 2FA to make that version public.
[Staged publishing](https://docs.npmjs.com/staged-publishing/)

For the first release, run `release-cli.yml` manually on `main` and download and extract the
`cli-npm` artifact. From the extracted directory, sign in with an account that has write access to
`@open-captable` and stage the tested tarball. Use Node 22.14+ and npm 11.15+.

```sh
npm login
npm stage publish ./open-captable-cli-0.2.0.tgz --access public --tag latest
```

For a new package, npm creates a public `0.0.0-stage` placeholder. The contents of the staged
version become public when a maintainer approves it.

For automated staging, configure the package's GitHub Actions trusted publisher for
`Open-Cap-Table-Coalition/Open-Cap-Format-OCF`, workflow `release-cli.yml`. Grant only
`npm stage publish` permission. Leave direct publishing and dist-tag management disabled.
[npm trusted publishing](https://docs.npmjs.com/trusted-publishers/)

The CLI version is independent of the bundled OCF version. For subsequent releases, update it in
`packages/cli` with `npm version --no-git-tag-version <version>`, commit the package manifest and
lockfile, and push the matching tag (for example, `cli-v0.2.1`). CI stages the tested artifact with
the npm tag `latest` for stable releases or `next` for prereleases.
