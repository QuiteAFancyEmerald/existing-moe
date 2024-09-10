module.exports = {
    name: "piracy",
    category: "Utility",
    description: "wack wack AAAA",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('modern isekai')
            .setImage('https://cdn.discordapp.com/attachments/681203088862085168/1041063149496979456/image.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
