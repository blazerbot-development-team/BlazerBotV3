const Discord = require("discord.js");
const translate = require('google-translate-api');

module.exports.run = async (client, message, args) => {
	let prefix = "Nb.";

const idk = message.content.split(" ").slice(2).join(" ");
const lang = message.content.split(" ").slice(1,2).join(" ");

if(lang == "help")return message.reply('mk ... soo, heres how you use the translate command ... ```'+ prefix +'translate <language to> <what you wanna translate>``` if you want a list of available languages, please use ``'+ prefix +'languages``'); 
if(!lang)return message.reply('mk ... soo, heres how you use the translate command ... ```'+ prefix +'translate <language to> <what you wanna translate>``` if you want a list of available languages, please use ``'+ prefix +'languages``'); 
     translate(idk, {to: lang}).then(res => {
		 let gbd = new Discord.RichEmbed()
		 .setColor(`${message.member.displayHexColor}`)
		 .setTimestamp()
		 .addField(`**From: ${res.from.language.iso}**`, `${idk}`)
		 .addField(`**To: ${lang}**`, `${res.text}`)
		 .setFooter(`Reqested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		 message.channel.send({embed: gbd})
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
	return message.channel.send('```'+ err +'```');
    console.error(err);
});
	 
	 

};
module.exports.help = {
	name: "translate"
}
