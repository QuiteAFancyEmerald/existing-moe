module.exports = {
    name: "bop",
    category: "Utility",
    description: "bopbopbopbopbop",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack pinging...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('BOP')
            .setDescription(`bop bop bop bop bop bop bop BOP EXPLODE`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
