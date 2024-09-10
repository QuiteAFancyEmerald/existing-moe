module.exports = {
    name: "degendegen",
    category: "Extra",
    description: "BIG issue",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('BIG problem')
            .setImage('https://cdn.discordapp.com/attachments/1040978989361139765/1070154132654129212/Degen.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};