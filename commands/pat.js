const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {

const uwu = message.mentions.members.first();

const Neko = require("neko.js");

let nekoclient = new Neko.Client(); // default api key is defaulted :D

    // Asynchronous(Async/await) examples.

    
    let pat = await nekoclient.pat(); // logs to console the url for pat gif 
  
	if (!uwu){
    nekoclient.pat().then((pat) => {
		let patbd = new Discord.RichEmbed()
		.setTitle(`awwww .. you're lonely ... pat pat pat`)
		.setImage(pat.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: patbd})
		}); // logs to console the url for pat gif
	}
	if (uwu){
		nekoclient.pat().then((pat) => {
		let patbd = new Discord.RichEmbed()
		.setTitle(`${message.member.displayName} is patting ${uwu.displayName}`)
		.setImage(pat.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: patbd})
		});
	}

}
module.exports.help = {
    name: "pat"
}