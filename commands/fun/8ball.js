const { MessageEmbed } = require('discord.js')
const client = require('nekos.life');
const neko = new client();

module.exports = {

    guildOnly: false,

    name: '8ball',
    commands: ['8ball'],
    aliases: [''],
    description: "Ask any question to a magic ball!",

    // requiredPermissions: [''],
    cooldown: "5s",
    category: "Fun",

    expectedArgs: "<Question>",

    minArgs: 1,
    maxArgs: -1,

    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { member, channel, mentions } = message
        const user = message.member.user

        try {

            let answer = await neko.sfw['8Ball']()
            
            const embed = new MessageEmbed()
            .setTitle(`🎱 Ask 8Ball`)
            .addField(`${message.author.username} asks:`, text)
            .addField(`Answer:`, answer.response)
            .setImage(answer.url)
            .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
            .setTimestamp()

            await message.channel.send(embed)



        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}