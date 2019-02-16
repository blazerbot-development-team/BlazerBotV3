const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

//   const prefixes = require("../jsons/prefixes.json");

//   const prefix = prefixes[message.guild.id].prefixes;

// var neko = message.guild.members.find("id", "377271843502948354");
//   if(!message.member.hasPermission("ADMINISTRATOR") && !neko)return message.reply('you need the "`ADMINISTRATOR`" permission to use this');
//   if (!args[0])return message.channel.send("please enter a new prefix");
  
//   prefixes[message.guild.id] = {
//     prefixes: args[0]
//   };

//   fs.writeFile("./jsons/prefixes.json", JSON.stringify(prefixes), (err) => {
//     if (err) console.log(err)
//   });

//   message.delete(10000);
//   message.channel.send('New server prefix set to: ``'+ args[0] +'``').then(msg => {msg.delete(10000)}); //10000 is 10 seconds
//   console.log(`${message.member.displayName} set the prefix for ${message.guild} to: ${args[0]}`);

  }
module.exports.help = {
  name: "setprefix"
}
