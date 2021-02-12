module.exports = (client, instance) => {
    client.on('message', message => {

        if (message.content === 'pog') {
            try {

                message.react('<:pog:797832605684072479>')

            } catch (err) {
                console.log('uwu I have a fucky err: ' + err)
            }
        }
      })
}