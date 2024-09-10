const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "avatargen",
    category: "Anime",
    description: "generate anime avatar aaaaaaa",
    ownerOnly: true,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.avatar();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('avatar thingy')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
