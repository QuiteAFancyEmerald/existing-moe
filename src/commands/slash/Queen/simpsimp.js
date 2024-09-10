module.exports = {
    name: "simpsimping",
    category: "Queen",
    description: "outfit thing 2 idk",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('imagine simping simping simping simping')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070122824582316093/exsiting.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};