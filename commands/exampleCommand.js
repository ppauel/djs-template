const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Example Command')
        .addStringOption(option => option
            .setName('input')
            .setDescription('Enter a string')
            .setRequired(true)
        )
        .addIntegerOption(option => option
            .setName('int')
            .setDescription('Enter an integer')
        )
        .addNumberOption(option => option
            .setName('num')
            .setDescription('Enter a number')
        )
        .addBooleanOption(option => option
            .setName('bool')
            .setDescription('Select a boolean')
        )
        .addUserOption(option => option
            .setName('user')
            .setDescription('Select a user')
        )
        .addChannelOption(option => option
            .setName('channel')
            .setDescription('Select a channel')
        )
        .addRoleOption(option => option
            .setName('role')
            .setDescription('Select a role')
        )
        .addMentionableOption(option => option
            .setName('mentionable')
            .setDescription('Mention something')
        )
        .addStringOption(option => option
            .setName('choice')
            .setDescription('Select a choice')
            .addChoices(
                {
                    name: 'Option A',
                    value: 'a'
                },
                {
                    name: 'Option B',
                    value: 'b'
                },
                {
                    name: 'Option C',
                    value: 'c'
                }
            )
        ),
    global: false,
    async execute(interaction) {
        const string = interaction.options.getString('input');
        const integer = interaction.options.getInteger('int');
        const number = interaction.options.getNumber('num');
        const boolean = interaction.options.getBoolean('bool');
        const user = interaction.options.getUser('user');
        const member = interaction.options.getMember('user');
        const channel = interaction.options.getChannel('channel');
        const role = interaction.options.getRole('role');
        const mentionable = interaction.options.getMentionable('mentionable');
        const choice = interaction.options.getString('choice');

        // console.log([string, integer, number, boolean, user, member, channel, role, mentionable, choice]);

        await interaction.reply({ content: 'Pong!', ephemeral: true });
    },
};