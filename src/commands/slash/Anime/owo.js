const Discord = require("discord.js");
const client = require("nekos.life");
const neko = new client();
const request = require("request-promise-native");

module.exports = {
    name: "owo",
    category: "Anime",
    description: "owoify a text and send a slap image",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send("wack wack wo...");

        const text = args.join(" ");
        if (!text || text.length > 200) {
            return message.reply("oopsie whoopsie, you made a fucky wucky, no text or text over 200");
        }
    
        const { owo } = await request({
            uri: `https://nekos.life/api/v2/owoify`,
            qs: {
                text: text
            },
            json: true
        });
    
        const imageUrl = (await neko.slap()).url;
        const embed = new Discord.MessageEmbed()
            .setTitle("who tao? slap")
            .setImage(imageUrl)
            .setColor("RANDOM")
            .setDescription("Owoified text:", owo)
        await message.channel.send({ embed });
        msg.delete();
    },
};
