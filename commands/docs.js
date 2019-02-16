const Discord = require("discord.js");
const fetch = require('node-fetch');
const qs = require('querystring');


module.exports.run = async (client,message) => {
    let args = message.content.split(' ');
		let project = 'main';
		let branch = ['stable', 'master', 'rpc', 'commando'].includes(args.slice(-1)[0]) ? args.pop() : 'stable';
		if (['rpc', 'commando'].includes(branch)) {
			project = branch;
			branch = 'master';
		}
		const queryString = qs.stringify({ q: args.join(' ') });
		const res = await fetch(`https://djsdocs.sorta.moe/${project}/${branch}/embed?${queryString}`);
		const embed = await res.json();
		if (!embed) return message.reply("couldn't find the requested information in the documentation.");
		const msg = await message.channel.send({ embed });
		msg.react('🗑');
		let react;
		try {
			react = await msg.awaitReactions(
				(reaction, user) => reaction.emoji.name === '🗑' && user.id === message.author.id,
				{ max: 1, time: 60000, errors: ['time'] }
			);
		react.first().message.delete();
    message.delete();
		} catch (error) {
		msg.reactions.delete();   
		}


}
module.exports.help = {
    name: "docs",
    alias: "djsdocs",
    type: "info",
    info: "filters through the discord.js docs for info",
    perms: "MEMBER / none",
    useage: "<search term>"
  }