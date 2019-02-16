const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

let ppl = message.mentions.users.first();
	let oof = message.mentions.members.first();
	if (ppl) {
		var RichEmbed = new Discord.RichEmbed()
     .setColor(`${oof.displayHexColor}`)
	 .setTimestamp()
	 .setImage(`${ppl.avatarURL}`)
	 .setTitle(`Avatar for: ${oof.displayName}`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed})
	}
	if (!ppl) {
		var RichEmbed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setTimestamp()
		.setImage(`${message.author.avatarURL}`)
		.setTitle(`Avatar for: ${message.member.displayName}`)
		.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		message.channel.send({embed: RichEmbed})
	}
	console.log(`avatar command has been used by ${message.author.username} in ${message.guild}`);

}

module.exports.help = {
    name: "avatar"
}