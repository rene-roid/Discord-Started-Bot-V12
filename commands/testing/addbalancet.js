const { MessageEmbed } = require('discord.js');
const { Database } = require("quickmongo");
const db = new Database("mongodb://localhost/ecobo");

module.exports = {

    guildOnly: true,

    name: 'addbalancet',
    commands: ['addbalancet'],
    aliases: ['addbal'],
    description: "Bala",

    // requiredPermissions: ['BAN_MEMBERS'],
    cooldown: "5s",
    category: "Moderation",

    expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: -1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        const user = message.member.user

        try {

            let bropls;

            let Funkingnumber = parseInt(args[0])

            db.add(`${message.author.id}.balance`, Funkingnumber)
            db.get(`${message.author.id}.balance`).then(console.log)

            let consoleLog = console.log;

            message.channel.send(consoleLog)

            //message.channel.send(dinerooo)
            
        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}