const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
    message.reply('verifique suas mensagens privadas...')


    let embed = new Discord.RichEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🔙').then(r => { // inicio
            
        })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);
 
        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.RichEmbed()
                .setTitle("🔧 Uteis")
                .addField(`\`!addbot\``, `Adicione um bot em nosso servidor.`)
                .addField(`\`!botinfo\``, `Saiba mais sobre mim`)
                .addField(`\`!cargo\``, `Não recebeu o cargo ao entrar no servidor? Esse comando adiciona!`)
                .addField(`\`!code\``, `Envie um codigo para nos ajudar!`)
                .addField(`\`!emojis\``, `Veja os emojis do servidor`)
                .addField(`\`!lembrete\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`\`!sugestao\``, `Deixe uma sugestão para o nosso servidor`)
                .addField(`\`!ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`!userinfo\``, `Confira algumas informações de um membro`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            embed = new Discord.RichEmbed()
                .setTitle("👮 Moderação")
                .addField(`\`!analise\``, `Feche a analise de um bot.`)
                .addField(`\`!ban\``, `Aplique um banimento em um membro`)
                .addField(`\`!clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`!kick\``, `Expulse membros fora da lei`)
                .addField(`\`!say\``, `Escreva alguma mensagem através do bot`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            embed = new Discord.RichEmbed()
                .setTitle("💳 Entretenimento")
                .addField(`\`!avatar\``, `Amplie a foto de algum membro`)
                .addField(`\`!letras\``, `Crie um texto grande de letras!`)
                .addField(`\`!dado\``, `Veja em qual número o dado vai cair`)
                .addField(`\`!pergunta\``, `Pergunte algo ao sabio bot`)
                .addField(`\`!roleta\``, `Brinque de roleta-russa`)
                .addField(`\`!servericon\``, `Amplie a foto do servidor`)
                .addField(`\`!tweet\``, `Crie um falso tweet`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            embed = new Discord.RichEmbed()
            .setTitle(`CENTRAL DE AJUDA!`)
            .setColor("GOLD")
            .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda"
}
