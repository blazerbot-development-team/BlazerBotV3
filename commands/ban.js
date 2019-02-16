const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let ugu = message.content.split(" ").slice(1, 2).join(" ");	  
let wmem = message.mentions.members.first()||message.guild.members.get(ugu);
const neko = message.guild.members.get("139213278571134977");
  if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "139213278571134977")return message.reply('You need to have the `"BAN_MEMBERS"` permission to use this command.');
  if(!wmem)return message.reply("I couldn't find that user.");
  if(wmem === neko)return message.reply("I won't ban my master!");
  let reason = message.content.split(" ").slice(2).join(" ");

if (reason) {
wmem.ban(reason);
}
if (!reason) {
wmem.ban();
}

message.channel.send(`${message.member.displayName} has banned ${wmem.displayName}`);

}
module.exports.help = {
    name: "ban"
}
