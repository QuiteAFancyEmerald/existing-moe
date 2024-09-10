module.exports = {
    name: "lobster",
    category: "Utility",
    description: "lobster command for corp help",
    ownerOnly: false,
    run: async (client, interaction) => {
      const msg = await interaction.channel.send(`failure at life. not a joke but real`);
    
      const message = await interaction.reply({ content: 'who... lobster? you thought i would say tao', fetchReply: true });
      message.react('<:lobster:1070051399146156132>');
  
      msg.delete();
    },
  };