const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
const prefix = "Nb.";
  let remindtime = message.content.split(" ").slice(2,3).join(" ");
  let inn = message.content.split(" ").slice(1,2).join(" ");
  let note = message.content.split(" ").slice(3).join(" ");
	if(inn!=="in"||inn=="help"){
    return message.reply("Usage: ```"+ prefix +"remindme in <1s/m/h/d> <note>```");
  }
  message.channel.send(`I've set a reminder for you for ${remindtime}`);
  setTimeout(function(){
  let remindbd = new Discord.RichEmbed()
  .setTitle("I'm sorry for the mention, but here's your reminder ...")
  .setTimestamp()
  .setColor(`${message.member.displayHexColor}`)
  .addField('**Reminder:**', `${note}`)
  message.reply({embed: remindbd});
  }, ms(remindtime));


}

module.exports.help = {
  name: "remindme",
  alias: "setreminder",
  type: "Misc"
}
