const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var years = Math.floor(days/365); days %= 365;
    var written = false;
    return(years?(written=true,years+" Year"):"")+(written?", ":"")
      +(days?(written=true,days+" Days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" Hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" Minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" Seconds"):"")+(written?" ":"");
};
var use = message.mentions.users.first();
	var mem = message.mentions.members.first();
	if (mem) {
	var embed = new Discord.RichEmbed()
	.setColor(`${mem.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${use.avatarURL}`)
	.setDescription(`info ...`)
	.setTitle(`Userinfo for: ${mem.displayName}`)
	.addField(`**Username & tag:**`, `${use.tag}`)
	.addField(`**ID:**`, `${use.id}`)
	.addField(`**Status:**`, `${mem.presence.status}`)
	.addField(`**Created at:**`, `${use.createdAt.toUTCString()}`)
	.addField(`**Acount age:**`, parseTime(Date.now()-use.createdTimestamp)+' old')
	.addField(`**Joined at:**`, `${mem.joinedAt.toUTCString()}`)
	.addField(`**Highest role:**`, `${mem.highestRole.name}`)
	.addField(`**display Color?:**`, `${mem.displayHexColor}`)
	.addField(`**Server Deafened?:**`, `${mem.serverDeaf}`)
	.addField(`**Server muted?:**`, `${mem.serverMute}`)
	.addField(`**Roles:**`, `${mem.roles.map(r => r.name).join(', ')}`)
	.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	message.channel.send({embed: embed});
	}
	if (!mem) {
		var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${message.author.avatarURL}`)
	.setDescription(`info ...`)
	.setTitle(`Userinfo for: ${message.member.displayName}`)
	.addField(`**Username & tag:**`, `${message.author.tag}`)
	.addField(`**ID:**`, `${message.author.id}`)
	.addField(`**Status:**`, `${message.member.presence.status}`)
	.addField(`**Created at:**`, `${message.author.createdAt.toUTCString()}`)
	.addField(`**Acount age:**`, parseTime(Date.now()-message.author.createdTimestamp)+' old')
	.addField(`**Joined at:**`, `${message.member.joinedAt.toUTCString()}`)
	.addField(`**Highest role:**`, `${message.member.highestRole.name}`)
	.addField(`**Display Color?:**`, `${message.member.displayHexColor}`)
	.addField(`**Server Deafened?:**`, `${message.member.serverDeaf}`)
	.addField(`**Server muted?:**`, `${message.member.serverMute}`)
	.addField(`**Roles:**`, `${message.member.roles.map(r => r.name).join(', ')}`)
	.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	message.channel.send({embed: embed});
	console.log(`${message.author.username} got thier userinfo in ${message.guild}`)
	}

}
module.exports.help = {
    name: "userinfo"
}
