
const Discord = require('discord.js'); // puxando a livraria Discord.js

const config = require("./config.json"); // puxando todo o conteúdo dentro do aquivo 'config.json'

const fs = require("fs"); // definindo um nome para todos os comandos que iremos verificar
   
// no nosso caso, 'client' é o nome do nosso Discord.Client
const client = new Discord.Client(); // setando o nome do nosso Discord.Client!
client.commands = new Discord.Collection(); // adicionando uma coleção de comandos, puxando com o nosso Discord.Client

fs.readdir("./comandos/", (err, files) => { // dando 'vida' a pasta aonde iremos adicionar nossos comandos
    if (err) console.error(err); // caso haja algum erro, iremos envia-lo para o console

    let arquivojs = files.filter(f => f.split(".").pop() === "js"); // dentro dessa pasta, os arquivos deverão terminar com '.js'
    arquivojs.forEach((f, i) => { // puxando a variavel que criamos acima, faremos um sistema para definir os arquivos dentro dessa pasta
        let props = require(`./comandos/${f}`); // verificando quais arquivos possuem 
        console.log(`Comando ${f} inicou com sucesso`); // uma mensagem avisando que os comandos iniciaram tranquilamente. (Repare que utilizamos ${f}, no caso, como definimos acima!) 
        client.commands.set(props.help.name, props); // para todo arquivo criado dentro de nossa pasta de comandos, iremos requisitar a function exports.help, dando o nome desse arquivo
    });
});

// para facilitar a nossa vida, qualquer erro que aparecer no bot, ele nos mostrara no console
client.on('error', (err) => { 
   console.log(err.message) // e aqui, a mensagem do erro
});

// um evento ready, que traduzindo, fica 'pronto'. Como ele diz, iremos criar o evento para verificar se o bot está pronto para ligar.
client.on('ready', () => { // setando o evento com nosso Discord.Client
    console.log(`Bot foi iniciado com sucesso`); // caso não haja erro, o bot enviara no console que ligou
    
    // agora, iremos criar uma presence para nosso bot, porém, vai ser alternativa. Ou seja, alternando entre o que colocarmos abaixo
    var tabela = [ // criando uma variavel, nomeada de tabela 

// uma notinha: toda vez que for criar uma nova presence na nossa tabela, bote uma vírgula no final!
        {name: 'Minecraft', type: 'PLAYING'}, 
        {name: 'Spotify', type: 'LISTENING'},
        {name: 'YouTube', type: 'WATCHING'},
        {name: 'Amor', type: 'STREAMING', url: 'https://twitch.tv/olimpiioo'}
    ];
// criando uma function...
    function setStatus() { // nomeamos ela de: setStatus
        // agora, iremos criar um sistema randômico, alternando entre as opções que criamos para a tabela
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
        client.user.setPresence({game: altstatus}) // por fim, setando a presence. No caso, o jogo é a variavel que criamos 'altstatus'
    }
    setStatus(); // para finalizar, puxamos a function que criamos no inicio
    setInterval(() => setStatus(), 15000) // e adicionamos um intervalo entre as presences
});    

// um evento aonde iremos registrar os novos membros do servidor
client.on('guildMemberAdd', membro => { // definimos o nome desse evento, como: membro
    var canal1 = client.channels.get("692196839482458232"); // puxamos o ID do canal, onde enviaremos a embed, para o canal de boas-vindas
    var cargo = membro.guild.roles.get("691904146357616660"); // puxamos o ID de um cargo, no qual, iremos adicionar para o membro
    var canal = client.channels.get("692056639729041459"); // puxando mais um canal, aonde iremos enviar um sistema de CAPTCHA!
    
// criando a embed de boas-vindas!
    let embedi = new Discord.RichEmbed()
    
    .setTitle(`BEM VINDO`) 
    .setDescription(`Olá __**${membro.user.username}**__, seja muito bem vindo (ou vinda) à **Elite dos Programadores**!\n\n`) 
// agora, a embed de CAPTCHA    
    let embed = new Discord.RichEmbed()

    .setTitle(`SISTEMA DE CAPTCHA`)
    .setDescription(`Olá __**${membro.user.username}**__, para poder receber o seu cargo e ver os demais canais, clique no emoji abaixo!`)

    canal1.send(`${membro}`, embed).then(msg => { // criando um nome para a function 'then', no caso: msg
        msg.react("🔒"); // reagimos nesse mensagem com um emoji
  
        let filtro = (reaction, usuario) => reaction.emoji.name === "🔒" && usuario.id === membro.id; // criamos um filtro, para definir quem reagiu nessa mensagem
        let coletor = msg.createReactionCollector(filtro, {max: 1, time: 30000}); // criamos um coletor, para coletar informações do membro que reagiu

        coletor.on('collect', r => { // utilizamos a variavel do coletor, criando um evento sobre quais ações iremos fazer 
            r.remove(membro.id); // deletando o clique do membro, nesse emoji
            membro.addRole(cargo.id); // caso ele clique, adicionaremos o cargo à ele
            msg.delete() // deletando a mensagem de CAPTCHA
        })
    })
});

// evento para registrar quem saiu do servidor
client.on('guildMemberRemove', membro => { // setamos o nome de membro
    var canal = client.channels.get("691130749717315604"); // puxando o ID de um canal para enviar a mensagem

    // criando uma embed
    let embed = new Discord.RichEmbed()

    .setTitle(`LEAVE`)
    .setDescription(`O membro ${membro.user.tag} saiu do servidor.\n\n*Agora estamos com ${bot.users.size} membros no servidor*`)
    .setColor('RED')
    .setFooter(`ID do Membro: ${membro.id}`)

    canal.send(`\`${membro.user.tag}\``, embed)
    membro.send(`Esperamos que volte algum dia :(`) // enviamos no privado do membro

});
// evento message, com bases do nosso bot
client.on('message', message => { // nome desse evento, foi setado como: message
    if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
    if (message.channel.type === "dm") return; // caso seja uma mensagem privada ao nosso bot, não retornaremos

    let prefix = config.prefix; // puxando o prefixo do nosso bot
    if (!message.content.startsWith(prefix)) return; // para evitar bugs, setaremos uma function, definindo que o bot respondera apenas para mensagens que possuem seu prefixo, no inicio
    var args = message.content.substring(config.prefix.length).split(" "); // definindo o que seria os argumentos
    let cmd = args.shift().toLowerCase(); // puxando dos args, setaremos que o bot pode responder sim, a comandos com a letra inicial maiuscula

    let command = client.commands.get(cmd) // puxaremos o conteudo de tal comando
  if (command) { // caso o membro utilize um comando inexistente, daremos o erro
    command.run(client, message, args); // essa é a base de todo arquivo js
  } else {
    message.reply(`verifiquei meus comandos e não encontrei esse comando.`); // mensagem de comando inexistente
  }
});

client.login(config.token); // puxando o token do nosso bot, dentro do arquivo config.json
