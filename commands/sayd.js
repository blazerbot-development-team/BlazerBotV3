const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let attd = message.mentions.members.first();
let botmessage = message.content.split(" ").slice(1).join(" ");
if(botmessage.includes("@everyone")) botmessage = botmessage.replace("@everyone", "@ everyone");
if(botmessage.includes("@here")) botmessage = botmessage.replace("@here", "@ here");
if(botmessage.includes(attd)) botmessage = botmessage.replace(attd, `@${attd.displayName}`);

message.channel.send(botmessage);
message.delete();
}

module.exports.help = {
  name: "sayd"
}
