module.exports = {
    name: "bocchiisdead",
    category: "Bot",
    description: "so",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('bocchi is gone')
            .setImage('https://media.tenor.com/xWPFoSHgRbIAAAAS/bocchi-the-rock-hitori-gotou.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};