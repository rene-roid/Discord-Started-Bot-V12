const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'icon',
    commands: ['icon'],
    aliases: [''],
    description: "Get a pfp",

    // requiredPermissions: [''],
    // cooldown: "5s",
    category: "Fun",

    expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let icon = await neko.sfw.avatar()

            message.channel.send(icon.url)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}