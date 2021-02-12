const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'spoiler',
    commands: ['spoiler'],
    aliases: [''],
    description: "Creates an individual spoiler per letter for Discord",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    expectedArgs: "<Text>",

    minArgs: 0,
    maxArgs: -1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let spoiler = await neko.sfw.spoiler({ text: text })
            
            message.channel.send(spoiler.owo || spoiler.msg)


        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}