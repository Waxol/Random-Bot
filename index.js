const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.token
const prefix = '->'

bot.login(token)
