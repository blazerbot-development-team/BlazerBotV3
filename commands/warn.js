const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
// let warnings = require("../jsons/warnings.json");

module.exports.run = async (client,message,args) => {
	
//   let neko = message.guild.members.find("id", "377271843502948354");
//   if(!message.member.hasPermission("ADMINISTRATOR") && !neko)return message.reply("you have to have the `ADMINISTRATOR` permission to use this command");
//   let wUser = message.mentions.users.first();
//   let wmem = message.mentions.members.first();
//   if(!wUser) return message.reply("I couldn't find that member");
//   let reason = args.join(" ").slice(22);

//   if(!warnings[wUser.id]) {
//     warnings[wUser.id] = {
//     warnings: 0
//   };
//   }
  
//   message.delete(5000);
//   if (message.author.id === wUser.id)return message.channel.send("lolz ... you can't warn yourself").then(msg => {msg.delete(5000)});
  
//   const sWar = warnings[wUser.id].warnings;

//   warnings[wUser.id] = {
//     warnings: sWar + parseInt(1)
//   };

//   fs.writeFile("./jsons/warnings.json", JSON.stringify(warnings), (err) => {
//     if (err) console.log(err)
//   });

// if (reason) {
// let warnbed = new Discord.RichEmbed()
// .setTitle(`you've been warned`)
// .setTimestamp()
// .setDescription(`in the server ${message.guild}`)
// .setColor(0x0ff000)
// .addField('**By:**', `${message.member.displayName}`)
// .addField('**For:**', `${reason}`)
// wUser.send(warnbed);
// }
// if (!reason) {
// let warnbe = new Discord.RichEmbed()
// .setTitle(`you've been warned`)
// .setTimestamp()
// .setDescription(`in the server ${message.guild}`)
// .setColor(0x0ff000)
// .addField('**By:**', `${message.member.displayName}`)
// wUser.send(warnbe);	
// }
// message.channel.send(`${message.member.displayName} has warned ${wmem.displayName}`).then(msg => {msg.delete(5000)});
// console.log(`${message.member.displayName} has warned ${wmem.displayName} in the server ${message.guild}`);

}

module.exports.help = {
  name: "warn"
}
