const fs = require('fs');


exports.run = async (Client, interaction) => {

    // Try to find any option to reset the current commands
    if (interaction.options.getBoolean("reset") == true) {
        interaction.guild.commands.fetch()
        .then((commands) => {
            commands.each((cmd) => cmd.delete());
        })
        .catch(console.error);

        interaction.reply({ content: 'Reset commands'});

   } else {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (let file of commandFiles) {
            let command = require(`../commands/${file}`);

            if (command.commandData) {
                interaction.guild.commands.create(command.commandData);
            }
        }
        interaction.reply({ content: 'Setup complete!'});
   }
};