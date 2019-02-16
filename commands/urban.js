const Discord = require("discord.js");
const ud = require('urban-dictionary');

module.exports.run = async (client,message,args) => {
if(message.author.id !== '377271843502948354')return;
const uwu = message.content.split(" ").slice(1).join(" ");
var definition = uwu;

ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {
    console.error(error.message)
  } else {
let ubd = new Discord.RichEmbed()
.setTitle(`Ud - ${entries[0].word}`)
.setColor(`${message.member.displayHexColor}`)
.addField('**Definition:**', `${entries[0].definition}`)
.addField('**Example:**', `${entries[0].example}`)
.addField('**Thumbs Up:**', `${entries[0].thumbs_up}`)
.addField('**Thumbs Down:**', `${entries[0].thumbs_down}`)
.addField('**Permalink:**', `${entries[0].permalink}`)
.setFooter(`Written by: ${entries[0].author}`, `${message.guild.iconURL}`)
message.channel.send({embed: ubd});
  }
})


}
module.exports.help = {
    name: "urban"
}