const Discord = require("discord.js");
const fs = require("fs");
// let credits = require("../jsons/credits.json");

module.exports.run = async (client, message, args) => {

  // if(!credits[message.author.id]){
  //   return message.reply("You don't have any money").then(msg => {msg.delete(5000)})
  // }

  // let pUser = message.mentions.users.first();
  // let pmem = message.mentions.members.first();

  // if(!credits[pUser.id]){
  //   credits[pUser.id] = {
  //     credits: 0
  //   };
  // }

  // let pCoins = credits[pUser.id].credits;
  // let sCoins = credits[message.author.id].credits;

  // const uwu = message.content.split(" ").slice(1).join(" ");

  // if(sCoins < args[1]) return message.reply("I'm sorry, but you don't have enough money to transfer that much").then(msg => {msg.delete(5000)});

  // credits[message.author.id] = {
  //   credits: sCoins - parseInt(args[1])
  // };

  // credits[pUser.id] = {
  //   credits: pCoins + parseInt(args[1])
  // };
  // message.delete(5000);
  // message.channel.send(`${message.member.displayName} has given ${pmem.displayName} $${args[1]}`).then(msg => {msg.delete(5000)});
  // console.log(`${message.member.displayName} has given ${pmem.displayName} $${args[1]} in gthe server ${message.guild}`);

  // fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
  //   if(err) cosole.log(err)
  // });


}

module.exports.help = {
  name: "transfer"
}
