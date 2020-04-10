const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta digitar no seu terminal: npm i quick.db)

exports.run = async (client, message, args) => { 

    
    if (!['530192493728366622'].includes(message.author.id)) { // definindo que, apenas quem tiver o ID dentro dessa estrutura, pode utilizar esse comando
    return message.channel.send(`apenas meu desenvolvedor pode utilizar esse comando.`)
    }

    let membro = message.mentions.users.first() || message.author; // caso ele n mencione, vai ser pra si mesmo
    var conta = await db.get(`money_${membro.id}`) // puxando o sistema que criamos para puxar a quantia que o membro possui
    
    var quantia = args[0]; // criando uma variavel para saber quanto o membro deseja adicionar
    if (isNaN(quantia)) return message.channel.send(`isso não é um numero!`) // caso o que ele escreva nao seja numero
    if (!quantia) return message.channel.send(`escreva o quanto quer adicionar!`); // caso ele n escreva 
    if (quantia <= 0) return message.reply(`a quantia deve ser maior que zero!`) // caso o que ele bote, seja menor que zero
    
  // puxando o membro que iremos enviar

    message.channel.send(`${message.author} adicionou **R$ ${quantia}** na conta do usuario ${membro}!`) 
    db.add(`money_${membro.id}`, args[0]) // adicionando na database, a quantia
    
}

exports.help = {
    name: 'addmoney'
}
