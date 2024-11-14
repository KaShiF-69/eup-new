const Discord = require('discord.js');

const client = new Discord.Client();

const keepAlive = require("./server");
keepAlive();
const fs = require('fs');
const discord = require('discord.js');

client.on('ready', () => {
    client.user.setPresence({ activity: { name: "Euphoria", type: "WATCHING", url: "https://dsc.gg/eup" }, status: "dnd" });
    console.log(`${client.user.tag} is Online.
Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users `);;
});


client.on('guildMemberAdd',async(member) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Welcome to Euphoria!')
    .setDescription(`Welcome <@${member.id}> in Euphoria\nDon't Forget To Read <#874920306463084544>\nPlease Take Your Roles <#801069840751788062>\nSay Hi To Everyone In <#801070684339699762> <a:heart:863421832900378634>`)
    .setImage('https://media.discordapp.net/attachments/847340566659596288/850669476848599050/standard.gif')
    .setFooter('Keep Supporting Euphoria. #EuphoriaOP', 'https://cdn.discordapp.com/attachments/915208085289717771/915208175387545640/Euphoria.gif')
  
  client.channels.cache.get("").send(exampleEmbed);
})


client.on('guildMemberAdd',async(member) => {
    client.channels.cache.get("801070684339699762").send(`Welcome <@${member.id}> To Euphoria Please Read <#874920306463084544> And Get <#801069840751788062> <a:heart:863421832900378634>` ).then(msg=>msg.delete({timeout:"200000"})
    );
})


client.login(process.env.token)