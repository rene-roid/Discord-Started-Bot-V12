const { MessageEmbed } = require('discord.js')
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {

    guildOnly: false,

    name: 'advice',
    commands: ['advice'],
    aliases: [''],
    description: "Get a fresh advice",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    // expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const user = message.member.user

        try {

            let data = await random.getAdvice()
            message.channel.send(data)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}