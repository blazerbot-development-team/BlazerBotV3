const Discord = require("discord.js");
const { TOKEN } = require('../config');

module.exports.run = async (client,message,args) => {

if (message.author.id !== "377271843502948354")return;

message.channel.send('Restarting...')
    .then(msg => client.destroy())
    .then(() => setTimeout(login, 10000));

	function login() {
    client.login(TOKEN)
	.then(() => message.channel.send("Restarted"))
	.then(() => console.log('Restarted'));
}

}
module.exports.help = {
    name: "restart"
}