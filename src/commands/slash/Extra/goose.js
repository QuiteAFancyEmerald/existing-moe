const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "goose",
    category: "Cursed",
    description: "become goose",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.goose();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('be goose')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
