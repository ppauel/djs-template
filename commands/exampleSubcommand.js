const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require('discord.js');

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
        ),
    global: false,
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'button') {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('myButton')
                        .setLabel('Button')
                        .setEmoji('😎')
                        //.setURL('https://discord.com')
                        //.setDisabled(true);
                        .setStyle('PRIMARY'), // SECONDARY, SUCCESS, DANGER, LINK
    
                );
            await interaction.reply({ content: 'Example Button', components: [row], ephemeral: true });
        }

        else if (interaction.options.getSubcommand() === 'selectmenu') {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('mySelectMenu')
                        .setPlaceholder('Nothing selected')
                        //.setMinValues(1)
                        //.setMaxValues(2)
                        .addOptions([
                            {
                                label: 'Option A',
                                description: 'Description',
                                value: 'a',
                            },
                            {
                                label: 'Option B',
                                description: 'Description',
                                value: 'b',
                            },
                        ]),
                );
            await interaction.reply({ content: 'Example Select Menu', components: [row], ephemeral: true });
        }
    },
};