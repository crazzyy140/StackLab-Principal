const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base

    // como esse comando adiciona um cargo, precisamos pegar o ID de um cargo
    var role = message.guild.roles.get('id do cargo'); // adicione o ID de um cargo dentro desse espaco!

    message.reply(`caso esteja sem seu cargo, clique no emoji abaixo!`).then(m => { // criando um evento, vamos fazer um reaction role
        m.react('🔨') // reagindo a essa mensagem
 
        // criando um filtro, para ver quem clicou
        let filtro = (reaction, usuario) => reaction.emoji.name === "🔨" && usuario.id === message.author.id; 
        // com tudo filtrado, iremos coletar tudo
        let coletor = m.createReactionCollector(filtro, {max: 1, time: 30000});

        // e fechar a acao
        coletor.on("collect", e => { // com um evento! (nomeamos ele de: 'e') 
        e.remove(message.author.id); // removeremos o clique do membro
        if (message.member.roles.has(role.id)) { // caso esse membro ja possua esse cargo vamos dar o erro
            message.reply(`vc ja possui esse cargo!`) 
        } else { // caso ele n tenha
            message.member.addRole(role.id); // vamos adicionar e 
            message.reply(`cargo adicionado! :thumbsup:`) // avisar pra ele
        }
    })
  })
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'cargo'
}
