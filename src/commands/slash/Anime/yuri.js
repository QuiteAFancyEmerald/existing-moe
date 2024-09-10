const client = require("nekos.life");
const neko = new client();

module.exports = {
    name: "yuri",
    category: "Anime",
    description: "oh nooo. NO NO NO",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const imageUrl = await "https://cdn.discordapp.com/attachments/1040978989361139765/1069382231312826459/image.png";

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('DO NOT')
            .setImage(imageUrl.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
