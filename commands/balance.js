const Discord = require("discord.js");
// let credits = require("../jsons/credits.json");
// let bank = require("../jsons/bank.json");
                 
module.exports.run = async (client,message, args) => {
 
 let atted = message.mentions.members.first();
 
//  if (!atted) {
//   if(!credits[message.author.id]){
//     credits[message.author.id] = {
//       credits: 0
//     };
//   }
//   if(!bank[message.author.id]){
//     bank[message.author.id] = {
//       bank: 0
//     };
//   }

//   let uCoins = credits[message.author.id].credits;
//   let bCoins = bank[message.author.id].bank
  
//   message.delete(10000);
//   let balbd = new Discord.RichEmbed()
//   .setTitle('Your balance')
//   .setColor(`${message.member.displayHexColor}`)
//   .addField('**Credits:**', `$${uCoins}`)
//   .addField('**Credits in Bank:**', `$${bCoins}`)
//   message.channel.send(balbd);
//  }
//  if (atted) {
// 	 if(!credits[message.mentions.users.first().id]){
//     credits[message.mentions.users.first().id] = {
//       credits: 0
//     };
//   }
//   if(!bank[message.mentions.users.first().id]){
//     bank[message.mentions.users.first().id] = {
//       bank: 0
//     };
//   }
  
//   let tCoins = credits[message.mentions.users.first().id].credits;
//   let bBank = bank[message.mentions.users.first().id].bank
  
//   message.delete(10000);
//    let balbed = new Discord.RichEmbed()
//   .setTitle(`${message.mentions.members.first().displayName}'s balance`)
//   .setColor(`${message.mentions.members.first().displayHexColor}`)
//   .addField('**Credits:**', `$${tCoins}`)
//   .addField('**Credits in Bank:**', `$${bBank}`)
//   message.channel.send(balbed);
//  }
}

module.exports.help = {
  name: "balance",
  alias: "bal"
}
