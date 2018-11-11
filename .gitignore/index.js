const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("pour de l'aide: *Help");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {

    if (message.content === prefix + "Infodiscord"){
        var embed = new Discord.RichEmbed()
            .setTitle("Info Discord")
            .setDescription("Voici les informations Discord")
            .addField("Nom Du Discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateurs sur le Discord", message.guild.memberCount)
            .setColor("0xB40431")
        message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "Sondage")){
        if(message.author.id == "449251922612846593"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setTitle("Sondage")
                .setDescription("Voici un sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40431")
                .setTimestamp()
            message.guild.channels.get('443750430368071680').sendEmbed(embed)
            .then(function (message){
                message.react("✓")
                message.react("✗")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission, désolé")
    }}

    if (message.content === prefix + "JDQ"){
        message.channel.send("Voici ce à quoi je peux répondre: \n -Salut \n -salut \n -yop \n Evidemment ily aura plus de répliques dans le futur et vous pouvez m'aider à en avoir plus en proposant vos idées dans Rue de la remarque !");
    }

    if (message.content === prefix + "Creator"){
        message.channel.send("Mon créateur est Le Ptit Freez, le projet est supervisé par Napidou.");
    }

    if (message.content === prefix + "Napidou"){
        message.channel.send("Voici la chaîne de [Napidou](https://www.youtube.com/channel/UCp9Ad5p8AGpPzoXZCCLjeyQ/videos?view_as=subscriber)");
    }

    if (message.content === prefix + "Website"){
        message.channel.send("Voici le site [VRG BOT Official Development WebSite](https://vrg-bot-official-development-website-76.webself.net/accueil)");
    }

    if (message.content === "Salut"){
        message.reply("Salut moi c'est VRG BOT");
    }

    if (message.content === "salut"){
        message.reply("Tu sais je déteste quand on ne met pas de majuscules ! Mais sinon salut");
    }

    if (message.content === "yop"){
        message.reply("YoukYouk comme Dyno !");
    }

    if (message.content === "bonsoir"){
        message.reply("salut ! Sinon qui bs avec toi ?");
    }

    if (message.content === prefix + "Help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes VRG BOT")
            .setDescription("Voici les commandes que je peux effectué:")
            .addField("*Help","Affiche cette page d'aide", true)
            .addField("*JDQ","Affiche les répliques que je peux dire", true)
            .addField("*Creator","Affiche le pseudo de mon créateur", true)
            .addField("*Napidou","Envoie le lien de la chaîne de Napidou !", true)
            .addField("*Website","Envoie le lien du site officiel de développement de VRG BOT.", true)
            .setColor("0xB40431")
            .setFooter("D'autres fonctionnalités seront instaurées dans le futur")
        message.channel.sendEmbed(embed);
    }

});
