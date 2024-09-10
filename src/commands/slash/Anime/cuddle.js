const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "cuddle",
    category: "Anime",
    description: "illegal hug",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.cuddle();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('you will die')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
