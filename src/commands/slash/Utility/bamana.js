module.exports = {
    name: "bamana",
    category: "Utility",
    description: "weeeeeeeeeeeeeeeeeeeee",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('this will be you')
            .setImage('https://cdn.discordapp.com/attachments/725506757291671663/1062541546370633798/bamna.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
