module.exports = {
    name: "tellskiddostop",
    category: "Utility",
    description: "denied",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('i eat cat medium rare')
            .setImage('https://media.discordapp.net/attachments/1064054176339988480/1069386045474476123/image.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};

