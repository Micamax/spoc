const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const token = process.env.BOT_TOKEN;
const fs = require(`fs`);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

bot.on('message', message => {
    
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.split(' ')[0].slice(config.prefix.length);
    if (command === 'ping') {
      message.channel.send('Pinging...').then(msg => {
        msg.edit(`**Response took:** \`(${msg.createdTimestamp - message.createdTimestamp}ms)\``);
      });
    };

});

bot.on('presenceUpdate', (oldMember, newMember) => {
    if (!newMember.roles.some(r=>[`${config.SubRole}`].includes(r.name)) ) return;
if(newMember.user.presence.game == null) return;
if(oldMember.user.presence.game == null) return;
   if(!newMember.user.presence.game.streaming)
    return newMember.removeRole(newMember.guild.roles.find("name", `${config.LiveRole}`))
else
    return newMember.addRole(newMember.guild.roles.find("name", `${config.LiveRole}`))
  });
  
bot.on("message", message => {
    if(message.content === "]TeamSpoc")  {
        message.member.addRole("name", `TeamSpoc`)
        message.replt("TeamSpoc Role was given")
    }
});

bot.on("message", message => {
    if(message.content === "]teamspoc")  {
        message.member.addRole("name", `teamspoc`)
        message.replt("TeamSpoc Role was given")
    }
});

bot.login(process.env.BOT_TOKEN)
