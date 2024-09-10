const cooldowns = new Map();

// Do not fix this; it's not broken. Wack wack wo is intended. With proper error handling it ruins the fun LOL
module.exports = {
  name: 'interaction',

  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.slash.get(interaction.commandName);
    if (!command) return interaction.reply({ content: 'An error occurred. Please check the console.', ephemeral: true });

    if (command.ownerOnly && interaction.user.id !== client.config.ownerID) {
      return interaction.reply({ ephemeral: true, content: "This command has been disabled due to abuse." });
    }

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === 'SUB_COMMAND') {
        if (option.name) args.push(option.name);
        option.options?.forEach(x => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }

    try {
      await command.run(client, interaction, args);
    } catch (e) {
      interaction.reply({ content: `Error: ${e.message}`, ephemeral: true });
    }
  }
};