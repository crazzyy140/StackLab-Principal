const Discord = require('discord.js'); // puxando a livraria Discord.js

exports.run = (client, message, args) => { 

    // como esse comando adiciona um cargo, precisamos pegar o ID de um cargo
    var role = message.guild.roles.get('ID'); // adicione o ID de um cargo dentro desse espaco!

    message.channel.send(`Olá ${message.author}, para ser notificado sobre as atualizações do Discord Lab, clique no sininho logo abaixo!`).then(m => { // criando um evento, vamos fazer um reaction role
        m.react('emoji') // reagindo a essa mensagem
 
        // criando um filtro, para ver quem clicou
        let filtro = (reaction, usuario) => reaction.emoji.name === "emoji" && usuario.id === message.author.id; 
        // com tudo filtrado, iremos coletar tudo
        let coletor = m.createReactionCollector(filtro, {max: 1});

        // e fechar a ação
        coletor.on("collect", e => { // com um evento! (nomeamos ele de: 'e') 
        e.remove(message.author.id); // removeremos o clique do membro
        if (message.member.roles.has(role.id)) { // caso esse membro ja possua esse cargo vamos dar o erro
            message.member.removeRole(role.id);
            message.reply('removi seu cargo!')
        } else { // caso ele n tenha
            message.member.addRole(role.id); // vamos adicionar e 
            message.reply(`cargo de notificação adicionado! :thumbsup:`) // avisar pra ele
        }
    })
  })
}
exports.help = {
    name: 'cargo',
    aliases: ['notificar', 'notificação', 'notify']
}
