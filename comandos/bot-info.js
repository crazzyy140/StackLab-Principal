const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

exports.run = (client, message, args) => { // puxando a base

    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;

    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var linguagem = ('[Node.js](https://nodejs.org/en/)') 
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var git = ('[Discord-Lab](https://github.com/young-js/Discord-Lab)')
    var young = ('[young#4565](https://twitter.com/youngzeura)')
    var nome = ('https://twitter.com/Discord_Lab')

    let embed = new Discord.RichEmbed()

    .setTitle(`Discord Lab!`)
    .setURL(`${nome}`)
    .addField(`**Minha linguaguem**`, linguagem, true)
    .addField(`**Minha livraria**`, livraria, true)
    .addField(`**Latência**`, `${parseInt(client.ping)} ms`, true)
    .addField(`**Estou acordado há**`, uptime, true)
    .addField(`**GitHub**`, git, true)
    .addField(`**Criador**`, young)
    .setColor('#00000')

    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'botinfo'
}
