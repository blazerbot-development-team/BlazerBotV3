const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let prefix = "Nb.";

let comd = message.content.split(" ").slice(1, 2).join(" ");
let commandfile = client.commands.get(comd);
let alias = client.aliases.get(comd);
if(!commandfile && !alias)return message.channel.send(`ayy, "${comd}" wasn't a command`);

let glitch = message.content.split(" ").slice(2).join(" ");

let servr = client.guilds.find("id", "413921975312842752");
let bugchannl = servr.channels.find("id", "450932371097780224");

message.channel.send("i've set the report, thanks for the feedback");
let embed = new Discord.RichEmbed()
.setTitle('Bug Report:')
.setThumbnail(`${client.user.avatarURL}`)
.setColor(0xfff000)
.setDescription(`Reported by: ${message.author.tag}\n\nThier ID: ${message.author.id}`)
.addField('**Command:**', `${comd}`)
.addField('**Bug/Glitch/Problem:**', `${glitch}`)
bugchannl.send({embed});


}

module.exports.help = {
    name: "glitch",
    alias: "bug"
}
