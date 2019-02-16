const Discord = require("discord.js");
const cfdreamingbot = require('cfdreamingbot');

module.exports.run = async (client, message) => {
let num = message.content.split(' ').slice(1).join(' ');
if(num.length > 4||num.length < 0)return message.channel.send("Please enter a 4 digit #")
let arr = [];
let ppll = [];
let i = 0;
let ppl = client.users.forEach(usr => {
    if(usr.discriminator === num){
 ppll.push(`${usr.tag}`);
 ++i;
    }
  });
let pplin = message.guild.members.forEach(member => {
    if(member.user.discriminator === num) arr.push(`${member.user.tag}`);
  });

if(i>25){
let embed = new Discord.RichEmbed()
.setTitle(`People found with the discrim ${num} :`)
.setColor(`${message.member.displayHexColor}`)
.addField(`**Total:**`, `\`\`\`css\n${ppll.slice(0,25).join('\n')}\n\nand ${i-25} others\`\`\``)
.addField('**In this Server:**', `\`\`\`css\n${arr.slice(0,25).join('\n')}\`\`\``)
message.channel.send(embed);
}
if(i<25){
let embed = new Discord.RichEmbed()
.setTitle(`People found with the discrim ${num} :`)
.setColor(`${message.member.displayHexColor}`)
.addField(`**Total:**`, `\`\`\`css\n${ppll.slice(0,25).join('\n')}\`\`\``)
.addField('**In this Server:**', `\`\`\`css\n${arr.slice(0,25).join('\n')}\`\`\``)
message.channel.send(embed);
}

}
module.exports.help = {
  name: "discriminator",
  alias: "discrim"
}