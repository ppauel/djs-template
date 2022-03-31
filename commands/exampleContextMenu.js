const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const { ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Pong')
        .setType(ApplicationCommandType.Message), // User
    global: false,
    async execute(interaction) {
        await interaction.reply({ content: 'Ping!', ephemeral: true });
    },
};