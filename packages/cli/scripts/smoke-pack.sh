#!/usr/bin/env bash
# Run against the exact tarball that will be published.
set -euo pipefail
tarball=$(realpath "$1")
project=$(mktemp -d)
trap 'rm -rf "$project"' EXIT
cd "$project"
echo '{"name":"ocf-smoke","private":true}' > package.json
npm install --ignore-scripts --no-audit --no-fund "$tarball"

# Schema loading uses fetch. The installed CLI must work with it disabled.
echo 'globalThis.fetch = () => { throw new Error("Unexpected network request") }' > offline.mjs
export NODE_OPTIONS="--import=./offline.mjs"
ocf=./node_modules/.bin/ocf
echo '{"id":"p1","name":{"legal_name":"A Lee"},"stakeholder_type":"INDIVIDUAL"}' | "$ocf" object STAKEHOLDER > records.jsonl
echo '{"id":"i1","object_type":"ISSUER","legal_name":"Example","formation_date":"2020-01-01","country_of_formation":"US"}' > issuer.json
"$ocf" export records.jsonl --issuer issuer.json --as-of 2024-12-31 --out export
"$ocf" validate export
