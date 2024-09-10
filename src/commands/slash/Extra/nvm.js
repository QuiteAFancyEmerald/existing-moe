module.exports = {
    name: "nvm",
    category: "Extra",
    description: "nvm nvm nvm nvm",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('where did my house go')
            .setImage('https://media.tenor.com/c9a1db0_GncAAAAd/nvm-nevermind.gif')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};