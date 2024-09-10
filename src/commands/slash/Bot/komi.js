module.exports = {
    name: "komi",
    category: "Bot",
    description: "komi",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('a  c k')
            .setImage('https://cdn.discordapp.com/attachments/511859897621807124/1065623759622516756/RDT_20230115_1758292762603405629364387-1.jpg')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};