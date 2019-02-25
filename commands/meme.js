const { RichEmbed } = require('discord.js'), 
      { get } = require('node-superfetch');

exports.run = async (bot, message, args, color) => {
  
  let m = await message.channel.send(`*Please Wait...*`);
  try {
  const { body } = await get('https://api-to.get-a.life/meme')

  let memeEmbed = new RichEmbed() 
  .setColor(color) 
  .setTitle(body.text)
  .setImage(body.url)
  .setTimestamp()
  .setFooter(`Request by: ${message.author.tag}`);
  
  message.channel.send(memeEmbed).then(() => { m.delete();});
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
  } 
}

exports.help = {
    name: "meme",
    description: "Get a random meme",
    usage: "meme"
}