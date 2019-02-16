const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
const search = message.content.split(" ").slice(1).join(" ");
if (!search)return message.channel.send("Please enter an emoji to search for");
if(search){
	let emote = client.emojis.find("name", search);
	if(!emote)return message.channel.send("I couldn't find any emojis with that name");
	message.channel.send(`${emote}`);
}
	
	
}
module.exports.help = {
    name: "emote",
	alias: "emoji"
}
