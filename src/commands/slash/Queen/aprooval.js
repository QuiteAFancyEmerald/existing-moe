module.exports = {
    name: "aprooval",
    category: "Queen",
    description: "i aprooval",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('aprooval')
            .setImage(`https://cdn.discordapp.com/attachments/925726554665914399/1070083378998689892/aprooval.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText} (credits to madjik)`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};

