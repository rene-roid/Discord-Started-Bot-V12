const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const { Database } = require('quickmongo')
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
      .setBotOwner(['450330964481146880'])
      .setCategorySettings([
        {
          name: 'Owner',
          emoji: '💻',
          hidden: true
        },
        {
          // You can change the default emojis as well
          name: 'Configuration',
          emoji: '🚧',
          // You can also hide a category from the help menu
          // Admins bypass this
          hidden: true
        },
        {
          name: 'Moderation',
          emoji: '🔧',
          hidden: false
        },
        {
          name: 'Economy',
          emoji: '📰',
          hidden: false
        },
      ])
      .setDefaultPrefix('!')
      .setColor('#fff94f')
})

const db = new Database(process.env.MONGO_URI);

db.on("ready", () => {
    console.log("Database connected!");
});

client.login(process.env.TOKEN)