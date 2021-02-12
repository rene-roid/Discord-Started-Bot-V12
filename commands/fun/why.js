const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'why',
    commands: ['why'],
    aliases: [''],
    description: "Why...",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let why = await neko.sfw.why({ text: text })

            const embed = new MessageEmbed()
            .setDescription(why.why)
            .setColor('RANDOM')

            message.channel.send(embed)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}