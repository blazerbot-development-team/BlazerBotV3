const Discord = require("discord.js");
const gifSearch = require("gif-search");
const PREFIX = "b/";

exports.run = (bot, message, args) => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
  
      if (!args[0]) return message.channel.send("`"+PREFIX+"gif <gname>`");
  
      gifSearch.random(args[0]).then(
          gifUrl => {
  
          let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
          var embed = new Discord.RichEmbed()
              .setColor(`#${randomcolor}`)
              .setImage(gifUrl)
          message.author.send(embed);
      });
  
      message.channel.send(`<@${message.author.id}> **check your dm!** :postbox:`);
  
  }
module.exports.help = {
    name: "gif"
}