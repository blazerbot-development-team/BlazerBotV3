const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	message.channel.send('pong');
			message.channel.send('Pinging...').then(sent => {
    sent.edit(`my ping - ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log(`ping command has been used by ${message.author.username} in ${message.guild}`);
    });
	
}
module.exports.help = {
	name: "ping"
}