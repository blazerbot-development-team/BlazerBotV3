const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

        const { body } = await get("http://random.birb.pw/tweet/");
        return message.channel.send({
            embed: {
                "title": "isa birdo",
                "color": 0x0ff0f0,
                "image": {
                    "url": `https://random.birb.pw/img/${body}`
                }
            }
        });

};
module.exports.help = {
	name: "bird",
	alias: "birdo"
}