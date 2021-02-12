const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'OwOify',
    commands: ['OwOify'],
    aliases: [''],
    description: "OwOify any text!",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    expectedArgs: "<Text>",

    minArgs: 1,
    maxArgs: -1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let owo = await neko.sfw.OwOify({ text: text })
            
            message.channel.send(owo.owo)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}