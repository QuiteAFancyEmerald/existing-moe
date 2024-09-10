const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "baka",
    category: "Anime",
    description: "big lame",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.baka();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('dumb')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
