const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base


    let embed = new Discord.RichEmbed()

    .setColor('AQUA')
    .setTitle(`${message.guild.name}`, message.guild.iconURL)
    .setDescription("**[Baixe-a](" + message.guild.iconURL + ")**")
    .setImage(message.guild.iconURL)
    .setColor('#36393e')

    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'servericon'
}
