#!/usr/bin/env bash

set -eou pipefail

# create branch
git checkout -b release-v$1

# update copyright notices
node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/EnforceCopyrightNotices.ts check-notices -fvart --tag v$1
git add schema

# generate docs
npm run generate-docs && git add docs && git add README.md

#
npx lint-staged

# commit; no-verify to avoid re-updating docs
git commit -m "Preparing to tag v$1" --no-verify

#
echo "To complete the creation of the tag, run the following:"
echo
echo "   git tag v$1 HEAD"
echo "   git push --set-upstream origin release-v$1 --tags"
