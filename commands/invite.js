const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`links:`)
	.addField("**link to invite me to a server:**",`[Nekobot™/invite (admin)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) || [Nekobot™/invite (mod)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1412820055)`)
	.addField("**link to my support sever(s):**", `[Nekobot™ official](https://discord.gg/SQFbf9q) || [Jiko's bots](https://discord.gg/4eMsYmx)`)
	.addField("**bot list links:**", `[Discord_Bot_List/Nekobot™](https://discordbots.org/bot/389890733576028161) \n[Discord_Bots/Nekobot™](https://bots.discord.pw/bots/389890733576028161) \n[Bots_for_Discord/Nekobot™](https://botsfordiscord.com/bot/389890733576028161) \n[botlist.space/Nekobot™](https://botlist.space/view/389890733576028161) \n[listcord/Nekobot™](https://listcord.com/bot/389890733576028161)`)
	message.channel.send({embed: embed});
console.log(`sent links to ${message.author.username} in ${message.guild}`);
}

module.exports.help = {
    name: "invite"
}
