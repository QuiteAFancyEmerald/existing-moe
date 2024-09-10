module.exports = {
    name: "goblinmode",
    category: "Utility",
    description: "going to activate goblin mode",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('goblin mode activated')
            .setDescription('now word of the year tytyty by Oxford Dictionaries')
            .setImage('https://cdn.discordapp.com/attachments/1040975177737044029/1041053122451218452/image.png')
            .setURL('https://www.washingtonpost.com/world/oxford-dictionaries-names-goblin-mode-its-word-of-the-year/2022/12/05/9a6d5be2-7488-11ed-a199-927b334b939f_story.html')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
