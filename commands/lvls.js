const Discord = require("discord.js");
const fs = require("fs");
// const lvls = require("../jsons/guildlvl.json");
// const prefixes = require("../jsons/prefixes.json");

module.exports.run = async (client,message,args) => {
	const onoff = message.content.split(" ").slice(1).join(" ");
// 	const prefix = prefixes[message.guild.id].prefixes;
	
// 	if (!lvls[message.guild.id]){
// 		lvls[message.guild.id] = {
// 			lvls: "false"
// 		}
// 	}
	
// const neko = message.guild.members.find("id", "377271843502948354");
// if (!message.member.hasPermission("ADMINISTRATOR") && !neko)return message.channel.send('You need the ``"ADMINISTRATOR"`` permision to run this command');
// if (!onoff) {
// 	let mbd = new Discord.RichEmbed()
// 	.setTitle("lvls help:")
// 	.setDescription("This command Enables/Disables the level feature/commands for a server")
// 	.setColor(`${message.member.displayHexColor}`)
// 	.addField('**Uesage:**', '``'+ prefix +'lvls on`` / ``'+ prefix +'lvls off``')
// 	.addField('**Required permission(s):**', '``"ADMINISTRATOR"``')
// 	message.channel.send({embed: mbd});
// }
//   if (onoff == "on"){
// 	  if (!lvls[message.guild.id]){
// 		lvls[message.guild.id] = {
// 			lvls: "true"
// 		}
// 	}
// 	if (lvls[message.guild.id].lvls == "false"){
// 		lvls[message.guild.id] = {
// 			lvls: "true"
// 		}
// 	}
// 	message.channel.send('``'+ message.member.displayName +'`` has Enabled the leveling system for this server');
// 	console.log(`${message.member.displayName} has Enabled the leveling system for the server: "${message.guild}"`);
//   }
//   if (onoff == "off"){
// if (!lvls[message.guild.id]){
// 		lvls[message.guild.id] = {
// 			lvls: "false"
// 		}
// 	}
// 	if (lvls[message.guild.id].lvls == "true"){
// 		lvls[message.guild.id] = {
// 			lvls: "false"
// 		}
// 	}
// 	message.channel.send('``'+ message.member.displayName +'`` has Disabled the leveling system for this server');
// 	console.log(`${message.member.displayName} has Disabled the leveling system for the server: "${message.guild}"`);
//   }
//   fs.writeFile("./jsons/guildlvl.json", JSON.stringify(lvls), (err) => {
//     if (err) console.log(err)
//   });
   
}
module.exports.help = {
    name: "lvls"
}
