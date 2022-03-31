const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { ActivityType } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const globalCommands = Array.from(client.commands.filter(cmd => cmd.global === true).values()).map(m => m.data);
        const guildCommands = Array.from(client.commands.filter(cmd => cmd.global === false).values()).map(m => m.data);

        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

        await rest.put(Routes.applicationCommands(client.user.id), { body: globalCommands })
            .catch(console.error);

        await rest.put(Routes.applicationGuildCommands(client.user.id, config.guildId), { body: guildCommands })
            .catch(console.error);

        // Presence
        client.user.setPresence({ activities: [{ name: 'music', type: ActivityType.Listening }], status: 'online' });

        console.log(`Ready! Logged in as ${client.user.tag} (${client.user.id})`);
    },
};