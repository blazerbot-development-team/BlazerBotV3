const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client,message,args) => {
    
  let tomute = message.mentions.members.first()||message.guild.members.find('id', message.content.split(' ').slice(1).join(' '));
  if(!tomute) return message.reply("Couldn't find user.");
  let reason = args.slice(2).join(" ");
  let muterole = message.guild.roles.find(`name`, "Super-Muted");
  
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Super-Muted",
        color: "#fce804",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime){
	  tomute.addRole(muterole.id);
	  message.channel.send(`${tomute.displayName} has been muted`);
	}
  if(mutetime){
  try{
    await message.channel.send(`${tomute.displayName} has been muted for ${mutetime}`)
  }catch(e){
    message.channel.send(`${tomute.displayName} has been muted for ${mutetime}`)
  }
  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`${tomute.displayName}'s time it now up and they have been unmuted`);
  }, ms(mutetime));
}

      
}
module.exports.help = {
    name: "mute"
}
