const Discord = require('discord.js')
const MySQL = require('mysql')
const bot = new Discord.Client()
const prefix = '-->'

bot.login('https://git.heroku.com/random-bot-waxol.git')

bot.on('ready', function () {
    console.log('Bot Online ! \n-----')
})

function Random(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function generateXp() {
    return Math.floor(Math.random() )
}

bot.on('message', function (message) {
    var msg = message.content

    if (msg === prefix + 'ping') {
        message.channel.send('pong !')
        console.log ('Pong ! \n-----')
    }
    if (msg === prefix + 'RaF') {
        message.delete()
        message.channel.send('Apparement, ' + message.author + ' n\'en a rien à foutre !', {
            files: [
                './Commandes Emotes/RaF.jpg'
            ]
        })
        console.log ('Rien à foutre ! \n-----')
    }
})
