const { MessageEmbed } = require('discord.js');

module.exports = {

    guildOnly: false,

    name: 'help',
    commands: ['help'],
    aliases: ['h'],
    description: "Help command",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Info",

    expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
      const commandInstance = instance.commandHandler.commands;
      const user = message.member.user

      const removeDup = (arr) => {
        return [...new Set(arr)];
      };
        
      if (args[0]) {

      } else {
        const commands = instance.commandHandler.commands;
  
        let emx = new MessageEmbed()
          .setTitle(`Help Menu | ${client.user.username}`)
          .setColor('#fff94f')
          .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
          .setThumbnail(client.user.displayAvatarURL())
          .setTimestamp()
  
        let com = {};
        for (let comm of commands) {
          let category = comm.category || "Unknown";
          let name = comm.names;
  
          if (!com[category]) {
            com[category] = [];
          }
          com[category].push(name);
        }
  
        for(const [key, value] of Object.entries(com)) {
          let category = key;
  
          let desc = "`" + value.join("`, `") + "`";
  
          emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
        }
  
        return message.channel.send(emx);
      }
  },
};
