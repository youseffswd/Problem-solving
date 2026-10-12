
import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";

const watch = process.argv.includes("--watch");
const files = (await readdir(process.cwd()))
  .filter(file => file.endsWith(".ts") && !file.endsWith(".test.ts"));

if (files.length !== 1) {
  console.error(`Expected exactly one solution .ts file, found ${files.length}.`);
  process.exit(1);
}

const file = path.resolve(files[0]);
const args = ["tsx"];

if (watch) args.push("watch");
args.push(file);

const child = spawn("npx", args, { stdio: "inherit", shell: true });

child.on("exit", code => process.exit(code ?? 1));
