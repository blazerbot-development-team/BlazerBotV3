const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {
	
 const { body } = await get("https://dog.ceo/api/breeds/image/random");
        await message.channel.send({
            embed: {
                "title": "doggo",
                "color": 0xfff000,
                "image": {
                    "url": body.message
                }
            }
        });


};
module.exports.help = {
	name: "dog",
	alias: "doggo"
}