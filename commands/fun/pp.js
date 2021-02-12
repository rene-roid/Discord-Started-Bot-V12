const { MessageEmbed } = require('discord.js')

module.exports = {

    guildOnly: false,

    name: 'pp',
    commands: ['pp'],
    aliases: [''],
    description: "Shows your pp size",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    // expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user
        const target = mentions.members.first()

        try {

            const user = message.member.user

            const randompp = '='.repeat(Math.floor(Math.random() * 20))
    
            const ppembed = new Discord.MessageEmbed()
                .setTitle(`${user.username}'s pp size`)
                .setDescription(`8${randompp}D`)
                .setColor(`#ff3d3d`)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(ppembed)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}