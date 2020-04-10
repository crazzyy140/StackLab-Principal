const db = require('quick.db'); // puxando a npm quick.db (uma database, que para instalar, basta escrever em seu terminal: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria Discord.js

exports.run = async (client, message, args) => { 
   // puxando um membro mencionavel, no caso, de quem queremos ver o money
    let member = message.mentions.users.first() || message.author; // caso n mencione, sera ele mesmo
  
    var quantia = await db.get(`money_${member.id}`) // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
    if (quantia === null) quantia = 0; // para nao aparecer 'null' no codigo, caso o membro n tenha nenhum dinheiro, vamos definir como 0

    message.channel.send(`saldo do usuario ${member} é de: **R$ ${quantia}**`) // mensagem mostrando
}

exports.help = {
    name: 'money'
}
