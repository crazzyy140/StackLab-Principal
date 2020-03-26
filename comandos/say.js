const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
// primeiro, puxaremos um argumento, no caso, o que o membro quer falar
    var text = args.slice(0).join(' ');
    if (!text) return message.reply(`escreva algo!`) // caso ele não fale algo

    let embed = new Discord.RichEmbed()

    .setDescription(text)
    .setColor('#00000')

    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'say'
}
