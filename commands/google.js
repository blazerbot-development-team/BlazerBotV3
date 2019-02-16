const Discord = require("discord.js");
const google = require('google-it');

module.exports.run = async (client,message,args) => {
if(message.author.id !== '377271843502948354')return;
const input = args.join(' ');
if(input.includes("porn"))return message.reply("No you pervert");
if(input.includes("hentai"))return message.reply("No you pervert");

google({ query: input, disableConsole: true }).then(results => {
let gbed = new Discord.RichEmbed()
.setTitle(`Results for ${input}:`)
.setDescription(`${results[0].title}`)
.setColor(`${message.member.displayHexColor}`)
.addField('**Link:**', `${results[0].link}`)
.addField('**Description:**', `${results[0].snippet}`)
 message.channel.send({embed: gbed});
}).catch(error => {
    if(error)return message.channel.send('``Error:``\n```js'+ error +'```');
});


}
module.exports.help = {
    name: "google"
}
