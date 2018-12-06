const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '->'

bot.login('NDg1NTU4NzcyMDgxNjIzMDQx.DurXZA.wKuqznFZ0na0S6n6W0Se7do7fM0')

bot.on('ready', function () {
    console.log('Bot Online ! \n-----')
})

bot.on('message', function (message) {
    if (message.content === prefix + 'ping'){
        message.channel.send('pong !')
        console.log ('Pong ! \n-----')
    }
    if (message.content === prefix + 'chelsea'){
        bot.user.setAvatar('./chelsea.jpg')
    }
    if (message.content === prefix + 'avatar'){
        let User = message.author
        message.channel.send('Quel avatar ?')
        bot.on('message', function (message) {
            if (message.author = User) {
                if (message.content = 'Chelsea') {
                    bot.user.setAvatar('./chelsea.jpg')
                }
                if (message.content = 'Sasuke') {
                    bot.user.setAvatar('./sasuke.png')
                }
            }
        })
    }
})