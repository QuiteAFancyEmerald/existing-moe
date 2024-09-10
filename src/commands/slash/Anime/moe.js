module.exports = {
  name: "moeblob",
  category: "Utility",
  description: "blob",
  ownerOnly: false,
  run: async (client, interaction) => {
      const msg = await interaction.channel.send(`wack wack wo...`);

      const pingEmbed = new client.discord.MessageEmbed()
          .setTitle('blob')
          .setImage('https://cdn.discordapp.com/attachments/1064054176339988480/1070065811806494790/MOEEEEEEEEEEEe.png')
          .setColor(client.config.embedColor)
          .setFooter({ text: `${client.config.embedfooterText} (credits to madjik)`, iconURL: `${client.user.displayAvatarURL()}` });
      
      await interaction.reply({ embeds: [pingEmbed] });

      msg.delete();
  },
};