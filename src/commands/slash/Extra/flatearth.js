module.exports = {
    name: "flatearthers",
    category: "Extra",
    description: "the earth is flat. i have proof",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('the earth is flat')
            .setImage('https://media.tenor.com/xde-fopgOREAAAAC/wind-uhhh.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
