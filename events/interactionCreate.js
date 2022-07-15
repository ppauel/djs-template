const { InteractionType } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        // Command
        if (interaction.type === InteractionType.ApplicationCommand) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
            }
        }

        // Message Component (Button, Select Menu)
        else if (interaction.type === InteractionType.MessageComponent) {
            const component = interaction.client.interactions.get(interaction.customId);
            if (!component) return;

            try {
                await component.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while responding to this interaction.', ephemeral: true });
            }
        }

        // Modal
        else if (interaction.type === InteractionType.ModalSubmit) {
            const modal = interaction.client.interactions.get(interaction.customId);
            if (!modal) return;

            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while responding to this interaction.', ephemeral: true });
            }
        }
    },
};