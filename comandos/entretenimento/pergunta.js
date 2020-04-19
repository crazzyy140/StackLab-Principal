const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const c = require('../config.json')

exports.run = (client, message, args) => { // setando a base

  let erro = new Discord.RichEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`pergunta\` - Pergunte algo para mim`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}pergunta <texto>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}pergunta <texto>\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046') 

    var replies = ["Sim", "Não"]; // criando uma 'tabela' com Sim e Não
    var result = Math.floor((Math.random() * replies.length)); // puxando aquela tabela, vamos criar um sistema random, que pode cair em uma ou outra
    
    var duvida = args.slice(0).join(" "); // aqui, a pergunta do membro, partindo do argumento 0 (!args zero um)
    if (!duvida) return message.reply(erro)
  
    let embed = new Discord.RichEmbed()
    
    .setColor('GOLD')
    .addField(`PERGUNTA`, `${duvida}`)
    .addField(`RESPOSTA`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'pergunta',
    aliases: ['dúvida']
}
