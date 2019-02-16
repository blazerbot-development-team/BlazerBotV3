const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

const target = message.mentions.members.first();

         const { body } = await get("https://rra.ram.moe/i/r?type=pout");
        await message.channel.send({
            embed: {
                "title": `${message.member.displayName} is pouting ...`,
                "color": 0x00fff0,
                "image": {
                    "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
                }
            }
        });

};
module.exports.help = {
	name: "pout"
}