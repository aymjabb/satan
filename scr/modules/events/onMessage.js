/**
 * 🌸 Layla Events
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

const handleMessage = require("../handlers/message");

module.exports = function onMessage(bot, message) {
  // كل رسالة جديدة تمر هنا
  handleMessage(bot, message);
};
