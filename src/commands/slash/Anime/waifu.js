const axios = require('axios');

module.exports = {
    name: "waifu",
    category: "Anime",
    description: "wat could this be for",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);
        const source = (`https://api.waifu.im/search/?is_nsfw=false`);
        const source2 = (`https://api.waifu.pics/sfw/waifu`);
        const waifuImage = await axios.get(source).then(res => res.data);
        const waifuImage2 = await axios.get(source2).then(res => res.data);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('this will be you >:(')
            .setImage(waifuImage.images[0].url || waifuImage2.url)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};

