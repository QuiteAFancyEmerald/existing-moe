module.exports = {
    name: "sandwich",
    category: "Utility",
    description: "very hungry",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('wat is wrong with it')
            .setImage('https://media.tenor.com/_ziZgsLtwAsAAAAd/funny-cat-cat-sandwich.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
