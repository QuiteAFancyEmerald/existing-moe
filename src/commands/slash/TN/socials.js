module.exports = {
    name: "socials",
    category: "TN",
    description: "Quick guide for those who are confused about services in TitaniumNetwork",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("Discord")
                    .setStyle("LINK")
                    .setURL("https://discord.gg/unblock"),
                new client.discord.MessageButton()
                    .setLabel("Patreon")
                    .setStyle("LINK")
                    .setURL("https://www.patreon.com/holyunblocker"),
                new client.discord.MessageButton()
                    .setLabel("YouTube")
                    .setStyle("LINK")
                    .setURL("https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg"),
                new client.discord.MessageButton()
                .setLabel("Twitter")
                .setStyle("LINK")
                .setURL("https://twitter.com/TitaniumNetDev")
        );

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Socials')
            .setDescription('Do not forget to check out our socials, and help spread the word about the community. Every little bit helps!\n\n**We appreciate your support :D**\n\nPlease open a ticket if you do not automatically get the supporter role as the bot is offline sometimes.')
            .setImage('https://cdn.discordapp.com/attachments/933124677038121004/1036082448737501194/unknown.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row]});

        msg.delete();
    },
};