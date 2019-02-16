const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	var leezard = [
	"Leezard Leezard",
	"Showing the lizard love i see?",
	"oof .. it's a leezard",
	"well ... someone likes lezards",
	"is this a leeard?",
	"another one"
	];

	 let lzd = leezard[Math.floor(Math.random() * leezard.length)];
	
const Neko = require("neko.js");

let nekoclient = new Neko.Client();

    let lizard = await nekoclient.lizard();
	
    nekoclient.lizard().then((lizard) => {
		let lzdbd = new Discord.RichEmbed()
		.setTitle(lzd)
		.setImage(lizard.url)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: lzdbd})
		});

}
module.exports.help = {
    name: "lizard"
}
