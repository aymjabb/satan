/**
 * 🌸 Layla Logger
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

const chalk = require("chalk");

module.exports = function logger(message, type = "INFO") {
  const time = new Date().toLocaleTimeString();
  let color = chalk.white;

  switch (type) {
    case "INFO":
      color = chalk.cyan;
      break;
    case "WARN":
      color = chalk.yellow;
      break;
    case "ERROR":
      color = chalk.redBright;
      break;
    case "SUCCESS":
      color = chalk.greenBright;
      break;
  }

  console.log(color(`[${type}] [${time}] ${message}`));
};
