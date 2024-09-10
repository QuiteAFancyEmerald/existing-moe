module.exports = {
    name: "taobal",
    category: "Extra",
    description: "issue",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('taobal')
            .setImage('https://media.tenor.com/-SwRBdLUIbQAAAAC/hu-tao-sphere.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};