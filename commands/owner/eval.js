const { MessageEmbed } = require('discord.js');

module.exports = {

    ownerOnly: true,

    name: 'eval',
    commands: ['eval'],
    aliases: [''],
    description: 'Execute a JavaScript code',

    // requiredPermissions: [''],
    cooldown: '5s',
    category: 'Owner',

    expectedArgs: "<JavaScript code>",

    minArgs: 1,
    maxArgs: -1,
    
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, content } = message
        const user = message.member.user

        try {

            const result = eval(content.replace('!eval ', ''))
            const awaits = await channel.send(result)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}