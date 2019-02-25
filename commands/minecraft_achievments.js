const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
var achievement = args.join(" ");
var request = require('request');
var fs = require('fs');
  function isEmpty(obj) {
   if (obj == null) return true;
   if (obj.length > 0)    return false;
   if (obj.length === 0)  return true;
   if (typeof obj !== "object") return true;
   for (var key in obj) {
       if (hasOwnProperty.call(obj, key)) return false;
   }
   return true;
 }
       var wembed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setAuthor(`${message.author.username} try again`, `${message.author.avatarURL}`)
         .addField("**bb/mca {ur achievement}**", "change `{ur achievement}` for the desired achievement")
         .setTimestamp()
         .setFooter('BlazerBot', `${bot.user.avatarURL}`);
       if (isEmpty(achievement)) return message.channel.send(wembed);
       var download = function(uri, filename, callback){
         request.head(uri, function(err, res, body){
           //console.log('content-type:', res.headers['content-type']);
           //console.log('content-length:', res.headers['content-length']);
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
         });
       };
       var dir = `achievement.png`;
       download('https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement%20unlocked&t='+achievement, dir, function(){
       message.channel.send(`${message.author} has earned a new achievement.`, {file: dir});
       });

    }

    module.exports.help = {
        name: "mca"
    }