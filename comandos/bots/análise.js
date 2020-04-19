const Discord = require('discord.js'); // Puxando a livraria Discord.js

exports.run = (client, message, args) => {

  var canal = message.guild.channels.get('ID do canal') // ID do canal para onde iremos enviar a análise
  if (!message.member.roles.has('ID do cargo')) return message.reply(`esse comando só pode ser utilizado por um Analisador!`) // Caso o usuário não seja um analisador
// Agora, começa as funções then!
  message.channel.send(`Para iniciarmos, qual o resultado dessa análise?`).then(m => {
    let co = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) // Verificando o ID do usuário que clicou no emoji. Caso ele seja igual ao do autor, iremos fazer a ação
    .on('collect', c => { // Definindo que coletamos
      analise = c.content // o nome dessa coleta será 'analise'
      
// Eu não preciso explicar tudo de novo :) Mesma coisa se repete!
      message.channel.send(`Qual é o nome desse bot?`).then(m2 => {
        let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
        .on('collect', c => {
          idbot = c.content

          message.channel.send(`Escreva o **ID** do criador desse bot.`).then(m3 => {
            let cj = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
            .on('collect', c => {
              idauto = c.content

              message.channel.send(`Deseja prosseguir com a análise?\n**Não**\n**Sim**`).then(m4 => {
                let ck = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                .on('collect', c => {
                  resu = c.content

                  if (resu === 'Não'){
                    return message.reply(`envio cancelado com sucesso!`)
                  } else {
                  // Agora é uma coisa importante... Caso o usuário queira colocar uma nota a análise, iremos deixar disponível

                    message.channel.send(`CHEGAMOS NO FINAL! Caso queria deixar alguma nota sobre a análise, escreva abaixo, caso contrário, escreva **sem** para deixar sem nada.`).then(m5 => {
                      let cm = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                      .on('collect', c => {
                        note = c.content
                        
                        if (note === 'sem') { // Caso o usuário escreva 'sem', iremos deixar a embed sem nota

                          let embed = new Discord.RichEmbed()

                          .setThumbnail(thu)
                          .setTitle(`:mag: ANÁLISE`)
                          .addField(`<:DL_bot:693959313198153820> **Bot**`, `${idbot}`)
                          .addField(`<:DL_stafftools:692105688024875028> **Criador**`, `<@${idauto}>`)
                          .addField(`<:DL_scroll:695874280969207838> **Resultado**`, analise)
                          .setFooter(`Análise realizada por: ${message.author.username}`)

                          canal.send(embed) 
                          message.reply(`analise enviada!`)

                        } else { // Caso ele escreva algo diferente de 'sem', iremos deixar com o que ele colocar
                          let embedi = new Discord.RichEmbed()

                          .setThumbnail(thu)
                          .setTitle(`:mag: ANÁLISE`)
                          .addField(`<:DL_bot:693959313198153820> **Bot**`, `${idbot}`)
                          .addField(`<:DL_stafftools:692105688024875028> **Criador**`, `<@${idauto}>`)
                          .addField(`<:DL_scroll:695874280969207838> **Resultado**`, analise)
                          .addField(`:pushpin: **Nota**`, `${note}`)
                          .setFooter(`Análise realizada por: ${message.author.username}`)

                          canal.send(embedi) // Enviando no canal que definimos
                          message.reply(`analise enviada!`)
                        }
                      })
                    })
                  }
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
  name: 'analise',
    aliases: ['análise']
}
