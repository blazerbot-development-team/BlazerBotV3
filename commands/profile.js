const Discord = require("discord.js");

// let credits = require("../jsons/credits.json");
// let warnings = require("../jsons/warnings.json");
// let reps = require("../jsons/reputations.json");
// let descriptions = require("../jsons/descriptions.json");
// let bank = require("../jsons/bank.json");
// let kicks = require("../jsons/kicks.json");
// let bans = require("../jsons/bans.json");
// let xp = require("../jsons/xp.json");
// let cookies = require("../jsons/cookies.json");
// let lvls = require("../jsons/guildlvl.json");

module.exports.run = async (client,message, args) => {

// const atted = message.mentions.members.first();
// const usr = message.mentions.users.first();
 
//  if (!atted) {
//   if(!credits[message.author.id]){
//     credits[message.author.id] = {
//       credits: 0
//     };
//   }
//   if(!cookies[message.author.id]){
//     cookies[message.author.id] = {
//       cookies: 0
//     };
//   }
//   if(!warnings[message.author.id]){
//     warnings[message.author.id] = {
//       warnings: 0
//     };
//   }
//   if (!reps[message.author.id]) {
// 	  reps[message.author.id] = {
// 		  reps: 0
// 	  };
//   }
//   if (!descriptions[message.author.id]) {
// 	  descriptions[message.author.id] = {
// 		  descriptions: (" ")
// 	  };
//   }
//   if(!bank[message.author.id]){
//     bank[message.author.id] = {
//       bank: 0
//     };
//   }
//   if (!kicks[message.author.id]) {
// 	  kicks[message.author.id] = {
// 		  kicks: 0
// 	  };
//   }
//   if (!bans[message.author.id]) {
// 	  bans[message.author.id] = {
// 		  bans: 0
// 	  };
//   }
//   if(!xp[message.author.id]){
//     xp[message.author.id] = {
//       xp: 0
//     };
//   }

//   let uCoins = credits[message.author.id].credits;
//   let uWarns = warnings[message.author.id].warnings;
//   let uReps = reps[message.author.id].reps;
//   let desc = descriptions[message.author.id].descriptions;
//   let bankCred = bank[message.author.id].bank;
//   let totkicks = kicks[message.author.id].kicks;
//   let totbans = bans[message.author.id].bans;
//   let totxp = xp[message.author.id].xp;
//   let lvl = xp[message.author.id].level;
//   let cokie = cookies[message.author.id].cookies;
  
//   if (lvls[message.guild.id].lvls == "false" && !cokie) {
//   let preflmbed = new Discord.RichEmbed()
//   .setTitle(`${message.member.displayName}'s profile`)
//   .setDescription(`${desc}`)
//   .setTimestamp()
//   .setColor(`${message.member.displayHexColor}`)
//   .setThumbnail(`${message.author.avatarURL}`)
//   .addField('**Credits:**', `$${uCoins}`)
//   .addField('**Credits in bank:**', `$${bankCred}`)
//   .addField('**Inventory:**', `Empty`)
//   .addField('**Reputation:**', `${uReps}`)
//   .addField('**Total Warnings:**', `${uWarns}`)
//   .addField('**Total kicks:**', `${totkicks}`)
//   .addField('**Total Bans:**', `${totbans}`)
//   message.channel.send(preflmbed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild}`);
//  }
//  if (lvls[message.guild.id].lvls == "false" && cokie) {
//   let preflmbed = new Discord.RichEmbed()
//   .setTitle(`${message.member.displayName}'s profile`)
//   .setDescription(`${desc}`)
//   .setTimestamp()
//   .setColor(`${message.member.displayHexColor}`)
//   .setThumbnail(`${message.author.avatarURL}`)
//   .addField('**Credits:**', `$${uCoins}`)
//   .addField('**Credits in bank:**', `$${bankCred}`)
//   .addField('**Inventory:**', `🍪x${cokie}`)
//   .addField('**Reputation:**', `${uReps}`)
//   .addField('**Total Warnings:**', `${uWarns}`)
//   .addField('**Total kicks:**', `${totkicks}`)
//   .addField('**Total Bans:**', `${totbans}`)
//   message.channel.send(preflmbed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild}`);
//  }
//   if (lvls[message.guild.id].lvls == "true" && !cokie) {
//   let preflmbed = new Discord.RichEmbed()
//   .setTitle(`${message.member.displayName}'s profile`)
//   .setDescription(`${desc}`)
//   .setTimestamp()
//   .setColor(`${message.member.displayHexColor}`)
//   .setThumbnail(`${message.author.avatarURL}`)
//   .addField('**Credits:**', `$${uCoins}`)
//   .addField('**Credits in bank:**', `$${bankCred}`)
//   .addField('**Inventory:**', `Empty`)
//   .addField('**Reputation:**', `${uReps}`)
//   .addField('**Total Warnings:**', `${uWarns}`)
//   .addField('**Total kicks:**', `${totkicks}`)
//   .addField('**Total Bans:**', `${totbans}`)
//   .addField('**Level:**', `level ${lvl} with ${totxp} xp`)
//   message.channel.send(preflmbed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild}`);
//  }
//  if (lvls[message.guild.id].lvls == "true" && cokie) {
//   let preflmbed = new Discord.RichEmbed()
//   .setTitle(`${message.member.displayName}'s profile`)
//   .setDescription(`${desc}`)
//   .setTimestamp()
//   .setColor(`${message.member.displayHexColor}`)
//   .setThumbnail(`${message.author.avatarURL}`)
//   .addField('**Credits:**', `$${uCoins}`)
//   .addField('**Credits in bank:**', `$${bankCred}`)
//   .addField('**Inventory:**', `🍪x${cokie}`)
//   .addField('**Reputation:**', `${uReps}`)
//   .addField('**Total Warnings:**', `${uWarns}`)
//   .addField('**Total kicks:**', `${totkicks}`)
//   .addField('**Total Bans:**', `${totbans}`)
//   .addField('**Level:**', `level ${lvl} with ${totxp} xp`)
//   message.channel.send(preflmbed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild}`);
//  }
 
// } 
 
//  if (atted) {
// 	 if(!credits[usr.id]){
//     credits[usr.id] = {
//       credits: 0
//     };
//   }
//   if(!cookies[usr.id]){
//     cookies[usr.id] = {
//       cookies: 0
//     };
//   }
//   if(!warnings[usr.id]){
//     warnings[usr.id] = {
//       warnings: 0
//     };
//   }
//   if (!reps[usr.id]) {
// 	  reps[usr.id] = {
// 		  reps: 0
// 	  };
//   }
//   if (!descriptions[usr.id]) {
// 	  descriptions[usr.id] = {
// 		  descriptions: ("")
// 	  };
//   }
//   if(!bank[usr.id]){
//     bank[usr.id] = {
//       bank: 0
//     };
//   }
//     if (!bans[usr.id]) {
// 	  bans[usr.id] = {
// 		  bans: 0
// 	  };
//   }
//   if (!kicks[usr.id]) {
// 	  kicks[usr.id] = {
// 		  kicks: 0
// 	  };
//   }
//   if(!xp[usr.id]){
//     xp[usr.id] = {
//       xp: 0
//     };
//   }

//   let mCoins = credits[usr.id].credits;
//   let mWarns = warnings[usr.id].warnings;
//   let mReps = reps[usr.id].reps;
//   let descp = descriptions[usr.id].descriptions;
//   let bankCredt = bank[usr.id].bank;
//   let ttbans = bans[usr.id].bans;
//   let tkicks = kicks[usr.id].kicks;
//   let ttxp = xp[usr.id].xp;
//   let levl = xp[usr.id].level;
//   let cocki = cookies[usr.id].cookies;
  
//   if (lvls[message.guild.id].lvls == "false" && !cocki){
//   let profileembed = new Discord.RichEmbed()
//   .setTitle(`${atted.displayName}'s profile`)
//   .setDescription(`${descp}`)
//   .setTimestamp()
//   .setColor(`${atted.displayHexColor}`)
//   .setThumbnail(`${usr.avatarURL}`)
//   .addField('**Credits:**', `$${mCoins}`)
//   .addField('**Credits in bank:**', `$${bankCredt}`)
//   .addField('**Inventory:**', `Empty`)
//   .addField('**Reputation:**', `${mReps}`)
//   .addField('**Total Warnings:**', `${mWarns}`)
//   .addField('**Total Kicks:**', `${tkicks}`)
//   .addField('**Total Bans:**', `${ttbans}`)
//   message.channel.send(profileembed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild} to see ${usr.username}'s profile`);
//  }
//  if (lvls[message.guild.id].lvls == "false" && cocki){
//   let proileembed = new Discord.RichEmbed()
//   .setTitle(`${atted.displayName}'s profile`)
//   .setDescription(`${descp}`)
//   .setTimestamp()
//   .setColor(`${atted.displayHexColor}`)
//   .setThumbnail(`${usr.avatarURL}`)
//   .addField('**Credits:**', `$${mCoins}`)
//   .addField('**Credits in bank:**', `$${bankCredt}`)
//   .addField('**Inventory:**', `🍪x${cocki}`)
//   .addField('**Reputation:**', `${mReps}`)
//   .addField('**Total Warnings:**', `${mWarns}`)
//   .addField('**Total Kicks:**', `${tkicks}`)
//   .addField('**Total Bans:**', `${ttbans}`)
//   message.channel.send(proileembed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild} to see ${usr.username}'s profile`);
//  }
//  if (lvls[message.guild.id].lvls == "true" && !cocki){
//   let profileembed = new Discord.RichEmbed()
//   .setTitle(`${atted.displayName}'s profile`)
//   .setDescription(`${descp}`)
//   .setTimestamp()
//   .setColor(`${atted.displayHexColor}`)
//   .setThumbnail(`${usr.avatarURL}`)
//   .addField('**Credits:**', `$${mCoins}`)
//   .addField('**Credits in bank:**', `$${bankCredt}`)
//   .addField('**Inventory:**', `Empty`)
//   .addField('**Reputation:**', `${mReps}`)
//   .addField('**Total Warnings:**', `${mWarns}`)
//   .addField('**Total Kicks:**', `${tkicks}`)
//   .addField('**Total Bans:**', `${ttbans}`)
//   .addField('**Level:**', `level ${levl} with ${ttxp}xp`)
//   message.channel.send(profileembed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild} to see ${usr.username}'s profile`);
//  }
//  if (lvls[message.guild.id].lvls == "true" && cocki){
//   let proileembed = new Discord.RichEmbed()
//   .setTitle(`${atted.displayName}'s profile`)
//   .setDescription(`${descp}`)
//   .setTimestamp()
//   .setColor(`${atted.displayHexColor}`)
//   .setThumbnail(`${usr.avatarURL}`)
//   .addField('**Credits:**', `$${mCoins}`)
//   .addField('**Credits in bank:**', `$${bankCredt}`)
//   .addField('**Inventory:**', `🍪x${cocki}`)
//   .addField('**Reputation:**', `${mReps}`)
//   .addField('**Total Warnings:**', `${mWarns}`)
//   .addField('**Total Kicks:**', `${tkicks}`)
//   .addField('**Total Bans:**', `${ttbans}`)
//   .addField('**Level:**', `level ${levl} with ${ttxp}xp`)
//   message.channel.send(proileembed);
//   console.log(`${message.author.username} used the profile command in the server ${message.guild} to see ${usr.username}'s profile`);
//  }
 
// }
 
 
}
module.exports.help = {
	name: "profile"
}