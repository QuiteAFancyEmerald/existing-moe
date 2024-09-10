module.exports = {
    name: "vibecheck",
    category: "Utility",
    description: "check the person quick",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('this actually is just a command')
            .setImage('https://media.tenor.com/ua2pghKGg4YAAAAC/lucky-star-anime.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
