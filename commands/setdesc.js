const Discord = require("discord.js");
const fs = require("fs");
// const descriptions = require("../jsons/descriptions.json");
                 
module.exports.run = async (client,message, args) => {
	
	// const uwu = message.content.split(" ").slice(1).join(" ");
	
	// if(!descriptions[message.author.id]){
  //   descriptions[message.author.id] = {
  //     descriptions: (`${uwu}`)
  //   };
  // }
  // if(descriptions[message.author.id]){
  //   descriptions[message.author.id] = {
  //     descriptions: (`${uwu}`)
  //   };
  // }
  
	// message.channel.send('Set profile description to: ```'+ uwu +'```');
	//   fs.writeFile("./jsons/descriptions.json", JSON.stringify(descriptions), (err) => {
  //   if (err) console.log(err)
  // });
}
	
module.exports.help = {
	name: "setdesc"
}