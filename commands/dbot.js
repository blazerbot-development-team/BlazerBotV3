const Discord = require("discord.js");
const request = require('snekfetch');

module.exports.run = async (client, message, args) => {
	const oof = message.content.split(" ").slice(1).join(" ");
  const tag = message.mentions.members.first()||message.guild.members.get(oof);

if(!tag)return message.channel.send("please tag a bot/enter a bots id");
if(!tag.user.bot)return message.channel.send("that user isn't a bot");

message.channel.send({files: ["https://discordbots.org/api/widget/"+ tag.user.id +".png"]})
  
}
module.exports.help = {
	name: "dbot"
}