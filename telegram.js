const Telegram = require('telegraf/telegram');

const bot = new Telegram(process.env.BOT_TOKEN);

function sendMessage(message) {
  return new Promise((resolve, reject) => {
    const chatIDs = process.env.CHAT_IDS.split('-').map(id => parseInt(id));
    const promiseArr = [];
  
    chatIDs.forEach(chatID => {
      promiseArr.push(bot.sendMessage(chatID, message));
    });

    Promise.allSettled(promiseArr).then(resolve);
  });
}

module.exports = {
  sendMessage
};