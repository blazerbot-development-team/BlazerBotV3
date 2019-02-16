const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
if (message.author.id !== '377271843502948354')return;
	
  if(!args || args.size < 1) return message.reply("please provide a command to reload.");
  
  // the path is relative to the *current folder*, so just ./filename.js
  
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  
  message.channel.send('The command ``'+ args[0] +'`` has been reloaded');
  
  console.log(`${message.author.username} reloaded the ${args[0]} command`);
};
module.exports.help = {
	name: "reload"
}