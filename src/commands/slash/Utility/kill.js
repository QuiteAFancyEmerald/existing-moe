module.exports = {
    name: "kill",
    category: "Utility",
    description: "kill",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('this will be you')
            .setImage('https://cdn.discordapp.com/attachments/1030666599042142303/1033166454025097246/image0-2.jpg')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
