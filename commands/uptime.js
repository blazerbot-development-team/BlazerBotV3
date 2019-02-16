const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+" D"):"")+(written?", ":"")
      +(hours?(written=true,hours+" H"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" M"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" S"):"")+(written?"":"");
};
module.exports.run = (client,message) => {
message.channel.send(`i've been up for: **${parseTime(client.uptime)}**`);
}
module.exports.help = {
name: "uptime"
}