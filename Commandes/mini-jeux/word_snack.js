const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
const talkedRecently = new Set();

require('djs-together') //You have to do that to apply djs-together functions.
const PokercreateTogetherCode = require('../../Fonctions/togetherid')
const Command = require("../../Structure/Command")
module.exports = new Command({

      name: "word-snack",
      description: "Permet de jouer au Word-Snack en Vocal !",
      utilisation: "",
      alias: ["word-snack"],
      permission: "",
      category: "5) Mini-Jeux",
      cooldown: 5,

      async run(bot, message, args, db) {

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply("Vous devez être dans un salon vocal !")

        const channel = bot.channels.cache.get(voiceChannel.id);
        channel.createWordSnackInvite()
       
        message.member.voice.channel.createWordSnackInvite()
          .then(invite => {
            const row1 = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setURL(`${invite.url}`)
                .setLabel('Cliquez ici pour lancer votre activité')
                .setStyle('LINK'),
            );
              let embed = new MessageEmbed()
              .setColor("RANDOM")
              .setDescription(`**Word-Snack:** \n\n *Vous devez être sûr PC pour testé cette fontion !*`)
              .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`)
              message.reply({embeds: [embed], components : [row1]})
            })
            }
          })