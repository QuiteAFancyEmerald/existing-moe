module.exports = {
    name: "infocommand",
    category: "TN",
    description: "Quick guide for those who are confused about services in TitaniumNetwork",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("Official Site")
                    .setStyle("LINK")
                    .setURL("https://titaniumnetwork.org"),
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
            .setTitle('Welcome to Titanium Network!')
            .setDescription('**Introduction**\nHey there! We want to give you and everyone in our community a more open browsing experience with sites like Holy Unblocker, Incognito, and Nebula while providing actively maintained projects like Ultraviolet. Over the past couple years, we have been working on some cool projects to improve our services in the case of web proxies. Thanks for joining! <3\n\n This server is a place for us to hang out with the community, work on projects with other swag people, and just have fun. If you have any questions or concerns, let us know in the support and feedback channels.')
            .addFields(
                { name: 'Rules', value: '\nCheck out the Rules channel for a better description.\n**Following the Discord TOS is the biggest rule!**\n\nIt is important for us to maintain a safe and respectful environment for everyone. We want everyone to feel welcome and included, and we will not tolerate hate speech, harassment, or bullying of any kind. If you see or experience any of these behaviors, please report it to the appropriate channels so we can take action.\n\nUsers who fall under this category will be dealt with according to the guidelines outlined in our punishment policy depending on the offense followed by a potential ban from TN.\n\nLastly, please note that leaking assets and private sites is not only a violation of our terms of use but also detrimental to the community. If you wish to support us, there are other ways to help. **Thank you for helping us create a positive and supportive community.**' },
                { name: 'Staff Members', value: '<@327470218005708810>\n<@725438522877804657>\n<@569719207504117780>\n<@368486642106761229>\n<@650867733017133057>\n<@476169716998733834>\n<@325116477185196033>\n<@838637664554844202>\n<@922329176999100477>\n<@497551576588746768>\n<@520334606206107653>\n<@455493575233372170>' },
                { name: 'Active Contributors', value: 'We are proud to have partners and active contributors who are dedicated to working on projects and making this a great place for everyone. They are vital to the growth and success of this community. We appreciate their hard work and support.\n\n<@1058825174935404654>\n<@366312087317774336>\n<@533081943638671377>\n<@1026689630357168148>\n<@1052337458374787092>' },
            )
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row]});

        msg.delete();
    },
};