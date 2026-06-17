# @opencaptablecoalition/ocf-types

TypeScript types for the
[Open Cap Format (OCF)](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF), generated
directly from the OCF JSON Schemas.

> **Auto-generated — do not edit by hand.** The published `index.d.ts` is produced by
> `npm run schema:gen-types` from the schemas under [`/schema`](../../schema). It is built at
> release time and is _not_ committed to the repository. Regenerate after any schema change; never
> hand-edit.

## Versioning

The package version tracks the OCF schema release it was generated from —
`@opencaptablecoalition/ocf-types@1.2.0` contains the types for OCF `v1.2.0`.

## Install

Once published to npm:

```bash
npm install --save-dev @opencaptablecoalition/ocf-types
```

Interim (before the npm release): install the tarball attached to the matching GitHub Release:

```bash
npm install --save-dev https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/releases/download/v1.2.0/opencaptablecoalition-ocf-types-1.2.0.tgz
```

## Usage

```ts
import type { OCFStockIssuance, OCFManifestFile } from "@opencaptablecoalition/ocf-types";

const issuance: OCFStockIssuance = {
    /* ... */
};
```

This is a **types-only** package: it ships a single `.d.ts`, adds no runtime code, and has no
dependencies. Import with `import type`.

## What's included

One named type per OCF schema, mirroring the schema graph: enums become string-literal unions,
scalar types become aliases, and objects become interfaces with their inherited (`allOf`) properties
flattened in. `$ref`s map to the corresponding named type.

The abstract **primitive** base schemas are omitted by default — they exist only to be inherited and
are flattened into each concrete type, so nothing references them. Regenerate with
`--include-primitives` if you need the base shapes.

Note: JSON Schema constraints that TypeScript can't express as types (`pattern`, `format`,
`minimum`/`maxItems`, `additionalProperties: false`, etc.) are surfaced as JSDoc tags, not enforced
by the type checker. Validate OCF data against the JSON Schemas for full correctness.

## License

Generated from the OCF schemas. See [LICENSE.md](../../LICENSE.md) in the repository root.
