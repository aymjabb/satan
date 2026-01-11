/**
 * 🌸 Layla Core
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 * Bot: 𝙡𝙖𝙮𝙡𝙖
 */

module.exports = async function startLayla() {
  console.clear();
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🌸 𝙡𝙖𝙮𝙡𝙖 core is starting...");
  console.log("👑 Owner : 𝘼𝙮𝙢𝙖𝙣");
  console.log("⚙️  Mode  : Production");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // استدعاء ملفات الأحداث والمعالجات
  const messageHandler = require("../modules/handlers/message");

  // مثال بسيط لتشغيل الرسائل (هنا لازم يكون bot object عندك من مكتبة البوت)
  // هذا الجزء يعتمد على المكتبة اللي تستخدمها للتليجرام/واتساب/Messenger
  const bot = {
    sendMessage: (chatId, text) => console.log(`[BOT -> ${chatId}] ${text}`)
  };

  // مثال استقبال رسالة (للاختبار)
  messageHandler(bot, { chatId: "12345", text: "ليلى مرحبا" });
};
