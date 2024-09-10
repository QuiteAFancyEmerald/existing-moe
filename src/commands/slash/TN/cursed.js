module.exports = {
    name: "roblox",
    category: "TN",
    description: "Play Roblox On Browser",
    ownerOnly: false,
    run: async (client, interaction) => {
      const msg = await interaction.channel.send(`failure at life. not a joke but real`);

      const pingEmbed = new client.discord.MessageEmbed()
      .setTitle('roblox issue')
      .setImage('https://media.tenor.com/ZXSh6KmzssYAAAAC/roblox-roblox-meme.gif')
      .setColor(client.config.embedColor)
      .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
    
      const message = await interaction.reply({ embeds: [pingEmbed], fetchReply: true });
      message.react('<:horsey:860338453077557248>');
      message.react('<:elidrink:766056764927770634>');
      message.react('<:lime:701648462873100329>');
      message.react('<:yocttorture:782687878777929758>');
      message.react('<:duce:813601029303304222>');
      msg.react('<:wheelchair:1041046156567912568>');
  
      msg.delete();
    },
  };
  