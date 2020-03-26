const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base

    let region = { // para deixar mais bacana o codigo, iremos configurar o nome dos locais
        "brazil": "Brasil",
        "eu-central": "Europa Central",
        "singapore": "Singapura",
        "us-central": "U.S Central",
        "sydney": "Sydney",
        "us-east": "U.S Leste",
        "us-south": "U.S Sul",
        "us-west": "U.S Oeste",
        "eu-west": "Europa Ocidental",
        "vip-us-east": "VIP U.S Lest",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };

    function checkBots(guild) { // abrindo uma function, checando a quantia de bots do servidor
        let botCount = 0; // caso tenha zero bots, a quantia seria 0
        guild.members.forEach(member => { // puxando os bots
            if (member.user.bot) botCount++; // caso o membro seja um bot, iremos adicionar
        });
        return botCount;
    }
    
    function checkMembers(guild) { // mesma coisa acima, abrindo uma function, mas checando a quantia de membros
        let memberCount = 0; // caso tenha zero membros, a quantia seria 0
        guild.members.forEach(member => { // puxando os membros
            if (!member.user.bot) memberCount++; // caso o membro nao seja um bot, iremos adicionar
        });
        return memberCount;
    }


    // agora, vamos filtrar um codigo, identificando a presence dos membros
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;

    // vamos criar uma function, definindo quantos emojis possui no servidor
    var emojis;
    if (message.guild.emojis.size === 0) { // caso tenha zero emojis
        emojis = 'Sem emojis!'; // vamos definir como 'sem emojis'
    } else {
        emojis = message.guild.emojis.size; // definindo que a variavel que criamos (emojis), serve para contar os emojis
    }

    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setColor('GOLD')
    .addField(`Fundador`, `${message.guild.owner}`, true)
    .addField(`Criado em`, `${moment(message.guild.createdAt).format('LLL')}`, true)
    .addField(`Você se juntou aqui em`, `\`${moment(message.member.joinedAt).format('LLL')}\``)
    .addField(`Eu entrei aqui em`, `${moment(bot.user.joinedAt).format('LLL')}`)
    .addField(`Canais (${message.guild.channels.size})`, `Texto: \`${message.guild.channels.filter(chan => chan.type === 'text').size}\`\nVoz: \`${message.guild.channels.filter(chan => chan.type === 'voice').size}\``)
    .addField(`Membros (${message.guild.memberCount})`, `Disponiveis: \`${online}\` **|** Ocupados: \`${ocupado}\` **|** Ausentes: \`${ausente}\` **|** Offlines: \`${offline}\`\nHumanos: \`${checkMembers(message.guild)}\`\nRobôs: \`${checkBots(message.guild)}\``)
    .addField(`Região`, `${region[message.guild.region]}`, true)
    .addField(`Emojis`, `${emojis}`)

    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'guild'
}
