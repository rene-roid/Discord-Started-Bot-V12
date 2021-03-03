const { MessageEmbed } = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://localhost/ecobo");

module.exports = {

    guildOnly: true,

    name: 'balance',
    commands: ['balance'],
    aliases: [''],
    description: "Shows a users balance.",

    // requiredPermissions: ['BAN_MEMBERS'],
    cooldown: "5s",
    category: "Moderation",

    expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: 1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        const user = mentions.members.first() || message.member

        try {

            db.get(`${user.id}.balance`).then(console.log);

            const BalanceEmbed = new MessageEmbed()
            .setTitle(`${user.user.username}'s balance`)
            .setDescription(`Wallet: `)

            message.channel.send(BalanceEmbed)
            
        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}