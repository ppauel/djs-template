const { SelectMenuBuilder, SelectMenuOptionBuilder } = require("discord.js");

module.exports = {
    data: {
        id: 'mySelectMenu',
        builder: new SelectMenuBuilder()
            .setCustomId('mySelectMenu')
            .setPlaceholder('Nothing selected')
            //.setMinValues(1)
            //.setMaxValues(2)
            .addOptions(
                new SelectMenuOptionBuilder()
                    .setLabel('Option A')
                    .setValue('a')
                    .setDescription('Description'),
                new SelectMenuOptionBuilder()
                    .setLabel('Option B')
                    .setValue('b')
                    .setDescription('Description'),
                new SelectMenuOptionBuilder()
                    .setLabel('Option C')
                    .setValue('c')
                    .setDescription('Description')
                    .setEmoji({ name: '😎' })
            ),
    },
    async execute(interaction) {
        const selected = interaction.values[0]
        await interaction.reply({ content: `You selected option ${selected}!`, ephemeral: true });
    },
};