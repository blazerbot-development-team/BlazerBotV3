const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`Links:`)
	.addField("**Invite Bot:**",`[BlazerBot/Invite (admin)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) || [BlazerBot/Invite (mod)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1412820055)`)
	.addField("**Official Support Server:**", `[BlazerBot Official](https://discord.gg/sa8RGHk)`)
	message.channel.send({embed: embed});
console.log(`sent links to ${message.author.username} in ${message.guild}`);
}

module.exports.help = {
    name: "invite"
}
