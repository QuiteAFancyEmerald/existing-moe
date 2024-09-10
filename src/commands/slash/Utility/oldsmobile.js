module.exports = {
    name: "oldsmobile",
    category: "Utility",
    description: "denied",
    ownerOnly: true,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`<@930190741978902589> likes 0ldsmobile`);

        const pingEmbed = new client.discord.channel.send(`oops misclick test`);

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
