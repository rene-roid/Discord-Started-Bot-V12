const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'catText',
    commands: ['catText'],
    aliases: [''],
    description: "Get a cute cat text (｡･ω･｡)",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    // expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let cat = await neko.sfw.catText()

            message.channel.send(cat.cat)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}