const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
// let warnings = require("../jsons/warnings.json");

module.exports.run = async (client,message,args) => {

//   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you have to have the `ADMINISTRATOR` permission to use this command");
//   let wUser = message.mentions.users.first();
//   if(!wUser) return message.reply("I couldn't find that member");
//   let reason = args.join(" ").slice(22);

//   if(!warnings[wUser.id]) {
//     warnings[wUser.id] = {
//     warnings: 0
//   };
//   }
  
//   message.delete(5000);
//   if (message.author.id === wUser.id)return message.channel.send("lolz ... you can't clear your own warnings").then(msg => {msg.delete(5000)});
  
//   let sWar = warnings[wUser.id].warnings;

//   warnings[wUser.id] = {
//     warnings: 0
//   };

//   fs.writeFile("./jsons/warnings.json", JSON.stringify(warnings), (err) => {
//     if (err) console.log(err)
//   });

// let wmem = message.mentions.members.first();

// if (reason) {
// let warnbed = new Discord.RichEmbed()
// .setTitle(`you've been cleared of all your warnings`)
// .setTimestamp()
// .setDescription(`in the server: ${message.guild}`)
// .setColor(0x00ff00)
// .addField('**By:**', `${message.member.displayName}`)
// .addField('**For:**', `${reason}`)
// .addField('**Remember:**', 'all of your warnings are GLOBAL ... meaning if you are warned in any server with this bot it carries over to all of the servers with this bot ..... try not to get more than 3 wrnings')
// wUser.send(warnbed);
// }
// if (!reason) {
// let warnbe = new Discord.RichEmbed()
// .setTitle(`you've been cleared of all your warnings`)
// .setTimestamp()
// .setDescription(`in the server: ${message.guild}`)
// .setColor(0x00ff00)
// .addField('**By:**', `${message.member.displayName}`)
// .addField('**Remember:**', 'all of your warnings are GLOBAL ... meaning if you are warned in any server with this bot it carries over to all of the servers with this bot ..... try not to get more than 3 wrnings')
// wUser.send(warnbe);	
// }

// message.channel.send(`${message.member.displayName} has cleared all of ${wmem.displayName}'s warnings`);
// console.log(`${message.member.displayName} has cleared all of ${wmem.displayName}'s warnings in the server ${message.guild}`);

}

module.exports.help = {
  name: "clearwarn"
}
