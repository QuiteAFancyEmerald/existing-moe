module.exports = {
    name: "simpingsimping",
    category: "Queen",
    description: "outfit thing 2 idk",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('imagine simping simping simping')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070104307371872266/existingoutfit3.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};