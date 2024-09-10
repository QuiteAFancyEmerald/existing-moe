module.exports = {
  name: "wheelchair",
  category: "TN",
  description: "hehehehe so they thought. lemme obtain sites please",
  ownerOnly: false,
  run: async (client, interaction) => {
    const msg = await interaction.channel.send(`failure at life. not a joke but real`);
  
    const message = await interaction.reply({ content: 'mhmmmmm LOAD LOAD LOAD mhmmmm I seem to be analyzing you. use the right bot <3', fetchReply: true });
    message.react('<:wheelchair:1041046138087809034>');
    message.react('<:wheelchair:1041046156567912568>');
    message.react('<:wheelchair:1041046159344533625>');
    message.react('<:wheelchair:1041046161680765032>');
    message.react('<:wheelchair:1041046152373612667>');
    message.react('<:wheelchair:1041046145398476800>');
    message.react('<:wheelchair:1041046139958464512>');
    message.react('<:wheelchair:1041046165615018075>');
    message.react('<:wheelchair:1041046153275379803>');
    message.react('<:horsey:860338453077557248>');
    message.react('<:elidrink:766056764927770634>');
    message.react('<:lime:701648462873100329>');
    message.react('<:yocttorture:782687878777929758>');
    message.react('<:duce:813601029303304222>');
    msg.react('<:wheelchair:1041046156567912568>');

    msg.delete();
  },
};
