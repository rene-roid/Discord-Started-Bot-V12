const { MessageEmbed } = require('discord.js');

module.exports = {

    guildOnly: true,

    name: 'avatar',
    commands: ['avatar'],
    aliases: [''],
    description: "Look at your or other people's avatar!",

    // requiredPermissions: [''],
    cooldown: '5s',
    category: 'Owner',

    expectedArgs: "<Target user's @>",

    minArgs: 0,
    maxArgs: 1,
    
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { guild, member, channel, mentions } = message
        const user = message.member.user
        const aaaaa = message.mentions.users.first();

        try {

            if(args[0]){
                if(args[0] === 'random'){
                  let member = message.guild.members.cache.random();
                message.channel.send(new MessageEmbed()
                .setTitle(`${member.user.username}'s avatar!`)
                .setFooter(`Requested by: ${message.author.username}`, member.user.displayAvatarURL())
                .setColor(`#3cf05a`)
                .setTimestamp()
                .setImage(member.user.displayAvatarURL({dynamic: true, size:4096})));
                
                } else {
                    if(!user){
                        const no = new MessageEmbed()
                        .setTitle(`${message.author.username}'s avatar!`)
                        .setFooter(`Requested by: ${message.author.username}`, member.user.displayAvatarURL())
                        .setColor(`#3cf05a`)
                        .setTimestamp()
                        .setImage(message.author.user.displayAvatarURL({dynamic: true, size:4096}));
                        message.channel.send(no)
                    return
                };
                message.channel.send(new MessageEmbed()
                    .setColor(0x7289DA)
                    .setTitle(`${message.author.username}, here you have ${aaaaa.username}'s avatar`)
                    .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                    .setColor(`#3cf05a`)
                    .setTimestamp()
                    .setImage(aaaaa.displayAvatarURL({dynamic: true, size:4096})))
                }
                
        
             }  else  {
                message.channel.send(new MessageEmbed()
                .setColor(0x7289DA)
                .setTitle(`${message.author.username}, here you have your avatar`)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setColor(`#3cf05a`)
                .setTimestamp()
                .setImage(message.author.displayAvatarURL({dynamic: true, size: 4096})));
            }

        } catch (err) {
            console.log('uwu I have a fucky err: ' + err)
            message.channel.send('uwu I have a fucky err: ' + err)
        }
    }
}