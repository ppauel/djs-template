const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActionRowBuilder } = require('discord.js');

const exampleButton = require('../interactions/exampleButton');
const exampleSelectMenu = require('../interactions/exampleSelectMenu');
const exampleModal = require('../interactions/exampleModal');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send')
        .setDescription('Example Command with Subcommands')
        .addSubcommand(subcommand =>
            subcommand
                .setName('button')
                .setDescription('Send a Button')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('selectmenu')
                .setDescription('Send a Select Menu')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('modal')
                .setDescription('Open a Modal')
        ),
    global: false,
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'button') {
            const row = new ActionRowBuilder()
                .addComponents(exampleButton.data.builder); // Button in interactions/exampleButton.js
            await interaction.reply({ content: 'Example Button', components: [row], ephemeral: true });
        }

        else if (interaction.options.getSubcommand() === 'selectmenu') {
            const row = new ActionRowBuilder()
                .addComponents(exampleSelectMenu.data.builder); // SelectMenu in interactions/exampleSelectMenu.js
            await interaction.reply({ content: 'Example Select Menu', components: [row], ephemeral: true });
        }

        else if (interaction.options.getSubcommand() === 'modal') {
            await interaction.showModal(exampleModal.data.builder);
        }
    },
};