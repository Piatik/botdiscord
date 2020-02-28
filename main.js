/* eslint-disable indent */
const discord = require("discord.js");
const bot = new discord.Client();
const PREFIX = "&";

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
	if (msg.content === "&commande") {
        msg.reply("Votre commande a été prise en compte ! Nous vous préviendrons lorsque votre commande sera prise !");
        bot.channels.fetch("682694070627467435").then(channel => (channel.name).sendMessage("Yo"));
	}
});


bot.login("NjgyNTk2MTkyNTcxNDkwMzY4.XlfTUg.epnRzE9VSEUn2e8NjiMNBI990NU");

