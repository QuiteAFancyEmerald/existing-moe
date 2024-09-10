module.exports = {
    name: "proxyfaq",
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
                    .setURL("https://github.com/titaniumnetwork-dev")
        );

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Titanium Network FAQ')
            .setDescription('Here is a quick overview of common questions asked related to any of the proxy services in TN.')
            .addFields(
                { name: 'Which proxy is currently being updated still?', value: 'As you have noticed lots of web proxies are present here as services. Currently Ultraviolet and Rammerhead lead with this; Ultraviolet having the most frequent and recent updates.' },
                { name: 'Where can I view supported sites and current web proxies?', value: 'Look into #proxy-faq and #proxy-showcase!' },
                { name: 'Why is the site not working?', value: 'This can either be a temporary issue with the site maintainer OR the site simply just is not supported by any of the web proxies at the time.' },
                { name: 'Why is the site so slow when using any of the proxies?', value: 'This is due to a combination of size and scaling. Titanium Network has a lot of users which often can flood our servers however many updates are currently in the works to significantly improved performance with Ultraviolet. Also look into donating if you want to help out so we can afford better servers!' },
                { name: 'What is the best proxy site?', value: 'There is no best proxy site! Look over #proxy-showcase to find one to your liking.' },
                { name: 'What is the best proxy?', value: 'The best proxy would be Ultraviolet which has amazing speeds and support.' },
                { name: 'How can I host my own proxy or proxy site?', value: 'Check out the official documentations site and our GitHub! All of our projects are open-source.' },
                { name: 'I want to contribute or view the source code of any services in Titanium Network!', value: 'Contributions are open. Modern services are reflected by the TOMP HTTP specifications. TOMP is an organization containing new standards and implementations for web proxies built on Service Workers.' },
            )
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row], ephemeral: true });

        msg.delete();
    },
};
