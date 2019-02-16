const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

 const { body } = await get("https://api.bunnies.io/v2/loop/random/?media=gif,png");
        await message.channel.send({
            embed: {
                "title": "bunny ...",
                "color": 0x00fff0,
                "image": {
                    "url": body.media.gif
                }
            }
        });

};
module.exports.help = {
	name: "bunny"
}