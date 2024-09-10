module.exports = {
    name: "luph",
    category: "Extra",
    description: "am bread",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('toaster it')
            .setImage('https://cdn.discordapp.com/attachments/1040978989361139765/1070153791506219018/LUPH_waifu2x_art_noise3_scale.png')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
