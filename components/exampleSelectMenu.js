const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        id: 'mySelectMenu'
    },
    async execute(interaction) {
        const selected = interaction.values[0]
        await interaction.reply({ content: `You selected ${selected}!`, ephemeral: true });
    },
};