/**
 * 🌸 Layla Chat Handler
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 * Bot: 𝙡𝙖𝙮𝙡𝙖
 *
 * 🚀 هذا الملف يضيف أمر "ليلى <نص>" للرد على المستخدم باستخدام OpenAI
 */

const { Configuration, OpenAIApi } = require("openai");

// 🔑 ضع توكن OpenAI هنا أو استخدم process.env.OPENAI_API_KEY
const configuration = new Configuration({
  apiKey: "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"
});

const openai = new OpenAIApi(configuration);

/**
 * دالة استقبال الرسائل
 * @param {Object} bot - الكائن الأساسي للبوت
 * @param {Object} message - بيانات الرسالة المستقبلة
 */
module.exports = async function handleMessage(bot, message) {
  try {
    if (!message.text) return;

    // الأمر: ليلى <نص>
    if (message.text.startsWith("ليلى ")) {
      const userText = message.text.slice(5).trim();
      if (!userText) return;

      // 🌸 استدعاء OpenAI
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: `أجب بأسلوب ليلى: ${userText}` }
        ],
        temperature: 0.7
      });

      const reply = completion.data.choices?.[0]?.message?.content || "🌸 ليلى لا تستطيع الرد الآن";

      // إرسال الرد
      bot.sendMessage(message.chatId, reply);
    }
  } catch (err) {
    console.error("🔥 Layla Chat Error:", err);
    if (message?.chatId) {
      bot.sendMessage(message.chatId, "🔥 حدث خطأ أثناء التواصل مع ليلى");
    }
  }
};
