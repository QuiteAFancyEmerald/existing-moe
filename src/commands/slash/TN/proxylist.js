module.exports = {
    name: "proxylist",
    category: "TN",
    description: "A list of all the official proxy services here in TitaniumNetwork and brief descriptions for each.",
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
            .setTitle('Titanium Network Site Service List')
            .setDescription('A list of all the official proxy services here in TitaniumNetwork and brief descriptions for each. /proxy for requesting.')
            .addFields(
                { name: 'Holy Unblocker LTS (HL)', value: 'Holy Unblocker is a secure web proxy service supporting numerous sites while concentrating on detail with design, mechanics, and features. By far the largest scaling proxy service with frequent domain restocks and updates.' },
                { name: 'Incognito (IN)', value: 'Access the world wide web with Incognito, a fast and rather fancy proxy service. Enjoy a more private internet session without ads. The second largest scaling proxy service in TN.' },
                { name: 'TerbiumUX (TB)', value: 'TerbiumOS is a project which aims to create a webOS packed with various features such as basic text editors, media streaming and web emulation all through a proxied instance.' },
                { name: 'Hypertabs (HT)', value: 'An incredible browser-themed web proxy service.' },
                { name: 'Nebula (NB)', value: 'NebulaWeb is a stunning, sleek, and functional web-proxy with support for thousands of popular sites. With NebulaWeb, the sky is the limit.' },
                { name: 'Radon Games (RD)', value: 'An open-source unblocked games website built with simplicity in mind.' },
                { name: 'Illusive (N/A)', value: 'A sleek, open-source proxy site.' },
                { name: 'Ludicrous (LU)', value: 'The Ludicrous Web Proxy Site: Fast, Simple, Small. The flagship site of Ludicrous.' },
            )
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row], ephemeral: true });

        msg.delete();
    },
};
