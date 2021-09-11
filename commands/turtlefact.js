//SSSpencer413

const https = require("https");

exports.run = async (Client, interaction) => {
    await interaction.defer();

    https.get("https://raw.githubusercontent.com/turtlecoin/turtle-facts-json/master/facts.json", (res) => {
        let data = "";
        res.on("data", (chunk) =>{
            data += chunk;
        });

        res.on("end", () => {
            let dataf = JSON.parse(data);
            if (dataf.JSON) {
                interaction.reply(dataf.JSON.Facts[Math.floor(Math.random() * dataf.JSON.Facts.length)]);
            }
        });
    });
};

exports.commandData = {
    name: 'turtlefact',
    description: 'random turtle fact',
    defaultPermission: true
};