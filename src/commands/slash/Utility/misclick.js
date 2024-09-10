module.exports = {
    name: "misclick",
    category: "Utility",
    description: "my finger slip again",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`oops <@1074546971488034866>. didnt mean to do that`);

        const pingEmbed = new client.discord.channel.send(`oops misclick test`);

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
