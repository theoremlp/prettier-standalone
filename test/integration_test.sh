#!/bin/bash

set -euo pipefail

PRETTIER_BIN="./dist/prettier"
REAL_PATH="test/test.yaml"
SYMLINK_PATH="test/test-symlink.yaml"

bun run package

# Run tests
"$PRETTIER_BIN" "$REAL_PATH" > /dev/null
"$PRETTIER_BIN" "$SYMLINK_PATH" > /dev/null

