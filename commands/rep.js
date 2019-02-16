const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
// let reps = require("../jsons/reputations.json");

module.exports.run = async (client,message,args) => {

//   let wUser = message.mentions.users.first();
//   if(!wUser) return message.reply("I couldn't find that user");

//   if(!reps[wUser.id]) {
// 	reps[wUser.id] = {
//     reps: 0
//   };
//  }

//   const rdmmt = Math.floor(Math.random() * 1) + 1;

//   if (message.author.id === wUser.id)return message.channel.send("I'm sorry, but you can't rep yourself");
  
//   if(rdmmt === rdmmt){
//     reps[wUser.id] = {
//       reps: reps[wUser.id].reps + rdmmt
//     };
//   fs.writeFile("./jsons/reputations.json", JSON.stringify(reps), (err) => {
//     if (err) console.log(err)
//   });

//  }

// let wmem = message.mentions.members.first();

// message.channel.send(`**${message.member.displayName}** has given a reputation point to **${wmem.displayName}**`);
// console.log(`${message.member.displayName} has repped ${wmem.displayName} in the server ${message.guild}`);

}

module.exports.help = {
  name: "rep"
}