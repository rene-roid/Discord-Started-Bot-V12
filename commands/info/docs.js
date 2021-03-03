const { MessageEmbed } = require('discord.js')
const axios = require('axios')

module.exports = {

    guildOnly: false,

    name: 'docs',
    commands: ['docs'],
    aliases: [''],
    description: "Displays Discord.JS documentation",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Info",

    // expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user
        const target = mentions.members.first()

        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
            args
        )}`

        try {

            axios
            .get(uri)
            .then((embed) => {
                const { data } = embed
        
                if (data && !data.error) {
                  message.channel.send({ embed: data })
                } else {
                  message.reply(`Could not find that documentation`)
                }
              })

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}