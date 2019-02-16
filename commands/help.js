const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
const uwu = message.content.split(" ").slice(1).join(" ");

if (!uwu && message.author.id !== "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .setDescription(`\nwe need [Beta Testers](https://discordapp.com/invite/SQFbf9q) <= join and ask to be a beta tester`)
    .addField('**Misc commands:**', '`ping` `glitch` `emote` `remindme` `anime` `weather` `invite` `role` `sayd`')
    .addField('**Image commands:**', '`neko` `rem` `animepic` `nsfw` `lizard` `dog` `bird` `bunny` `pat` `pout` `cry` `hug` `kiss` `OwO` `avatar` `servericon`')
	.addField('**Currency commands:**', 'DISABLED ATM')
    .addField('**Moderation commands:**', '`poll` `mute` `kick` `ban` `prune`')
    .addField('**Information commands:**', '`roleinfo` `serverinfo` `botinfo` `userinfo`')
    .addField('**Music commands:**', '`play` `skip` `stop` `pause` `resume` `volume` `np` `queue`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}
if (!uwu && message.author.id == "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .setDescription(`\nwe need [Beta Testers](https://discordapp.com/invite/SQFbf9q) <= join and ask to be a beta tester`)
    .addField('**Misc commands:**', '`ping` `dbot` `glitch` `emote` `remindme` `anime` `weather` `role` `sayd`')
    .addField('**Image commands:**', '`neko` `rem` `animepic` `nsfw` `lizard` `dog` `bird` `bunny` `pat` `pout` `cry` `hug` `kiss` `OwO` `avatar` `servericon`')
	.addField('**Currency commands:**', 'DISABLED ATM')
    .addField('**Moderation commands:**', '`poll` `mute` `kick` `ban` `prune`')
    .addField('**Information commands:**', '`roleinfo` `serverinfo` `botinfo` `userinfo`')
    .addField('**Masters exclusive:**', '`setbotname` `setinv` `seton` `setdnd` `setidle` `google` `urban` `eval` `restart` `reload` `leave`')
	.addField('**Music commands:**', '`play` `skip` `stop` `pause` `resume` `volume` `np` `queue`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}

}
module.exports.help = {
    name: "help",
	alias: "h",
	type: "help"
}
