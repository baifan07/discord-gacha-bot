const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot 已上线");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login("MTQ4MTI2Mzg2OTE3ODQxMzIxNg.GrB_pu._ybCw2hy7zRqb7dp97qlam1psVnZK1zUT_79ok");
