module.exports = {
    name: "mop",
    category: "Queen",
    description: "mop mop",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('*mop*')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070076510507110551/existingmop.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};