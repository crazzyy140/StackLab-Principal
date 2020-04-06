const Discord = require("discord.js")
const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['seu id aqui'].includes(message.author.id)) {
    return message.channel.send(`apenas administradores podem utilizar esse comando.`)
    }

    let code = args.slice(0).join(" ");

        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          
          let embed = new Discord.RichEmbed()
          
          .setDescription(`ENTRADA\n\`\`\`js\n${code}\`\`\`\nSAÍDA\n\`\`\`js\n${ev}\`\`\``)
          .setColor('#00000')
          
        message.channel.send(embed)
        } catch(err) {
          
          let errorrr = new Discord.RichEmbed()
          
          .setDescription(`ERRO DETECTADO!\n\`\`\`\n${err}\`\`\``)
          .setColor('RED')
          
            message.channel.send(errorrr)
        }
  }
 exports.help = {
      name: "eval"
 }
