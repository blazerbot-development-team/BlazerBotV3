const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
let ppl = message.guild.members.filter(mem => mem.user.bot === false).size;
let bots = message.guild.members.filter(mem => mem.user.bot === true).size;
let pplonl = message.guild.members.filter(mem => mem.user.bot === false && mem.presence.status !== "offline").size;
let botsonl = message.guild.members.filter(mem => mem.user.bot === true && mem.presence.status !== "offline").size;
let pplofl = message.guild.members.filter(mem => mem.user.bot === false && mem.presence.status == "offline").size;
let botsofl = message.guild.members.filter(mem => mem.user.bot === true && mem.presence.status == "offline").size;

let txt = message.guild.channels.filter(c => c.type === 'text').size;
let vcs = message.guild.channels.filter(c => c.type === 'voice').size;
let cats = message.guild.channels.filter(c => c.type === 'category').size;
let onr = message.guild.owner;

if(onr){
const RichEmbed = new Discord.RichEmbed()
      .setColor(`${message.member.displayHexColor}`)
       .setTimestamp()
	   .setThumbnail(message.guild.iconURL)
	   .setTitle(`${message.guild}`)
	   .addField('**Owner:**', `${onr.displayName}`)
       .addField('**Region:**', `${message.guild.region}`)
       .addField('**# of Roles:**', `${message.guild.roles.size}`)
	   .addField('**Members:**', `\`\`\`${ppl} users - ${pplonl} online | ${pplofl} offline\n${bots} bots - ${botsonl} online | ${botsofl} offline\n${message.guild.members.size} total\`\`\``)
	   .addField('**# of Emojis:**', `${message.guild.emojis.size}`)
       .addField('**Server Created:**', `${message.guild.createdAt.toUTCString()}`)
	   .addField('**Channels:**', `\`\`\`${cats} categories\n${txt} text\n${vcs} voice\`\`\``)
	   message.channel.send({embed: RichEmbed});
}
if(!onr){
const RichEmbed = new Discord.RichEmbed()
      .setColor(`${message.member.displayHexColor}`)
       .setTimestamp()
	   .setThumbnail(message.guild.iconURL)
	   .setTitle(`${message.guild}`)
	   .addField('**Owner:**', `none`)
       .addField('**Region:**', `${message.guild.region}`)
       .addField('**# of Roles:**', `${message.guild.roles.size}`)
	   .addField('**Members:**', `\`\`\`${ppl} users - ${pplonl} online | ${pplofl} offline\n${bots} bots - ${botsonl} online | ${botsofl} offline\n${message.guild.members.size} total\`\`\``)
	   .addField('**# of Emojis:**', `${message.guild.emojis.size}`)
       .addField('**Server Created:**', `${message.guild.createdAt.toUTCString()}`)
	   .addField('**Channels:**', `\`\`\`${cats} categories\n${txt} text\n${vcs} voice\`\`\``)
	   message.channel.send({embed: RichEmbed});
}

}
module.exports.help = {
    name: "serverinfo"
}
