const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
const uwu = message.content.split(" ").slice(1).join(" ");

var nkolve = [
"nya",
"mew",
"purrr",
"mrow",
"nyan",
"meow",
"neko looovvveee",
"i guess you like neko's too",
"neko powwweeerrr",
"yush yush yush",
"sooo kyuuttee",
"ugu"
];
let nko = nkolve[Math.floor(Math.random() * nkolve.length)];
var lwdnko = [
"ugu ... so lewd",
"you ... you lewdie!",
"HENTAI! BAKA BAKA BAKA BAKA HEENNNTAAII!!!",
"how could you?",
"ravioli ravioli dun lewd the neko loli",
"if you insist"
];
let lewdnko = lwdnko[Math.floor(Math.random() * lwdnko.length)];

const Neko = require("neko.js");

let nekoclient = new Neko.Client(); // default api key is defaulted :D

    let neko = await nekoclient.neko();	// logs to console the url for Neko picture  

    let why = await nekoclient.why(); // logs to console a funny why joke

    let LewdNeko = await nekoclient.LewdNeko();	// logs to console a LewdNeko image url
	
	let nsfwchan = message.guild.channels.find("name", "nsfw");

	if (!uwu){
    nekoclient.neko().then((neko) => {
		let nkobd = new Discord.RichEmbed()
		.setTitle(nko)
		.setImage(neko.neko)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: nkobd})
		}); 
	}
	if (uwu == "why?"){
    nekoclient.why().then(why => message.channel.send(why.why)); // logs to console a funny why joke
	}
	if (uwu == "lewd"){
	if (!message.channel.nsfw)return message.channel.send("Don't do that here BAKA .. there are kids around");
	nekoclient.LewdNeko().then((LewdNeko) => {
		let lwdbd = new Discord.RichEmbed()
		.setTitle(lewdnko)
		.setImage(LewdNeko.neko)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send({embed: lwdbd})
	  });
	}
}
module.exports.help = {
    name: "neko"
}