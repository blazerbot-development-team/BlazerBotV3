const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	var neko = message.guild.members.find("id", "139213278571134977");
	if (message.member !== neko)return message.channel.send("You do not have the proper permissions to use this command");
	if (neko) {
	client.user.setStatus("online");
	message.channel.send('My Master set my status to:  ``"online"``');
	console.log('You set my status to online');
	}
}

module.exports.help = {
  name: "seton"
}
