module.exports = {
    name: "installcat",
    category: "Extra",
    description: "alternative power",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('cat battery is the most effective')
            .setImage('https://cdn.discordapp.com/attachments/1040978989361139765/1070146181830815795/ezgif.com-gif-maker2.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
