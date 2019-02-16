const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

 const { body } = await get("https://rra.ram.moe/i/r?type=owo");
        await message.channel.send({
            embed: {
                "title": "OwO",
                "color": 0xff0000,
                "image": {
                    "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
                }
            }
        });
 
};
module.exports.help = {
	name: "OwO",
	alias: "owo"
}