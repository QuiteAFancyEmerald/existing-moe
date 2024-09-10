module.exports = {
    name: "simping",
    category: "Queen",
    description: "outfit thing 2 idk",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('imagine simping simping')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070104308126859264/existingoutfit2.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};