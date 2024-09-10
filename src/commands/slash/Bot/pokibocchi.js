module.exports = {
    name: "pokibocchi",
    category: "Bot",
    description: "Bocchi starts turning to ash!",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('New Journeys')
            .setImage('https://media.tenor.com/xWPFoSHgRbIAAAAS/bocchi-the-rock-hitori-gotou.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};