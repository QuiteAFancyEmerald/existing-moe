const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "cat",
    category: "Anime",
    description: "what is the cat",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.meow();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('am cat. eat cat. what are they going to do')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
