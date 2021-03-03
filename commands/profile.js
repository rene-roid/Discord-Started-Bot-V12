const { MessageEmbed } = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://localhost/ecobo");

module.exports = {

    guildOnly: true,

    name: 'profile',
    commands: ['profile'],
    aliases: [''],
    description: "Bala",

    // requiredPermissions: ['BAN_MEMBERS'],
    cooldown: "5s",
    category: "Moderation",

    expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: 0,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, channel, mentions } = message
        const user = message.member.user

        try {

            let profile = db.get(`${message.author.id}`)

            // db.get(`${message.author.id}`).then(console.log);

            if (db.get(`${message.author.id}`) = null) {
                db.set(`${message.author.id}`)
            } else {
                message.channel.send('ya tienes un perfil pelotudo')
            }

            // db.set(`${message.author.username}`, { id: `${message.author.id}` }).then(console.log);
            
        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }

    }

}