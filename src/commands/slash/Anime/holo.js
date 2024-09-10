const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "hololive",
    category: "Anime",
    description: "oh no",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.holo();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('e')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
