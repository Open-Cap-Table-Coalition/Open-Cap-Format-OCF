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
