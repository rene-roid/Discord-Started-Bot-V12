const { MessageEmbed } = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://localhost/ecobo");

module.exports = {

    guildOnly: true,

    name: 'removebalance',
    commands: ['removebalance'],
    aliases: ['rembal'],
    description: "Remove balance to a specific user",

    // requiredPermissions: ['BAN_MEMBERS'],
    cooldown: "5s",
    category: "Moderation",

    expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: 2,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        let user = mentions.members.first()// || message.member

        try {

            let money;

            if (!mentions.members.first()) {
                user = message.member
                money = parseInt(args[0])

            } else {
                money = parseInt(args[1])
            }

            db.add(`${user.id}.balance`, -money).then(console.log);

            const AddedBalance = new MessageEmbed()
            .setTitle(`${message.author.username}, you have removed ${money} coins to ${user.user.username}`)

            message.channel.send(AddedBalance)
            
        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}