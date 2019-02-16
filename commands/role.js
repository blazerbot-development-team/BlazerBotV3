const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

let subtext = message.content.split(/\s+/g).slice(1).join(" ");
	const role = message.guild.roles.find("name", subtext);
	const neko = message.guild.members.find("id", "377271843502948354");
	const atted = message.mentions.members.first();
	
	if (message.member == neko && atted){
		let subtext = message.content.split(/\s+/g).slice(2).join(" ");
	    let role = message.guild.roles.find("name", subtext);
		if (!role)return message.reply("Please check the spelling and try again");
		if (!atted.roles.has(role.id)){
			atted.addRole(role);
			message.channel.send('i have added the role ``"'+ subtext +'"`` to '+ atted.displayName +'');
		}
		if (atted.roles.has(role.id)){
			atted.removeRole(role);
			message.channel.send('i have removed the role ``"'+ subtext +'"`` from '+ atted.displayName +'');
		}
	}
	

	
	if (!atted){
	
	if (role.hasPermission("ADMINISTRATOR"))return message.reply('That role has the ``"ADMINISTRATOR"`` permission and thus i cannot take it from you, nor can i give it to you');
	if (!role)return message.reply("Please check the spelling and try again");
	
	if (!message.member.roles.has(role.id)) {
	if (role.hasPermission("KICK_MEMBERS"))return message.reply('That role is a mod role and thus i cannot give it to you');
		message.member.addRole(role);
		message.channel.send('i have added the role ``"'+ subtext +'"`` to you');
		console.log(`${message.member.displayName} has gained the role "${subtext}" in the server ${message.guild}`);
	}
	if (message.member.roles.has(role.id)) {
	if (role.hasPermission("KICK_MEMBERS"))return message.reply('That role is a mod role and thus i cannot take it from you');
	    message.member.removeRole(role);
	    message.channel.send('i have removed the role ``"'+ subtext +'"`` from you');
	    console.log(`${message.member.displayName} has been removed of the role "${subtext}" in the server ${message.guild}`);
	}
   }
}
module.exports.help = {
    name: "role"
}