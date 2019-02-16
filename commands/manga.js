const Discord = require("discord.js");
const kitsu = require('node-kitsu');

module.exports.run = async (client,message,args) => {
 const uwu = message.content.split(" ").slice(1).join(" ");

 kitsu.searchManga(uwu, 0).then(results => {
	 console.log(results[0]);
	 let anibd = new Discord.RichEmbed()
.setTitle(`Results for ${uwu}:`)
.setTimestamp()
.setImage(`${results[0].attributes.coverImage.original}`)
.setColor(`${message.member.displayHexColor}`)
.setDescription(`Synopsis:\n\n${results[0].attributes.synopsis}`)
.addField('**Type:**', `${results[0].type}`)
.addField('**Title(s):**', `${results[0].attributes.titles.en}\n${results[0].attributes.titles.en_jp}\n${results[0].attributes.titles.ja_jp}`)
.addField('**Status:**', `${results[0].attributes.status}`)
.addField('**Chapter Count:**', `${results[0].attributes.chapterCount}`)
.addField('**Start Date:**', `${results[0].attributes.startDate}`)
.addField('**End Date:**', `${results[0].attributes.endDate}`)
.addField('**Average Rating:**', `${results[0].attributes.averageRating}`)
.addField('**Age Rating:**', `${results[0].attributes.ageRating}`)
.addField('**Age Rating Guide:**', `${results[0].attributes.ageRatingGuide}`)
message.channel.send({embed: anibd});
});   

 }
module.exports.help = {
    name: "manga"
}
