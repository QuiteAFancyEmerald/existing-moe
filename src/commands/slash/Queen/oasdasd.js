module.exports = {
    name: "amai",
    category: "Queen",
    description: "i a",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('i a')
            .setImage(`https://cdn.discordapp.com/attachments/1064054176339988480/1070082373741461606/MOECARD.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};

