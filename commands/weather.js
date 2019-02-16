const Discord = require("discord.js");
const weather = require('weather-js');

let f2c = function(num) {
return (Math.round(((num-32)*5)/9) +'°C');
};

module.exports.run = async (client,message,args) => {
const place = message.content.split(" ").slice(1).join(" ");
if(!place)return;
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);
		   let mbd = new Discord.RichEmbed()
		   .setTitle(`Weather for ${result[0].current.observationpoint}:`)
		   .setDescription(`${result[0].current.skytext}`)
		   .setColor(`${message.member.displayHexColor}`)
		   .setThumbnail(`${result[0].current.imageUrl}`)
		   .addField('**Timezone:**', `UTC ${result[0].location.timezone}`)
		   .addField('**Time:**', `${result[0].current.observationtime}`)
		   .addField('**Temperature:**', `${result[0].current.temperature}°F / ${f2c(result[0].current.temperature)}`)
		   .addField('**Feels like:**', `${result[0].current.feelslike}°F / ${f2c(result[0].current.feelslike)}`)
		   .addField('**Winds:**', `${result[0].current.winddisplay}`)
		   .addField('**Humidity:**', `${result[0].current.humidity}%`)
		   message.channel.send({embed: mbd});
});
}
module.exports.help = {
    name: "weather"
}
