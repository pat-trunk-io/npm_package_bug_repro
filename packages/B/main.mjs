#!/usr/bin/env node

import { execaSync } from "execa";
import { fileURLToPath } from "node:url";

const scriptURL = import.meta.url;
const nodeModulesDir = fileURLToPath(new URL("node_modules", scriptURL));

execaSync(`${nodeModulesDir}/A/main.mjs`, { stdio: "inherit" });

console.log("Ran A/main.mjs from B/main.mjs");
