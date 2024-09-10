module.exports = {
    name: "petitiontoremoveownership",
    category: "Utility",
    description: "denied",
    ownerOnly: true,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`<@979842729062305793> has been denied ownership formally.`);

        const pingEmbed = new client.discord.channel.send(`oops misclick test`);

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
