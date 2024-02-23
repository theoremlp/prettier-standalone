/**
 * Bun entrypoint for prettier cli
 */

import { readlinkSync } from "fs";
import "process";

const resolvedArgv = process.argv.slice(2).map((arg) => {
  if (arg.startsWith("--") || arg.startsWith("-")) {
    // Propagate flags without modifications
    return arg;
  }
  // If the arg is a file to lint, dereference symlinks
  return readlinkSync(arg);
});

const exitCode = await require("prettier/internal/cli.mjs").run(resolvedArgv);
process.exit(exitCode);
