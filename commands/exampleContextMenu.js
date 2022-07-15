const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const { ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Get user ID')
        .setType(ApplicationCommandType.User), // Message
    global: false,
    async execute(interaction) {
        const userID = interaction.member.user.id;
        await interaction.reply({ content: `${userID}`, ephemeral: true });
    },
};