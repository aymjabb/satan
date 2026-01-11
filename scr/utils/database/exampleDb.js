/**
 * 🌸 Layla Simple Database
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "data.json");

function readDB() {
  if (!fs.existsSync(dbPath)) return {};
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = { readDB, writeDB };
