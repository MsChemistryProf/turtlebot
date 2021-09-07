//SSSpencer413

const https = require("https");

exports.run = async (Client, interaction) => {
    await interaction.defer();

    https.get("https://source.unsplash.com/featured/?turtle", (res) => {
        interaction.reply(res.headers.location);
    });
};

exports.commandData = {
    name: 'turtle',
    description: 'random turtle pic',
    defaultPermission: true
};
