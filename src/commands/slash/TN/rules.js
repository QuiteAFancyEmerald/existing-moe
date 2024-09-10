module.exports = {
    name: "rules",
    category: "TN",
    description: "Quick guide for those who are confused about services in TitaniumNetwork",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo...`);

        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("Discord TOS")
                    .setStyle("LINK")
                    .setURL("https://discord.com/terms"),
                new client.discord.MessageButton()
                    .setLabel("Guidelines")
                    .setStyle("LINK")
                    .setURL("https://titaniumnetwork.org/guidelines"),
                new client.discord.MessageButton()
                    .setLabel("Privacy Policy")
                    .setStyle("LINK")
                    .setURL("https://titaniumnetwork.org/privacy-policy")
        );

        const pingEmbed = new client.discord.MessageEmbed()
            .setTitle('Welcome to the Titanium Network Community!')
            .setDescription('We are excited to have you join us, and we want to make sure everyone has a positive and enjoyable experience. To make that happen, please take a moment to review our community rules:')
            .addFields(
                { name: 'Part I', value: '1) Be respectful to one another, and show kindness to the members and staff of this community.\n2) Spamming or any kind of toxic behavior won not be tolerated. This includes reactions, text, images, mentions, and please use spoiler tags responsibly.\n3) Unsolicited DM advertising is not allowed, you can advertise within the server but not by spamming it.\n4) Your nickname or username must be able to be typed with a standard English keyboard, emojis and symbols are allowed as long as they follow the rules, any name found to be inappropriate will be changed.' },
                { name: 'Part II', value: '\n5) Anything that is Not Safe For Work (NSFW) and offensive content, language, or comments will not be allowed.\n6) Please use the correct channels for the right purpose, it helps us keep things organized.\n7) Discussions, links, or files that might be considered illegal or malicious (e.g. piracy, cracking, malware, botting, raiding) is strictly prohibited.\n8) Sharing personal information like IP grabber links or Doxxing is not allowed, and neither is impersonating others without permission.\n9) Leaking assets (including but not limited to: private web proxy links, Licensed content) of Titanium Network is strictly prohibited, violators may be banned.' },
                { name: 'Other', value: `Please refrain from sharing content that may induce seizures and To make sure everyone is on the same page, let's stick to English or a language commonly taught in the United States when communicating in the community.\n\n**Please follow Discord's Terms of Service (https://dis.gd/terms) and Community Guidelines (https://dis.gd/guidelines) while in our community.**\n\nBy following these simple rules, we can all work together to make this community a friendly, positive, and enjoyable place for everyone. Thank you for your cooperation, and we're looking forward to having you as part of our community! <3` },
            )
            .setImage('https://cdn.discordapp.com/attachments/681203088862085168/1062446889779343551/RulesBanner.png')
            .setURL('https://titaniumentwork.org')
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
        
        await interaction.reply({ embeds: [pingEmbed], components: [row]});

        msg.delete();
    },
};