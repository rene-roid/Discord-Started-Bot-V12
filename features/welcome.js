module.exports = (client, instance) => {
    client.on("guildMemberAdd", async member => {
      console.log('hi')
    })
}