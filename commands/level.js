const Discord = require("discord.js");
// const xp = require("../jsons/xp.json");
// const lvls = require("../jsons/guildlvl.json");

module.exports.run = async (client, message, args) => {

// let atted = message.mentions.users.first();

// if (lvls[message.guild.id].lvls == "false")return message.reply("Sorry but the feature is Disabled for this server");

// if (!atted){
//   if(!xp[message.author.id]){
//    xp[message.author.id] = {
//      xp: 0,
//      level: 1
//   };
// }
//   let curxp = xp[message.author.id].xp;
//   let curlvl = xp[message.author.id].level;
//   let nxtLvlXp = curlvl * 800;
//   let difference = nxtLvlXp - curxp;

//   let lvlEmbed = new Discord.RichEmbed()
//   .setTitle(`${message.member.displayName}'s level stats`)
//   .setThumbnail(`${message.author.avatarURL}`)
//   .setColor(`${message.member.displayHexColor}`)
//   .addField("**Level:**", curlvl, true)
//   .addField("**XP:**", curxp, true)
//   .addField('**Next level in:**', `${difference} XP`)
//   message.channel.send(lvlEmbed).then(msg => {msg.delete(10000)});
//   message.delete(10000);
// }
// if (atted){
// 	if(!xp[atted.id]){
//    xp[atted.id] = {
//      xp: 0,
//      level: 1
//   };
// }
//   let curxp = xp[atted.id].xp;
//   let curlvl = xp[atted.id].level;
//   let nxtLvlXp = curlvl * 800;
//   let difference = nxtLvlXp - curxp;

//   let lvlEmbed = new Discord.RichEmbed()
//   .setTitle(`${message.mentions.members.first().displayName}'s level stats`)
//   .setThumbnail(`${atted.avatarURL}`)
//   .setColor(`${message.mentions.members.first().displayHexColor}`)
//   .addField("**Level:**", curlvl, true)
//   .addField("**XP:**", curxp, true)
//   .addField('**Next level in:**', `${difference} XP`)
//   message.channel.send(lvlEmbed).then(msg => {msg.delete(10000)});
//   message.delete(10000);
// }

}

module.exports.help = {
  name: "level",
  alias: "lvl"
}
