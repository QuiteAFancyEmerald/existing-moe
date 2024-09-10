module.exports = {
    name: "supportlist",
    category: "TN",
    description: "A quick overview for supported sites under any of the web proxies.",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("Documentation")
                    .setStyle("LINK")
                    .setURL("https://docs.titaniumnetwork.org"),
                new client.discord.MessageButton()
                    .setLabel("GitHub")
                    .setStyle("LINK")
                    .setURL("https://github.com/titaniumnetwork-dev")
        );

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Supported Sites List')
            .setDescription('Note that naturally not every single site can be listed here however the most common ones have focus.')
            .addFields(
                { name: 'Google Services', value: 'Ultraviolet: Some proxy sites may have this blacklisted for security reasons' },
                { name: 'CAPTCHA/hCAPTCHA', value: 'Ultraviolet and Rammerhead: Full' },
                { name: 'Youtube', value: 'Ultraviolet and Rammerhead: Full' },
                { name: 'Spotify', value: 'Rammerhead: Full, Ultraviolet: Partial' },
                { name: 'Discord', value: 'Ultraviolet and Rammerhead: Full; some issues with streaming may occur' },
                { name: 'Reddit', value: 'Ultraviolet: Some links may lead to a 404 or occasional navigation issues' },
                { name: 'GeForce NOW', value: 'Ultraviolet: May or may not disconnect on startup. Always a partial situation' },
                { name: 'Now.gg', value: 'Ultraviolet: May disconnect or not work' },
                { name: 'All Static Sites', value: 'Ultraviolet and Rammerhead' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Best Web Proxy Overall:', value: 'Ultraviolet: Speed, performance, security and support' },
            )
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row], ephemeral: true });

        msg.delete();
    },
};
