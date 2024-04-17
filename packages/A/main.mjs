#! /usr/bin/env node

import fs from "node:fs";
import { fileURLToPath } from "node:url";

const scriptURL = import.meta.url;
const nodeModulesDir = fileURLToPath(new URL("node_modules", scriptURL));
const tscLocation = `${nodeModulesDir}/typescript/bin/tsc`;

if (!fs.existsSync(tscLocation)) {
  throw new Error(`tsc not found at ${tscLocation}`);
}
