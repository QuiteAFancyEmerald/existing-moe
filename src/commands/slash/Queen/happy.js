module.exports = {
    name: "happy",
    category: "Queen",
    description: "happy",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('*laughs*')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070076510129631253/existingjitome.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
