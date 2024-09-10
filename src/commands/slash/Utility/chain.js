module.exports = {
    name: "chain",
    category: "Utility",
    description: "this is a chain command",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('chain will go on forever')
            .setImage('https://media.discordapp.net/attachments/1064054176339988480/1069386631250976778/Screen_Shot_2020-03-30_at_10.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], fetchReply: true });

        interaction.react('<:regional_indicator_b:1069387808327868568>');
        interaction.react('<:regional_indicator_i:1069387825235116082>');
        interaction.react('<:regional_indicator_a:1069387850304454666>');
        interaction.react('<:regional_indicator_s:1069387865450090496>');

        msg.delete();
    },
};

