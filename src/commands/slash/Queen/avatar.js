module.exports = {
    name: "avatar",
    category: "Queen",
    description: "worship ai wha?",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('who... tao?? no AI??? AI queen???')
            .setImage(`https://cdn.discordapp.com/attachments/1040961463151509548/1070076509160747148/exsiting3.png`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};

