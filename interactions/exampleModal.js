const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");

module.exports = {
    data: {
        id: 'myModal',
        builder: new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Modal')
            .addComponents(
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('name')
                        .setRequired(true)
                        .setMinLength(1)
                        .setMaxLength(100)
                        .setLabel('What is your name?')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('Wumpus')
                ),
                new ActionRowBuilder().addComponents(
                    new TextInputBuilder()
                        .setCustomId('hobbies')
                        .setRequired(false)
                        .setMaxLength(1000)
                        .setLabel('What are your hobbies?')
                        .setStyle(TextInputStyle.Paragraph)
                        .setValue('Singing')
                )
            ),
    },
    async execute(interaction) {
        const name = interaction.fields.getTextInputValue('name');
        const hobbies = interaction.fields.getTextInputValue('hobbies');

        await interaction.reply({ content: `Hello, ${name}. Your hobbies are ${hobbies}.`, ephemeral: true });
    },
};