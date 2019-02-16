const Discord = require("discord.js");
const kitsu = require('node-kitsu');

module.exports.run = async (client,message,args) => {
 const uwu = message.content.split(" ").slice(1).join(" ");
try {
kitsu.searchAnime(uwu, 0).then(results => {
let anibd = new Discord.RichEmbed()
.setTitle(`Results for ${uwu}:`)
.setTimestamp()
.setThumbnail(`${results[0].attributes.posterImage.medium}`)
.setImage(`${results[0].attributes.coverImage.original}`)
.setColor(`${message.member.displayHexColor}`)
.setDescription(`Synopsis:\n\n${results[0].attributes.synopsis}`)
.addField('**Title(s):**', `${results[0].attributes.titles.en}\n${results[0].attributes.titles.en_jp}\n${results[0].attributes.titles.ja_jp}`, true)
.addField('**Status:**', `${results[0].attributes.status}`, true)
.addField('**Episode Count:**', `${results[0].attributes.episodeCount}`, true)
.addField('**Start Date:**', `${results[0].attributes.startDate}`, true)
.addField('**End Date:**', `${results[0].attributes.endDate}`, true)
.addField('**Average Rating:**', `${results[0].attributes.averageRating}`, true)
.addField('**Age Rating:**', `${results[0].attributes.ageRating}`, true)
.addField('**Age Rating Guide:**', `${results[0].attributes.ageRatingGuide}`, true)
message.channel.send({embed: anibd});
});   
} catch (err){
if(err)return message.channel.send(`\`\`Error :\`\`\n\`\`\`${err}\`\`\``);
}
}
module.exports.help = {
    name: "anime",
	type: "Misc",
	info: "Gets an anime from kitsu",
	perms: "MEMBER / none",
	useage: `<anime name>`
}