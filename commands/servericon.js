const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

		var RichEmbed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setTimestamp()
		.setImage(`${message.guild.iconURL}`)
		.setTitle(`Server icon for: ${message.guild}`)
		.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		message.channel.send({embed: RichEmbed})
	console.log(`servericon command has been used by ${message.author.username} in ${message.guild}`);

}

module.exports.help = {
    name: "servericon"
}