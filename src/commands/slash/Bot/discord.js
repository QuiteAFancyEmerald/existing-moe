module.exports = {
    name: "discord",
    category: "Bot",
    description: "Official discord for existing.moe!",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Join join! 🌺🌺')
            .setDescription('wat this')
            .addFields(
                { name: 'Discord:', value: 'https://discord.gg/quite', inline: true },
                { name: 'Official Site:', value: 'https://hutao.dev', inline: true },
            )
            .setImage('https://hutao.dev/img/hutao.png')
            .setURL('https://hutao.dev')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
