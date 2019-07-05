const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag}!artık aktif`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam kardeşim');
  }
  if (msg.content.toLowerCase() === '!steam') {
    msg.channel.sendMessage('https://steamcommunity.com/profiles/76561198395530103/');
  }
    if (msg.content.toLowerCase() === '!ball') {
      msg.channel.sendMessage('Arda Küre');
  }

});

client.login('NTc5NDI3Nzg3MzMzNjk3NTQx.XOG05g.yiK_nqbjHoVR0LoG9cREp94JEIc');
