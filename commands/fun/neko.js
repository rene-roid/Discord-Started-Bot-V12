const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {

    guildOnly: false,

    name: 'neko',
    commands: ['neko'],
    aliases: [''],
    description: "Get a cute neko >w<",

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

            axios
            .get('https://waifu.pics/api/sfw/neko')
            .then((res) => {
              const embed = new MessageEmbed()
                .setImage(res.data.url)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setTimestamp()
                //.setColor('#f9fcc5')
              channel.send(embed)
            })

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}