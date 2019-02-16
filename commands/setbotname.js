const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

let name = message.content.split(" ").slice(2).join(" ");
	if (!message.author.id == "377271843502948354")return;
	if (message.author.id == "377271843502948354"){
	  message.guild.me.client.user.setUsername(name);
	message.channel.send(`you set my new name to ${name}`);  
	}
	console.log(`${message.author.username} set my new name to ${name}`);

}

module.exports.help = {
    name: "setbotname"
}