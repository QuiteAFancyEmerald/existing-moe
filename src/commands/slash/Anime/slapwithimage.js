const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "slapwithimage",
    category: "Anime",
    description: "AAAAAAA NOOO MY FACE D:",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.slap();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('who tao? slap')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
