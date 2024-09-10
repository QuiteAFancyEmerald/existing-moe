module.exports = {
    name: "ping",
    category: "Utility",
    description: "Check the bot's ping AAAA!",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack pinging...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Bot Ping AAAAA')
            .addField("Time", `${Math.floor(msg.createdAt - interaction.createdAt)}ms`, true)
            .addField("API Ping", `${client.ws.ping}ms`, true)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
