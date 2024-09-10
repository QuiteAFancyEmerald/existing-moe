module.exports = {
    name: "attentiona",
    category: "Bot",
    description: "your attention",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('thank you for your time')
            .setImage('https://cdn.discordapp.com/attachments/1062012907304525874/1062012907426152498/Screenshot_20230108_145345.jpg')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};