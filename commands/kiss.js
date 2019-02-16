const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {

const uwu = message.mentions.members.first();

const Neko = require("neko.js");

let nekoclient = new Neko.Client(); 

  let kiss = await nekoclient.kiss();

	if (!uwu){
    nekoclient.kiss().then((kiss) => {
		let kissbd = new Discord.RichEmbed()
		.setTitle(`awwh ... here ...kissy kissy`)
		.setImage(kiss.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: kissbd})
		}); 
	}
	if (uwu){
		nekoclient.kiss().then((kiss) => {
		let kissbd = new Discord.RichEmbed()
		.setTitle(`${message.member.displayName} is kssing ${uwu.displayName}`)
		.setImage(kiss.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: kissbd})
		}); 
	}
	

}
module.exports.help = {
    name: "kiss"
}