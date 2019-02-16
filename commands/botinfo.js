const Discord = require("discord.js");
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+"D"):"")+(written?", ":"")
      +(hours?(written=true,hours+"H"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+"M"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+"S"):"")+(written?" ":"");
};
module.exports.run = async (client,message,args) => {
  var kitty = client.users.get("377271843502948354");
  let uses = client.users.filter(u=>u.bot===false).size;
  let bots = client.users.filter(u=>u.bot===true).size;
  let createdAtRaw = client.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let embed = new Discord.RichEmbed()
  .setAuthor(`Bot Info for ${client.user.username}:`, `${client.user.avatarURL}`)
  .setColor(`${message.member.displayHexColor}`)
  .setThumbnail(`${client.user.avatarURL}`)
  .setTimestamp()
  .addField('**Bot name:**', `\`\`\`css\n${message.guild.members.find('id', client.user.id).displayName}\`\`\``, true)
  .addField('**Creator:**', `\`\`\`css\n${kitty.username}#${kitty.discriminator}\`\`\``, true)
  .addField('**Node.js:**', `\`\`\`css\n${process.version}\`\`\``, true)
  .addField('**Discord.js:**', `\`\`\`css\nv${Discord.version}\`\`\``, true)
  .addField('**Useage:**', `\`\`\`css\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, true)
  .addField('**Uptime:**', `\`\`\`css\n${parseTime(client.uptime)}\`\`\``, true)
  .addField('**Servers:**', `\`\`\`css\n${client.guilds.size}\`\`\``, true)
  .addField('**Channels:**', `\`\`\`css\n${client.channels.size}\`\`\``, true)
  .addField('**Members:**', `\`\`\`css\n${uses}\`\`\``, true)
  .addField('**Bots:**', `\`\`\`css\n${bots}\`\`\``, true)
  .setDescription(`\`\`\`${client.user.tag} was Created on ${createdAt[1]}-${createdAt[2]}-${createdAt[3]}\`\`\``)
  .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "botinfo",
  type: "Info",
  info: "Sends the info about the bot",
  perms: "MEMBER / none",
  useage: ""
}
