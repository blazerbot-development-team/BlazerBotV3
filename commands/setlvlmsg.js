const Discord = require("discord.js");
const fs = require("fs");
// const lvlmsg = require("../jsons/lvlmsg.json");
// const lvls = require("../jsons/guildlvl.json");
                 
module.exports.run = async (client,message, args) => {
	
	// const uwu = message.content.split(" ").slice(1).join(" ");
	
	// if (lvls[message.guild.id].lvls == "false")return message.reply("Sorry but the leveling feature is Disabled for this server");
	
	// let neko = message.guild.members.find("id", "377271843502948354");
	// if (!message.member.hasPermission(8) && !neko)return message.reply('You need the ``"ADMINISTRATOR"`` permission to use this command');
	
	// if(!lvlmsg[message.guild.id]){
  //   lvlmsg[message.guild.id] = {
  //     lvlmsg: (`${uwu}`)
  //   };
  // }
  // if(lvlmsg[message.guild.id]){
  //   lvlmsg[message.guild.id] = {
  //     lvlmsg: (`${uwu}`)
  //   };
  // }
  
	// message.channel.send('Set the server level up message to: ```'+ uwu +'```');
	//   fs.writeFile("./jsons/lvlmsg.json", JSON.stringify(lvlmsg), (err) => {
  //   if (err) console.log(err)
  // });
}
	
module.exports.help = {
	name: "setlvlmsg"
}
