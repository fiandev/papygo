#!/usr/bin/env node
const Interpreter = require("#interpreter")
const fs = require("fs");
const path = require("path");

let fileLocate = null;
const parseArgs = () => {
  const args = process.argv;

  if (args.length < 3) {
    console.log(
      "Required file path!'"
    );
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  return true;
};

if (!parseArgs()) {
  process.exit(1);
}

// set global variabel
global.file = path.parse(fileLocate);

const fileContent = fs.readFileSync(fileLocate, "utf-8");

const pointer = new Interpreter(fileContent);
pointer.execute();