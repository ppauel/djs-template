const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        id: 'myButton'
    },
    async execute(interaction) {
        await interaction.reply({ content: 'You pressed my button!', ephemeral: true });
    },
};