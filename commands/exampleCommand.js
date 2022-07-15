const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('input')
        .setDescription('Example Command')
        .addStringOption(option => option
            .setName('string')
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
        const string = interaction.options.getString('input'),
            integer = interaction.options.getInteger('int'),
            number = interaction.options.getNumber('num'),
            boolean = interaction.options.getBoolean('bool'),
            user = interaction.options.getUser('user'),
            member = interaction.options.getMember('user'),
            channel = interaction.options.getChannel('channel'),
            role = interaction.options.getRole('role'),
            mentionable = interaction.options.getMentionable('mentionable'),
            choice = interaction.options.getString('choice');

        await interaction.reply({ content: `...`, ephemeral: true });
    },
};