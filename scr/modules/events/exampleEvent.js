/**
 * 🌸 Layla Event Example
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

module.exports = function eventHandler(bot) {
  bot.on("userJoined", (user) => {
    bot.sendMessage(user.chatId, `🌸 مرحبا ${user.name}, أهلاً بك في البوت!`);
  });
};
