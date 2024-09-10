module.exports = {
    name: "onigirl",
    category: "Utility",
    description: "ha BOP ha BOP BOP",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo AAA...`);
        
        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('bop bop leave the internet')
            .setImage('https://cdn.discordapp.com/attachments/1064054176339988480/1069823759697068112/ezgif.com-gif-maker.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({ embeds: [pingEmbed] } );

        msg.delete();
    },
};
