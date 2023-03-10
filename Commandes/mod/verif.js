const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "verif",
    description: "Cr茅er un panel de verif",
    utilisation: "",
    alias: ["verif"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "1) Mod茅ration",
    cooldown: 5,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM verif WHERE guild = ${message.guild.id}`, async (err, req) => {

        const btn = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setCustomId('verif')
          .setEmoji("馃毀")
          .setLabel("Se V茅rifier"), )

          let arg = message.user ? args._hoistedOptions[0].value : args[0]
          if(!arg) return message.reply("<:Elexyr22:754441336849170543> Veuillez 茅crire comme 莽a : `e!verif #salon @r么le` !")

          let channel = message.guild.channels.cache.get(args) || message.mentions.channels.first()
          if(!channel) return message.reply(`*Merci de me donner un salon qui existe...*`)

          let r么le = message.user ? args._hoistedOptions[1].value : args[1]
          if(!r么le) return message.reply("<:Elexyr22:754441336849170543> Veuillez 茅crire comme 莽a : `e!verif #salon @r么le` !")
          if(message.user ? !args._hoistedOptions[0].value : !message.mentions.channels.first()) return message.reply(`<:Elexyr22:754441336849170543> *Merci de me donner un r么le qui existe...*`)

          if (!req.length < 1) {

          db.query(`UPDATE verif SET channel = '${channel}' WHERE guild = ${message.guild.id}`.replace("<#", "").replace(">", ""))
          db.query(`UPDATE verif SET role = '${r么le}' WHERE guild = ${message.guild.id}`.replace("<@&", "").replace(">", "")) 
          }
          

          if (req.length < 1) {
                      let sql = `INSERT INTO verif (channel, role, guild, bot) VALUES ('${channel.id}', '${r么le}', '${message.guild.id}', '${bot.user.id}')`.replace("<@&", "").replace(">", "")
          db.query(sql, function (err) {
              if (err) throw err;
          })
        }

          const embed = new Discord.MessageEmbed()
          .setDescription(`**Clique ici** afin d鈥檃voir acc猫s 脿 __l鈥檌nt茅gralit茅 du serveur !__

          N鈥檋茅site pas 脿 envoyer __un message,__ 脿 l鈥檜n des __fondateurs__ si tu as **un probl猫me !**`)
         // .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(bot.color)
          .setImage("https://cdn.discordapp.com/attachments/765158755905961984/1024367257293443163/captcha-google.gif")
          bot.channels.cache.get(channel.id).send({embeds: [embed], components: [btn]})

          message.reply({content: `<:Elexyr22:754441336849170543> La v茅rif a 茅t茅 envoy茅 dans ${channel} ! <a:Valide_Or:756978408159707136>`})


    

    

    
        })

    }
})