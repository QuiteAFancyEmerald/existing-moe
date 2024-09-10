module.exports = {
    name: "skillissue",
    category: "Extra",
    description: "skill issue",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('problem')
            .setImage('https://cdn.discordapp.com/attachments/1040978989361139765/1070154132985499658/you_have_a_disease.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};