const Discord = require("discord.js");
const kitsu = require('node-kitsu');

module.exports.run = async (client,message,args) => {
 const uwu = message.content.split(" ").slice(1).join(" ");

 kitsu.searchAnime(uwu, 0).then(results => {
let anibd = new Discord.RichEmbed()
.setTitle(`Pic result for ${uwu}:`)
.setImage(`${results[0].attributes.posterImage.large}`)
.setColor(`${message.member.displayHexColor}`)
.setTimestamp()
message.channel.send({embed: anibd});
});

 

 }
module.exports.help = {
name: "animepic"
}
