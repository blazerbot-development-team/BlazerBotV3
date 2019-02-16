const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

module.exports.run = async (client, message, args) => {
	const tag = message.content.split(" ").slice(1).join(" ");
	
	if (!tag)return message.channel.send('current nsfw commands are: ``"boobs"``, ``"hentai"``, ``"cosplay"``, and ``"4k"`` ```Useage: Nb.nsfw <command>```');
	
	if (tag == "boobs"){
    var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (message.channel.name !== "nsfw" && !message.channel.nsfw) {
        message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            message.channel.send({file: r.body})
        })
    }
  }
  if (tag == "hentai"){
	    if (message.channel.name !== "nsfw" && !message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'HENTAI_GIF',
        'hentai_irl'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                message.channel.send({file: r.body})
            })
        })
    }
	if (tag == "cosplay"){
		if (message.channel.name !== "nsfw" && !message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                message.channel.send({file: r.body})
            })
        })
	}
  if (tag == "4k"){
	   if (message.channel.name !== "nsfw" && !message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                message.channel.send({file: r.body})
            })
        })
  }
  
  
}
module.exports.help = {
	name: "nsfw"
}