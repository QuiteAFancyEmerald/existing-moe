module.exports = {
    name: "simp",
    category: "Queen",
    description: "outfit thing idk",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('imagine simping')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070104307770335283/existingoutfit1.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};