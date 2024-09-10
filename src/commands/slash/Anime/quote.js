const { randomQuote } = require('animequotes');
const { searchAnime } = require('node-kitsu');

module.exports = {
  name: "quote",
  category: "Anime",
  description: 'generate a random anime quote',
  ownerOnly: false,
  run: async ( client, interaction) => {

    const { quote, anime, name } = randomQuote();
    const res = await searchAnime(anime,0).catch(()=>{}) || [];
    const image = res?.[0]?.attributes?.coverImage?.original || null;

    const msg = await interaction.channel.send(`wack wack wo...`);

    const pingEmbed = new client.discord.MessageEmbed()
        .setTitle('who tao? slap')
        .addField(`*quote from ${anime}*`,`${quote}\n\n-*${name}* :D`)
        .setImage(image)
        .setTimestamp()
        .setColor(client.config.embedColor)
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

    await interaction.reply({ embeds: [pingEmbed] });

    msg.delete();
  }
};