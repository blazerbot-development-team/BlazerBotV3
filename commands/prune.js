const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
var neko = message.guild.members.find("id", "139213278571134977");
if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "139213278571134977")return message.reply('You need to have the ``"MANAGE_MESSAGES"`` permission to use this command');
if(!message.guild.members.find('id', client.user.id).hasPermission("MANAGE_MESSAGES"))return message.reply('I need to have the ``"MANAGE_MESSAGES"`` permission to use this command');
message.delete(500);
const amount = parseInt(message.content.split(' ').slice(1,2).join(' '));
const mem = message.mentions.members.first();
if(!amount) return message.reply('Must specify an amount to delete!');
if(!amount && !mem)return message.reply('the command is used like this: \n`bm/prune 13` or `bn/prune 13 @user`');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if(mem) {
 const filterBy = mem ? mem.user.id : mem.bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 message.channel.send(`**${message.member.displayName}** pruned ${amount} messages from **${mem.displayName}**`).then(msg=>{msg.delete(15000)});
 } else {
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 message.channel.send(`**${message.member.displayName}** pruned ${amount} messages`).then(msg=>{msg.delete(15000)});
 }
});  
}

module.exports.help = {
    name: "prune",
	type: "Mod",
	info: "prunes messages in a server",
	perms: "MANAGE_MESSAGES",
	useage: "@user <Amount>/ --prune <amount>"
}
