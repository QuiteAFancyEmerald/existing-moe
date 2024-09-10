module.exports = {
    name: "services",
    category: "TN",
    description: "Quick guide for those who are confused about services in TitaniumNetwork",
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
                    .setURL("https://github.com/titaniumnetwork-dev"),
                new client.discord.MessageButton()
                    .setLabel("TOMPHTTP")
                    .setStyle("LINK")
                    .setURL("https://github.com/tomphttp/")
        );

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Services')
            .setDescription('We are a team of tech enthusiasts at Titanium Network, who are dedicated to creating solutions that help overcome internet censorship. Our main goal is to provide users with tools that can enable them to browse the web without limitations. By developing and improving web proxy technologies, we are able to offer our community a variety of services such as :')
            .addFields(
                { name: 'Web Proxies', value: '**Ultraviolet -** https://github.com/titaniumnetwork-dev/Ultraviolet\n**Rammerhead -** https://github.com/binary-person/rammerhead\n**Corrosion -** https://github.com/titaniumnetwork-dev/Corrosion\n**Womginx -** https://github.com/binary-person/womginx\n**PyDodge B -** https://github.com/BinBashBanana/PyDodge\n**Alloy -** https://github.com/titaniumnetwork-dev/alloy' },
                { name: 'Proxy Sites', value: '**Holy Unblocker -** https://holyubofficial.net\n**Incognito -** https://github.com/caracal-js/Incognito\n**Hypertabs -** https://hypertabs.cc\n**Nebula Proxy -** https://nebulaproxy.io\n**Radon Games -** https://radon.games\n**TerbiumUX -** https://terbiumux.net\n**Ludicrous -** https://ludiub.com' },
                { name: 'TOMPHTTP', value: '**specifications -** https://github.com/tomphttp/specifications\n**bare-server -** https://github.com/tomphttp/bare-server-node\n\nPlease verify below if you cannot see any channels!\n**Thank you and welcome! :D**' },
            )
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row]});

        msg.delete();
    },
};