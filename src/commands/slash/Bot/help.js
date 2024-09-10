const { readdir } = require("fs").promises;

module.exports = {
    name: "help",
    usage: '/help <command>',
    options: [
        {
            name: 'command',
            description: 'What command do you need help >:(',
            type: 'STRING',
            required: false
        }
    ],
    category: "Bot",
    description: "Return all commands, or one specific command!",
    ownerOnly: false,
    run: async (client, interaction) => {

        // Buttons that take you to a link
        const row = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                    .setLabel("GitHub")
                    .setStyle("LINK")
                    .setURL("http://github.com/QuiteAFancyEmerald"),
                new client.discord.MessageButton()
                    .setLabel("Support")
                    .setStyle("LINK")
                    .setURL("http://discord.gg/quite")
            );

        const commandInt = interaction.options.getString("command");
        if (!commandInt) {
            const categories = ["Bot", "Utility", "Queen", "Extra", "TN", "Anime"];
            const commandLists = {};

            await Promise.all(categories.map(async (category) => {
                const files = await readdir(`${client.cwd}/src/commands/slash/${category}`);
                commandLists[category] = files.map(file => {
                    const command = require(`${client.cwd}/src/commands/slash/${category}/${file}`);
                    return `\`${command.name}\``;
                });
            }));

            const helpEmbed = new client.discord.MessageEmbed()
                .setTitle(`Commands Directory <3`)
                .setDescription(`\n**WACK WACK WO**\n\nYou can use \`/help <command>\` to see more info about any other random commands this bot shouldn't have!`)
                .setImage('https://raw.githubusercontent.com/QuiteAFancyEmerald/existing.moe/main/assets/img/existingmoeinfographic.png')
                .addField("Anime", commandLists.Anime.join(", "), true)
                .addField("MOE Commands", commandLists.Utility.join(", "), true)
                .addField("Bocchi Commands", commandLists.Bot.join(", "), true)
                .addField("Funny", commandLists.Extra.join(", "), true)
                .addField("MOE", commandLists.Queen.join(", "), true)
                .addField("Staff CMDs", commandLists.TN.join(", "), true)
                .setColor(client.config.embedColor)
                .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

            interaction.reply({ embeds: [helpEmbed], components: [row] });
        } else {
            const command = client.slash.get(commandInt.toLowerCase());

            if (!command) {
                interaction.reply({ content: `There isn't any command named "${commandInt}"` });
            } else {
                const { name, description = "No description provided", usage = ">:(", category = "No category provided!" } = command;

                const helpCmdEmbed = new client.discord.MessageEmbed()
                    .setTitle(`${client.user.username} | \`${name}\` Command`)
                    .addFields(
                        { name: "Description", value: description },
                        { name: "Usage", value: usage },
                        { name: 'Category', value: category }
                    )
                    .setColor(client.config.embedColor)
                    .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

                interaction.reply({ embeds: [helpCmdEmbed] });
            }
        }
    },
};