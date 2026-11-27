#!/usr/bin/env bash
set -euo pipefail

if [[ ! "$RELEASE_TAG" =~ ^v[0-9][0-9A-Za-z._-]*$ ]]; then
  echo "::error::Expected an OCF version tag such as v1.2.0"
  exit 1
fi
if [[ "$GITHUB_EVENT_NAME" == workflow_dispatch ]]; then
  if [[ "$GITHUB_REF" != "refs/heads/$DEFAULT_BRANCH" ]]; then
    echo "::error::Run historical releases from $DEFAULT_BRANCH"
    exit 1
  fi
  git fetch --no-tags --depth=1 origin "refs/tags/$RELEASE_TAG"
  schema_commit=$(git rev-parse --verify 'FETCH_HEAD^{commit}')
  git restore --source="$schema_commit" --staged --worktree -- schema
  echo "Using schemas from $RELEASE_TAG ($schema_commit)"
fi
echo "tag=$RELEASE_TAG" >> "$GITHUB_OUTPUT"
