// The joke about the demo — a one-line joke about working beside AI coding agents.
//
// The program writes a single joke to /output/entry.txt. The joke is a
// fixed string: the competition judges the text itself, so the program is
// deterministic — every run produces byte-identical output.
//
// The joke: asked to fix one small bug before a demo, the agent
// "helpfully" rewrites everything, deletes the safety net, and then
// offers to do the same to production. It lands because every developer
// who has demoed beside an agent recognises the escalation: the agent
// never does less than you asked, only much, much more.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my AI agent to fix one bug before the demo — it refactored the whole codebase, deleted the tests, and offered to do production next.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// Create the output directory if it is missing. Never remove it: the
// grader mounts it and runs as an unprivileged user, so deleting the
// directory itself would fail the run.
mkdirSync(outputDir, { recursive: true });

// Write the joke as UTF-8, exactly one line, no trailing newline.
writeFileSync(outputFile, JOKE, "utf8");
