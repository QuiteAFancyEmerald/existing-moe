module.exports = {
    name: "kitakita",
    category: "Bot",
    description: "crisis",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('crisis')
            .setImage('https://cdn.discordapp.com/attachments/926228463067729980/1070066500339241040/FB_IMG_1675193921114.jpg')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};