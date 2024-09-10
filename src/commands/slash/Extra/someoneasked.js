module.exports = {
    name: "someoneasked",
    category: "Extra",
    description: "who asked",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('cringe command')
            .setImage('https://media.tenor.com/zPlwSnqlPR8AAAAd/haoyuleegif.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};