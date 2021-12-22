module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;
    
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
        else if (interaction.isMessageComponent()) {
            const component = interaction.client.components.get(interaction.customId);
            if (!component) return interaction.deferUpdate();

            try {
                await component.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while responding to this interaction!', ephemeral: true });
            }
        }
    },
};