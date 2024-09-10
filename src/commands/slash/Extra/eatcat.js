module.exports = {
    name: "eatcat",
    category: "Cursed",
    description: "going to activate cat eating skills NOM",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('i eat cat medium rare')
            .setImage('https://cdn.discordapp.com/attachments/1030666599042142303/1036098492583653466/Screenshot_2022-10-27_at_22.56.48.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
