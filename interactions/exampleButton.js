const { ButtonStyle, ButtonBuilder } = require("discord.js");

module.exports = {
    data: {
        id: 'myButton',
        builder: new ButtonBuilder()
            .setCustomId('myButton')
            .setLabel('Button')
            .setEmoji({ name: '😎' }) // { id: '123' }
            .setStyle(ButtonStyle.Primary),
            //.setURL('https://discord.com')
            //.setDisabled(true);
    },
    async execute(interaction) {
        await interaction.reply({ content: 'You pressed my button!', ephemeral: true });
    },
};