const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "pp-random",
    description: "donne une PP d'un membre aléatoire",
    utilisation: "",
    alias: ["pp-random", "random", "ppr"],
    permission: "", 
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        let member = message.guild.members.cache.random();
        const msg = message.reply(`*Recherche d'un avatar aléatoire...*`);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Avatar de : ${member.user.username}`)
        .setImage(member.user.displayAvatarURL({dynamic: true, size:4096}))
        .setTimestamp()
        .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
        message.reply({embeds : [embed]})
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!pp-random sûr '${message.guild.name}'`))
    }
})
