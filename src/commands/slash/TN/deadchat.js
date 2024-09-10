module.exports = {
    name: "deadchat",
    category: "TN",
    description: "cringe",
    ownerOnly: false,
    run: async (client, interaction) => {
      const msg = await interaction.channel.send(`failure at life. not a joke but real`);

      const pingEmbed = new client.discord.MessageEmbed()
      .setTitle('cringe issue to use this command')
      .setImage('https://media.tenor.com/1AOBDYxmV9wAAAAd/chat-dies.gif')
      .setColor(client.config.embedColor)
      .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
    
      const message = await interaction.reply({ embeds: [pingEmbed], fetchReply: true });
      msg.react('<:wheelchair:1041046156567912568>');
  
      msg.delete();
    },
  };
  