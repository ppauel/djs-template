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
                await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
            }
        }
        else if (interaction.isMessageComponent()) {
            const component = interaction.client.interactions.get(interaction.customId);
            if (!component) return await interaction.deferUpdate();

            try {
                await component.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while responding to this interaction.', ephemeral: true });
            }
        }
        else if (interaction.isModalSubmit()) {
            const modal = interaction.client.interactions.get(interaction.customId);
            if (!modal) return await interaction.deferUpdate();

            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while responding to this interaction.', ephemeral: true });
            }
        }
    },
};