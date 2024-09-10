module.exports = {
    name: "bocchideath",
    category: "Anime",
    description: "am gone",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('i did not die')
            .setImage('https://media.tenor.com/ZhFH4-F1kbkAAAAd/bocchi-the-rock-bocchi-the-rock-gif.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
