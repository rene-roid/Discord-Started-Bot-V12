const { MessageEmbed } = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://localhost/ecobo");

module.exports = {

    guildOnly: true,

    name: 'work',
    commands: ['work'],
    aliases: ['w'],
    description: "Work to get money!",

    cooldown: "5s",
    category: "Economy",

    // expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        let user = message.author

        try {

            let workMoney = Math.floor(Math.random() * 1101) + 900
            console.log(workMoney)

            db.add(`${message.author.id}.balance`, workMoney).then(console.log);

            const AddedBalance = new MessageEmbed()
            .setTitle(`${message.author.username}, you have gained ${workMoney} coins`)

            message.channel.send(AddedBalance)
            
        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}