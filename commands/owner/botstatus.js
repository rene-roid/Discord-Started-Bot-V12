const { MessageEmbed } = require('discord.js');

module.exports = {

    ownerOnly: true,

    name: 'botstatus',
    commands: ['botstatus'],
    aliases: [''],
    description: 'Change bot status',

    requiredPermissions: ['MANAGE_MESSAGES'],
    cooldown: '5s',
    category: 'Owner',

    expectedArgs: "<Online, idle, dnd>",

    minArgs: 1,
    maxArgs: 1,
    
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, member, channel, mentions } = message
        const user = message.member.user

        try {

            const content = args.join(" ")
            const splitt = content.split('');
    
            const lol = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
            .setDescription("❎ Please enter a status type!")
            .setColor(`#ff3d3d`)
            .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
            .setTimestamp()
            if (!splitt[0]) return message.channel.send(lol);
    
                if(content === 'dnd') {
                    const awaits = await client.user.setStatus('dnd')
                    const dndEmbed = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("✅ Status changed to `do not disturb`!")
                        .setColor(`#3cf05a`)
                        .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                        .setTimestamp()
                        message.channel.send(dndEmbed)
                } else {
                    if(content === 'online') {
                        const awaits = await client.user.setStatus('online')
                        const onlineEmbed = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("✅ Status changed to `online`!")
                        .setColor(`#3cf05a`)
                        .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                        .setTimestamp()
                        message.channel.send(onlineEmbed)
                    } else {
                        if(content === 'idle') {
                            const awaits = await client.user.setStatus('idle')
                            const idleEmbed = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("✅ Status changed to `idle`!")
                        .setColor(`#3cf05a`)
                        .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                        .setTimestamp()
                        message.channel.send(idleEmbed)
                        } else {
                            if(content != ['dnd', 'online', 'idle']) {
                                const errorEmbed = new MessageEmbed()
                                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                                .setDescription(`❎ Please enter a **valid** status type!
                                **Options:**
                                dnd (do not disturb)
                                online
                                idle`)
                                .setColor(`#ff3d3d`)
                                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                                .setTimestamp()
                                return message.channel.send(errorEmbed)
                            } 
                        
                    }
                }
            }

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}