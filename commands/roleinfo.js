const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

let subtext = message.content.split(/\s+/g).slice(1).join(" ");
	var role = message.guild.roles.find("name", subtext);
	if (role) {
		var RichEmbed = new Discord.RichEmbed()
		.setTitle(`roleinfo for ${role.name}`)
		.setThumbnail(message.guild.iconURL)
		.setTimestamp()
		.setColor(`${role.hexColor}`)
		.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		.addField(`**hoist:**`, `${role.hoist}`)
		.addField(`**hexcolor:**`, `${role.hexColor}`)
		.addField(`**role id:**`, `${role.id}`)
		.addField(`**position:**`, `${role.position}`)
		.addField(`**mentionable:**`, `${role.mentionable}`)
		.addField(`**editable:**`, `${role.editable}`)
		.addField(`**role members:**`, `${role.members.map(m => m.displayName).join(` ,\n`)}`, true)
		.addField(`**created at:**`, `${role.createdAt}`)
		message.channel.send({embed: RichEmbed});
	}
	if (!role) {
		message.channel.send(`either that wasn't a role in this server, or the name is incorrect`);
	}
	console.log(`${message.author.username} used the roleinfo command to get info about the role "${subtext}" in the server "${message.guild}"`)

    
}

module.exports.help = {
    name: "roleinfo"
}