const { MessageEmbed } = require('discord.js')

module.exports = {

    guildOnly: true,

    name: 'slowmode',
    commands: ['slowmode'],
    aliases: [''],
    description: "Determines the slowmode duration of a channel",

    requiredPermissions: ['MANAGE_CHANNELS'],
    cooldown: "5s",
    category: "Moderation",

    expectedArgs: "<Number>",

    minArgs: 1,
    maxArgs: 1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        const user = message.member.user

        try {

            const messageArray = message.content.split(' ')
            const args = messageArray.slice(1)
      
            if (isNaN(args)) {
              const NONOMBER = new MessageEmbed()
              .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
              .setDescription(`❎ ${user.username}, please give me a number`)
              .setColor(`#ff3d3d`)
              .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
              .setTimestamp()
                message.channel.send(NONOMBER)
              return
            }
      
            const time = messageArray.slice(1)
      
            if (time <= 0) {
                message.channel.setRateLimitPerUser(0)
                const DISS = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`✅ ${user.username}, slowmode has been removed`)
                .setColor(`#3cf05a`)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setTimestamp()
                message.channel.send(DISS)
            } if (time > 21600) {
                const TOBIG = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`❎ ${user.username}, please give me a number between 0 and 21600`)
                .setColor(`#ff3d3d`)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setTimestamp()
                  message.channel.send(TOBIG)
            } if (time >= 1) {
                const awaits = await message.channel.setRateLimitPerUser(args[0])
                const ACT = new MessageEmbed()
                  .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                  .setDescription(`✅ ${user.username}, slowmode has been set to ${time}`)
                  .setColor(`#3cf05a`)
                  .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                  .setTimestamp()
                  message.channel.send(ACT)
              }

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}