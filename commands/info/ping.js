const { MessageEmbed } = require('discord.js');
const time = require('ms')

module.exports = {

    guildOnly: false,

    name: 'ping',
    commands: ['ping'],
    aliases: [''],
    description: "See the bot Latency and API Latency and uptime.",

    // requiredPermissions: [''],
    cooldown: '5s',
    category: 'Owner',

    expectedArgs: "",

    minArgs: 0,
    maxArgs: 0,
    
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, member, channel, mentions } = message
        const user = message.member.user

        try {

            let inline = true
            const uptime = time(client.uptime)
            
            const pingMessage = await message.channel.send("Here is my Latency and API Latency and my uptime!");

            const pingEmbed = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
            .setThumbnail(client.user.displayAvatarURL())
            .addField("My Latency is:", `${pingMessage.createdTimestamp - message.createdTimestamp}ms`, inline)
            .setColor("#3cf05a")
            .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
            .addField("My API Latency is:", `${Math.round(client.ws.ping)}ms`, inline)
            .addField('I have been up for:', uptime)
            .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
            .setTimestamp()
            message.channel.send(pingEmbed)

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}