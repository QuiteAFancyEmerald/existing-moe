module.exports = {
    name: "approb",
    category: "Queen",
    description: "i approbe",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo AAA...`);
        
        await interaction.reply(`<:approb:1050039446856269894>`);

        msg.delete();
    },
};
