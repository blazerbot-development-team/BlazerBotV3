const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    const msg = message.content;
    if (msg.startsWith(botconfig.prefix + "advice")) {
        const request = require('request');
        let cn = request("http://api.adviceslip.com/advice", function(err, res, body) {
          try {
              let cnj = JSON.parse(body)
              message.channel.send(cnj.slip.advice)
          } catch (e) {
              return send("**Advice machine :b:roke**")
          }
      });
    }
}

module.exports.help = {
    name: "advice"
}