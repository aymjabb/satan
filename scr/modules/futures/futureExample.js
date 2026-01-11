/**
 * 🌸 Layla Future Feature
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

module.exports = function futureFeature(bot) {
  bot.on("ping", (message) => {
    bot.sendMessage(message.chatId, "🏓 Pong! ليلى هنا 🌸");
  });
};
