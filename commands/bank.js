const Discord = require("discord.js");
const fs = require("fs");

// let credits = require("../jsons/credits.json");
// let bank = require("../jsons/bank.json");
// const prefixes = require("../jsons/prefixes.json");

module.exports.run = async (client,message,args) => {
	
// 	const prefix = prefixes[message.guild.id].prefixes;
	
// 	const uwu = message.content.split(" ").slice(1,2).join(" ");
	
// if (!uwu){
// 	message.channel.send("hmmm .. well there are 2 ways you can use this command, to add money to your bank acc: ```"+ prefix +"bank add <amount>``` or to take money from your bank acc: ```"+ prefix +"bank take <amount>```");
// }
	
// if (uwu === "add"){
// 	if(!credits[message.author.id]){
//     return message.reply("You don't have any money").then(msg => {msg.delete(5000)})
//   }
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
//   let pCoins = credits[message.author.id].credits;
//   let sCoins = bank[message.author.id].bank;
  
//   const uw = message.content.split(" ").slice(2).join(" ");
//   if (!uw)return message.reply("Please enter an amount to add");

//   if(pCoins < uw) return message.reply("I'm sorry, but you don't have enough money").then(msg => {msg.delete(5000)});

//   credits[message.author.id] = {
//     credits: pCoins - parseInt(uw)
//   };

//   bank[message.author.id] = {
//     bank: sCoins + parseInt(uw)
//   };
  
//   fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
//     if(err) cosole.log(err)
//   });
// fs.writeFile("./jsons/bank.json", JSON.stringify(bank), (err) => {
//     if(err) cosole.log(err)
//   });	
	
// 	message.delete(5000);
//   message.channel.send(`You Successfully added $${uw} to your bank acc`).then(msg => {msg.delete(5000)});
//   console.log(`${message.member.displayName} has put $${uw} in thier bank, using the command in the server ${message.guild}`);
// 	}
	
	
// if (uwu === "take"){
// 	if(!bank[message.author.id]){
//     return message.reply("You don't have any money in your bank").then(msg => {msg.delete(5000)})
//   }
  
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
  
//   let pCoins = credits[message.author.id].credits;
//   let sCoins = bank[message.author.id].bank;

//   const ugu = message.content.split(" ").slice(2).join(" ");
//   if (!ugu)return message.reply("Please enter an amount to take");

//   if(sCoins < ugu) return message.reply("I'm sorry, but you don't have enough money in your bank to do that").then(msg => {msg.delete(5000)});

//   credits[message.author.id] = {
//     credits: pCoins + parseInt(ugu)
//   };

//   bank[message.author.id] = {
//     bank: sCoins - parseInt(ugu)
//   };
  
//   fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
//     if(err) cosole.log(err)
//   });
// fs.writeFile("./jsons/bank.json", JSON.stringify(bank), (err) => {
//     if(err) cosole.log(err)
//   });	
	
// 	message.delete(5000);
//   message.channel.send(`You withdrew $${ugu} from your bank acc`).then(msg => {msg.delete(5000)});
//   console.log(`${message.member.displayName} withdrew $${ugu} from thier bank, using the command in the server ${message.guild}`);
// }
	
}

module.exports.help = {
    name: "bank"
}