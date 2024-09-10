const Canvas = require("canvas");
const { createCanvas, Image } = Canvas;

module.exports = {
  name: "moememe",
  category: "Queen",
  description: "Add user-entered text to an image",
  ownerOnly: false,
  run: async (client, interaction) => {
    const text = new Array ("I don't work yet >:(",
    "(credits to madjik)FIGHT ME I DONT WORK",
    "AAAA STOP USING ME",
    "STOP STOP STOP",
    "TAKE BRICK AND UHHH",
    "I WILL NOT WORK",
    "WACK WHACK STAB",
    "I WILL NOT WORK FIGHT ME");

    const data = text.toString();

    const canvas = createCanvas(700, 700);
    const ctx = canvas.getContext("2d");
    const containerWidth = 300;
    const lineHeight = 50;
    const image = new Image();
    image.src = "https://cdn.discordapp.com/attachments/925726554665914399/1070083357603545119/Lmao.png";
    image.onload = () => {
        ctx.drawImage(image, 0, 0, 700, 700);
        ctx.font = "50px sans-serif";

        const words = data.split(" ");
        let line = "";
        let y = 300;
  
        for (const word of words) {
          const testLine = line + word + " ";
          const testWidth = ctx.measureText(testLine).width;
          if (testWidth > containerWidth) {
            ctx.fillText(line, 320, y);
            line = word + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, 320, y);
        interaction.reply({ files: [canvas.toBuffer()] });
    };
  },
};
