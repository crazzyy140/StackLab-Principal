const Discord = require('discord.js'); // Puxando a livraria Discord.js
const c = require('../config.json') // Puxando o conteúdo do arquivo config.json

exports.run = (client, message, args) => {

// Embed para explicar o uso do comando
    let erro = new Discord.RichEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sugestao\` - Deixe uma sugestão para o servidor`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sugestao <sugestão>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sugestao Me mamar\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046')   
 
  var ff = ('[Descrição das reações](https://prnt.sc/rxzb92)') // Uma print, explicando as reações
  var canal = client.channels.get('ID') // ID do canal aonde iremos enviar a sugestão do usuário
  
  var sugestao = args.slice(0).join(' '); // Uma variável, contendo tudo o que o usuário escrever
  if (!sugestao) { // Caso o usuário não escreva nada, iremos avisar que ele necessita
    return message.reply(`você precisa escrever a sua sugestão!`)
  } else { // Caso ele escreva, iremos enviar a sugestão para o canal
      let embed = new Discord.RichEmbed()
        .setTitle(`SUGESTÃO`)
        .setDescription(`:bust_in_silhouette: Autor: ${message.author}\n\n:inbox_tray: Sugestão: ${sugestao}\n\n${ff}`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
        
        canal.send(embed) // Enviando no canal a embed
        .then(function (msg) { // Abrindo a função 'then' (Famosa aqui haha)
            msg.react("👍"); // Reagindo com os emojis, um legalzin e outro deslike
            msg.react("👎"); 
              message.reply(`sua sugestão foi enviada ao ${canal}! :mailbox_with_no_mail:`)
   })  
 }
}
exports.help = {
 name: 'sugestao',
    aliases: ['sugestão', 'suggestion', 'suggest']
}
