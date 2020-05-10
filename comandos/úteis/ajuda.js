const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
  
    message.reply('verifique suas mensagens privadas...')


     const embed = new Discord.RichEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`\n🤖 `Bots`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🤖').then(r => { // bot
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🔙').then(r => { // inicio
            })
        })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const BotFilter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Bots = msg.createReactionCollector(BotFilter);
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);

        Bots.on('collect', r2 => {
         const embed = new Discord.RichEmbed()
          .setTitle('🤖 BOTS')
          .addField(`\`dl.análise\``, `Faça a análise de um bot`)
          .addField(`\`dl.addbot\``, `Adicione o seu bot ao DiscordLab`)
          
          msg.edit(embed)
        }) 

        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            const embed = new Discord.RichEmbed()
                .setTitle("🔧 ÚTEIS")
                .addField(`\`dl.addemoji\``, `Adicione um emoji no servidor`)
                .addField(`\`dl.botinfo\``, `Saiba mais sobre mim`)
                .addField(`\`dl.notify\``, `Não recebeu o cargo ao entrar no servidor? Esse comando adiciona!`)
                .addField(`\`dl.cmd\``, `Verifique alguns códigos`)
                .addField(`\`dl.clima\``, `Veja o clima de alguma cidade`)
                .addField(`\`dl.docs\``, `Pesquise algo dentro do Discord.js`)
                .addField(`\`dl.emojis\``, `Veja os emojis do servidor`)
                .addField(`\`dl.lembrete\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`\`dl.sugestao\``, `Deixe uma sugestão para o nosso servidor`)
                .addField(`\`dl.ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`dl.userinfo\``, `Confira algumas informações de um membro`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            const embed = new Discord.RichEmbed()
                .setTitle("👮 MODERAÇÃO")
                .addField(`\`dl.ban\``, `Aplique um banimento em um membro`)
                .addField(`\`dl.clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`dl.dm\``, `Envie uma mensagem na DM de um membro`)
                .addField(`\`dl.kick\``, `Expulse membros fora da lei`)
                .addField(`\`dl.say\``, `Escreva alguma mensagem através do bot`)
                .addField(`\`dl.warn\``, `Avise um membro que não se comporta`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            const embed = new Discord.RichEmbed()
                .setTitle("💳 ENTRETENIMENTO")
                .addField(`\`dl.ascii\``, `Crie um texto em ASCII`)
                .addField(`\`dl.avatar\``, `Amplie a foto de algum membro`)
                .addField(`\`dl.bigtext\``, `Crie um texto grande de letras!`)
                .addField(`\`dl.conquista\``, `Faça sua consquista no Minecraft`)
                .addField(`\`dl.dado\``, `Veja em qual número o dado vai cair`)
                .addField(`\`dl.pergunta\``, `Pergunte algo ao sabio bot`)
                .addField(`\`dl.roleta\``, `Brinque de roleta-russa`)
                .addField(`\`dl.laranjo\``, `Crie seu próprio meme do Laranjo`)
                .addField(`\`dl.servericon\``, `Amplie a foto do servidor`)
                .addField(`\`dl.tweet\``, `Crie um falso tweet`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            const embed = new Discord.RichEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`\n🤖 `Bots`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}
