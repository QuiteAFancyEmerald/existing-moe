module.exports = {
    name: "notinsane",
    category: "Utility",
    description: "combine cat with car and you get",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.send(`wack wack wo AAA...`);
        
        await interaction.reply(`https://cdn.discordapp.com/attachments/725506757291671663/1043874169563119666/v12044gd0000cd9juk3c77u4iriesee0.mp4`);

        msg.delete();
    },
};
