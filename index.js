//SSSpencer413

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS']});;

client.on("ready", () => {
    console.log("ready!");

    // Check if we've made the setup command before
    client.application?.commands.fetch()
    .then((commands) => {
        if (!commands.find((cmd) => cmd.name === "setup")) {
            client.application?.commands.create({
                name: 'setup',
                description: 'Deploys the bot commands in the guild',
                options: [{
                    name: 'reset',
                    type: 'BOOLEAN',
                    description: 'Whether the bot should reset all of its current commands associated with the current guild.',
                    required: false,
                }]
            });
            
            console.log("Created deploy command!");
        }
    })
    .catch(console.error);


});

client.on("interactionCreate", (interaction) => {
    if (interaction.isCommand()) {
        try {
            let command = require(`./commands/${interaction.commandName}.js`);
            command.run(client, interaction);
        } catch (err) {
            console.error(err);
        }
    }
});

client.login(process.env.TOKEN);
