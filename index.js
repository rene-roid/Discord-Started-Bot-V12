const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION'],
})

client.on('ready', () => {
    console.log(`${client.user.tag} is now online >w<`)

  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath: 'messages.json',
    showWarns: true,
    testServers: [''],
  })
      .setMongoPath(process.env.MONGO_URI)
      .setBotOwner([''])
      .setCategorySettings([
        {
          // You can change the default emojis as well
          name: 'Configuration',
          emoji: '🚧',
          // You can also hide a category from the help menu
          // Admins bypass this
          hidden: true
        },
      ])
      .setDefaultPrefix('!')
      .setColor('#fff94f') //RANDOM HELP COLOR COMMAND

})

client.login(process.env.TOKEN)