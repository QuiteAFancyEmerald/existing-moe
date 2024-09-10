module.exports = {
    name: "clearmind",
    category: "Extra",
    description: "let me make myself clear",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('wat the squid doing')
            .setImage('https://media.tenor.com/_IvU8T-Y7jcAAAAS/squid-clear.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
