const Discord = require("discord.js"); // Puxando a livraria Discord.js   
const c = require('../config.json'); // Puxando o conteúdo do arquivo config.json

exports.run = (client, message, args) => {
 // Agora, vamos criar uma embed para explicar o uso do comando
  let erro = new Discord.RichEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`addemoji\` - Adicione um emoji ao servidor de forma mais fácil`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}addemoji <nome> <url>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}addemoji young https://discordemoji.com\``)
  .addField(`:bookmark: **Permissão**`, `\`MANAGE_EMOJIS\``)
  .setColor('#8c0046')  
  
  if (!args[0]) return message.channel.send(erro); // Caso o usuário não escreva o nome do emoji, daremos a embed de explicação
  if (!args[1]) return message.channel.send(erro); // Mesma coisa com o URL
    // Caso o usuário não possua a permissão necessária, vamos aviar!
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply(`apenas usuários com a permissão \`MANAGE_EMOJIS\` podem utilizar!`)
try { // Utilizando a função 'try', literalmente traduzindo: Tentar
    message.guild.createEmoji(args[1], args[0]).then(emoji => { // Criar um emoji com as informações
      message.channel.send(`${emoji} **|** Emoji adicionado com sucesso.`); // Caso não haja erro, iremos criar
    });
  } catch (err) { // Agora, iremos procurar um erro
    message.channel.send(`\`\`\`js\n${err}\`\`\``) // Se acharmos, iremos avisar o que deu
  }
};

exports.help = { 
  name: 'addemoji',
    aliases: ['adicionaremoji']
}
