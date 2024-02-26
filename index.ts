/**
 * Bun entrypoint for prettier cli
 */

import { readlinkSync, statSync } from "fs";
import "process";

const resolvedArgv = process.argv.slice(2).map((arg) => {
  // Propagate flags without modifications
  if (arg.startsWith("-")) {
    return arg;
  }

  // If the arg is a file to lint, dereference symlinks if necessary
  const stats = statSync(arg);
  return stats.isSymbolicLink() ? readlinkSync(arg) : arg;
});

const exitCode = await require("prettier/internal/cli.mjs").run(resolvedArgv);
process.exit(exitCode);
