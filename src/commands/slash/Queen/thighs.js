module.exports = {
    name: "thighs",
    category: "Queen",
    description: "PLEASE DO NOT RUN THIS DO NOT RUN THIS",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('WHY DID YOU RUN THIS')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070104307036340354/existingpose.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};