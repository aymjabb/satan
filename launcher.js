/**
 * 🌸 Layla Bot Launcher
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 * Bot: 𝙡𝙖𝙮𝙡𝙖
 */

const { spawn } = require("child_process");
const express = require("express");
const chalk = require("chalk");
const moment = require("moment-timezone");

const app = express();
const PORT = process.env.PORT || 2006;

// ⏱️ وقت التشغيل
const time = moment.tz("Asia/Baghdad").format("HH:mm:ss | D/MM/YYYY");

// 🌐 keep-alive (Render / Railway)
app.get("/", (_, res) => {
  res.send("🌸 Layla Bot is alive");
});

app.listen(PORT, () => {
  console.log(chalk.green(`🌐 Server running on port ${PORT}`));
});

// 🚀 تشغيل البوت
function startBot(reason = "") {
  console.clear();

  console.log(chalk.magenta("━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
  console.log(chalk.cyan("🌸 𝙡𝙖𝙮𝙡𝙖 BOT LAUNCHER"));
  console.log(chalk.yellow("👑 Owner : 𝘼𝙮𝙢𝙖𝙣"));
  console.log(chalk.gray(`⏱️  Time  : ${time}`));
  if (reason) console.log(chalk.red(`🔄 Restart reason: ${reason}`));
  console.log(chalk.magenta("━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));

  const bot = spawn(
    "node",
    ["--trace-warnings", "--async-stack-traces", "src/core/layla.js"],
    {
      cwd: __dirname,
      stdio: "inherit",
      shell: true
    }
  );

  bot.on("close", (code) => {
    if (code === 1) {
      console.log(chalk.red("❌ Bot crashed – restarting..."));
      return startBot("Crash detected");
    }

    if (String(code).startsWith("2")) {
      const delay = parseInt(String(code).slice(1)) * 1000;
      console.log(chalk.yellow(`⏳ Restarting in ${delay / 1000}s`));
      setTimeout(() => startBot("Scheduled restart"), delay);
    }
  });

  bot.on("error", (err) => {
    console.error(chalk.red("🔥 Fatal error:"), err);
  });
}

// ▶️ تشغيل أولي
startBot("Initial launch");
