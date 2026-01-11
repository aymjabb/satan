/**
 * 🌸 Layla Admin Command
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

module.exports = async function adminCommand(bot, message) {
  if (!message.text.startsWith("!restart")) return;

  if (message.senderId !== "61577861540407") return; // ضع ID مالك البوت هنا

  bot.sendMessage(message.chatId, "🔄 يتم إعادة تشغيل البوت...");
  process.exit(1); // سيتم إعادة تشغيل البوت عبر launcher.js
};
