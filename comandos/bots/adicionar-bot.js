const Discord = require('discord.js'); // Puxando a livraria Discord.js

exports.run = (client, message, args) => { 
  var blockedUsers = ['']; // ID de usuários que foram bloqueados te utilizar esse comando
  if (blockedUsers.includes(message.author.id) || message.author.bot ) return message.reply(`<:DL_reload:695288443646902435> | Parece que seu bot foi reprovado mais de uma vez. Espere até amanhã!`)
  
  // Puxando o ID do canal aonde iremos enviar para a análise
  let canal = client.channels.get('ID')  
  message.reply(`verifique suas mensagens diretas!`)
  // Começando, pedindo o prefixo do bot
  message.author.send(`Olá! Para começarmos, qual o prefixo do seu bot?`).then(m => {
    let cj = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) // Verificando se o ID do usuário que clicou, é igual ao do autor
    .on('collect', c => {
      prefixo = c.content // Definimos o nome do resultado como 'prefixo'
      // Agora, a 'biografia' do bot
      message.author.send(`Escreva algumas coisas sobre seu bot.`).then(m2 => { 
        let cp = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) // Mesma coisa, verificar se o ID do usuário que clicou, é igual ao do autor
        .on('collect', c => {
          desc = c.content // Definimos como 'desc'
          // E vamos repetindo tudo
          message.author.send(`Qual é o nome do seu bot?`).then(m3 => {
            let ch = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) 
            .on('collect', c => {
              nome = c.content // O nome desse é 'nome' (Irônicamente)
              
              message.author.send(`Qual comando do seu bot, mostra a lista de comandos?`).then(m6 => {
                let ci = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                .on('collect', c => { 
                  lista = c.content // E o desse é 'lista'

          // Agora, iremos pegar o ID do bot, para gerarmos o convite de invite, com o bot sem permissões de Administrador para o teste
          message.author.send(`Escreva o **ID** do seu bot.`).then(m4 => {
            let cs = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
            .on('collect', c => {
              convite = c.content 
           // Caso o usuário tenha escrito algo errado, ela terá a chance de cancelar
            message.author.send(`FASE FINAL! Deseja **enviar** ou **cancelar** o pedido?\n\n**cancelar** = Cancela o pedido\n**enviar** = Envia o pedido`).then(m4 => {
            let cps = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
            .on('collect', c => {
              final = c.content
              
              if (final === 'cancelar') { // Caso o usuário escreva 'cancelar'
                
                message.author.send(`Cancelei o seu pedido :thumbsup:`)
                
              } else { // Caso o usuário decida enviar
              
              let embed = new Discord.RichEmbed()
              
              .setTitle(`:hammer: LINK PARA CONVIDAR`)
              .setURL(`https://discordapp.com/oauth2/authorize?client_id=${convite}&scope=bot&permissions=0`)
              .setDescription(`${desc}`)
              .addField(`**PREFIXO**`, prefixo)
              .addField(`**NOME**`, nome)
              .addField(`**MENU DE AJUDA**`, lista)
              .addField(`**ID DO AUTOR**`, `${message.author.id}`)
              .setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL)
              
              canal.send(embed) // Enviando a embed no canal de análise
              message.author.send(`Seu bot foi enviado para a análise! :thumbsup:`)
              }
            })
          })
          })
            })
                })
          })
        })
      })
      })
            })
      })
    })
}

exports.help = {
  name: 'addbot',
  aliases: []
}
