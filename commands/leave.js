const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

if (message.author.id !== '139213278571134977')return;

const uwu = message.content.split(" ").slice(1).join(" ");
 
if (uwu){
	let server = client.guilds.find("name", uwu);
if (!server)return message.reply("I'm not in that server ... Sorry");
server.leave()
  .then(g => console.log(`I Left the guild ${g}`))
  .catch(console.error);
}
message.delete(5000);
    
}

module.exports.help = {
    name: "leave"
}
