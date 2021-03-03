const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: 'fact',
    commands: ['fact'],
    aliases: [''],
    description: "Get a random fact",

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

            let fact = await neko.sfw.fact()
            
            const embed = new MessageEmbed()
            .setDescription(fact.fact)
            .setColor('RANDOM')

            message.channel.send(embed)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}