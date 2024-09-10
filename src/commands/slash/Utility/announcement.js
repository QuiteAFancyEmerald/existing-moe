module.exports = {
    name: "announcement",
    category: "Utility",
    description: "Important public service announcement",
    ownerOnly: true,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`Recently, there has been a meme/copypasta going around that states that "degeneracy logs your ip, approximate location, recent searches, device info, discord token, and runs a crypto miner on your device". While I do find the joke funny and do not denounce the use if it, and I understand that most of you acknowledge that the copypasta is a joke, I have made myself aware that an increasing number of members that are not very active are unaware that this is a joke. To clarify, the copypasta is a joke.  Degeneracy does not log your device info, discord token, and it does not run a crypto miner on your device. Degeneracy does, yes I repeat, does log your IP address and the URLs you have gone to in some form or another. However, I can't tell specifically who you are with this info and I have no malicious intentions to do anything with these. This means that, although I may have access to you IP address, I have no plans at all to do anything malicious with it or to give it to anybody else.

        By using Degeneracy you acknowledge this and are putting your firm trust into me. I am very thankful for your trust which is why I choose to be transparent with everyone. If this paragraph about Degeneracy's logs concern you or make you uncomfortable in any way, shape, or form, PLEASE DM me to ask questions about logs so I can clarify anything further. I want everyone to feel safe while using my services.
        
        Thank You,
        Degenerate`);

        const pingEmbed = new client.discord.channel.send(`oops misclick test`);

        await interaction.reply({ embeds: [pingEmbed] });

        msg.delete();
    },
};
