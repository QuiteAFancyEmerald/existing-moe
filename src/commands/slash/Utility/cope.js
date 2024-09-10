module.exports = {
    name: "cope",
    category: "Utility",
    description: "ha NO",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`ha NO`);

        const pingEmbed = new client.discord.channel.send(`failure at life`);

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
