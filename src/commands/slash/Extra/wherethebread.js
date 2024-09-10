module.exports = {
    name: "wherebread",
    category: "Extra",
    description: "where the bread",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('bread')
            .setImage('https://media.tenor.com/CBZIvJk-vUoAAAAS/show-me-your-bread-anime.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};