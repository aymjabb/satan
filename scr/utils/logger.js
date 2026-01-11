/**
 * 🌸 Layla Logger
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

module.exports = function logger(message, type = "INFO") {
  const time = new Date().toLocaleTimeString();
  console.log(`[${type}] [${time}] ${message}`);
};
