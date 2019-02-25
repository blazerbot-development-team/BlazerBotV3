//slap
const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

    var images = ["https://i.imgur.com/fm49srQ.gif", "https://i.imgur.com/o2SJYUS.gif", "https://i.imgur.com/Agwwaj6.gif", "https://i.gifer.com/cCX.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vgxCdD_ojfyfBGdZPeei11Hm7cK3zrPJTcsTYZ9Tl-dsA7upzw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPZp5heqxYIWj0l1G0KDC3o9YqJvmAG2FqP6n1BSVGwO5pnSMgg", "https://pa1.narvii.com/6067/68a2bb5829d993b3362a37dce55caa9c0949af6c_hq.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> slapped <@${message.author.id}>.. They might have issues!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> slapped ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "slap"
}