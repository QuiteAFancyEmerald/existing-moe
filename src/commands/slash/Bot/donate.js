module.exports = {
    name: "donate",
    category: "Bot",
    description: "Donate if you want to support Holy Unblocker!",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Donate to Emerald (me tyty)! 🌺🌺')
            .setDescription('AKA Holy Unblocker if you want faster services and more domains unblocked per month.')
            .addFields(
                { name: 'Patreon:', value: 'https://patreon.com/' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Discord:', value: 'https://discord.gg/quite', inline: true },
                { name: 'Official Site:', value: 'https://holyunblocker.org', inline: true },
            )
            .setImage('https://cdn.discordapp.com/attachments/1015840957381476362/1041092375877001337/5207FA6A-B153-46C4-8479-3AF9EEBBBBAE.jpg')
            .setURL('https://patreon.com/')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
