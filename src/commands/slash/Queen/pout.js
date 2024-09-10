module.exports = {
    name: "pout",
    category: "Queen",
    description: "pout pout",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('pout pout STAB')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070076510892990464/existingpout.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};