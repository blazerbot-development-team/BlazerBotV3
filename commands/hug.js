const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {

const uwu = message.mentions.members.first();

const Neko = require("neko.js");

let nekoclient = new Neko.Client(); 

    let hug = await nekoclient.hug();

	if (!uwu){
    nekoclient.hug().then((hug) => {
		let hugbd = new Discord.RichEmbed()
		.setTitle(`ugu .. here's sum Huggies`)
		.setImage(hug.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: hugbd})
		}); 
	}
	if (uwu){
		nekoclient.hug().then((hug) => {
		let hugbd = new Discord.RichEmbed()
		.setTitle(`${message.member.displayName} is hugging ${uwu.displayName}`)
		.setImage(hug.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: hugbd})
		}); 
	}
	
}
module.exports.help = {
    name: "hug"
}