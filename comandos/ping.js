const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
                                        
    message.channel.send(`Minha latência está em: \`${parseInt(client.ping)}\` ms`)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ping'
}
