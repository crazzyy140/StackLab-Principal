const Discord = require("discord.js")
const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['seu id'].includes(message.author.id)) {
    return message.channel.send(`apenas meu desenvolvedor pode utilizar`)
    }
    const code = args.slice(0).join(" ")
    if (!code) return message.reply(`digite algum code!`)
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.RichEmbed()
          .setDescription(`:inbox_tray: **ENTRADA**\n\`\`\`js\n${code}\`\`\`\n:outbox_tray: **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
        message.channel.send(embed)
        } catch(err) {
          let errorrr = new Discord.RichEmbed()
          .setDescription(`<:DL_incorreto:693214803359039578> **ERRO DETECTADO!**\n\`\`\`\n${err}\`\`\``)
            message.channel.send(errorrr)
        }
  }
 exports.help = {
      name: "eval",
     aliases: []
 }
