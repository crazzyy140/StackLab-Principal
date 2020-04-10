const Discord = require("discord.js") // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db(uma database, que para instalar, basta digitar em seu terminal: npm i quick.db)

exports.run = async (client, message, args) => {


    if (!['530192493728366622'].includes(message.author.id)) { // bote dentro o seu ID, ou de quem vc deseja q utilize
    return message.reply(`apenas meu papai pode utilizar esse comando.`)
    }

    if (!args[0]) return message.channel.send(`escreva um numero`) // caso o membro n escreva uma quantia
    if (isNaN(args[0])) return message.channel.send(`NUMERO!!!!!`) // caso ele escreva algo q n seja um numero

  // puxando um membro para quem iremos adicionar
    let member = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author; // caso n mencione, sera ele mesmo
    
    message.channel.send(`${message.author} removeu R$ **${args[0]}** da conta do usuario ${member}!`)
    db.subtract(`money_${member.id}`, args[0]) // adicionando na db, a quantia

}

exports.help = {
    name: 'removemoney'
}
