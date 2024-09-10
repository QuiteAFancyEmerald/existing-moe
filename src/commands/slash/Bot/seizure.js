module.exports = {
    name: "seizure",
    category: "Bot",
    description: "oh no",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('what the bocchi doing')
            .setImage('https://media.tenor.com/iRnmQUtXnIAAAAAC/bocchi-bocchi-the-rock.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
