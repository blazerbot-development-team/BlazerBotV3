const Discord = require('discord.js');;
const prefix = "b/"

exports.run = async (bot, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.channel.send('**I smoking yay**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 3500);
        setTimeout(() => {
            msg.edit(`Finished smoking`);
        }, 4000);
    });
};

exports.help = {
    name: "smoke",
    category: "Fun",
    description: "Smoke everyday :dab:",
    usage: "smoke"
};