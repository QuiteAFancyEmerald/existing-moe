const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "catgirlgen",
    category: "Anime",
    description: "do not RUN this command. I warned you.",
    ownerOnly: true,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await neko.gecg();

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('I TOLD YOU NOT TO RUN THIS')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};