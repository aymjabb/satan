/**
 * 🌸 Layla User Model
 * Owner: 𝘼𝙮𝙢𝙖𝙣
 */

class User {
  constructor(id, name, chatId) {
    this.id = id;
    this.name = name;
    this.chatId = chatId;
    this.joinedAt = new Date();
  }
}

module.exports = User;
