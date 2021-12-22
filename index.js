const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

// Initialization
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES'], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

// Collections
client.commands = new Collection();
client.components = new Collection();
client.cooldowns = new Collection();

// Command Handler
for (const file of fs.readdirSync('./commands').filter(file => file.endsWith('.js'))) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Component Handler
for (const file of fs.readdirSync('./components').filter(file => file.endsWith('.js'))) {
	const component = require(`./components/${file}`);
	client.components.set(component.data.id, component);
}

// Event Handler
for (const file of fs.readdirSync('./events').filter(file => file.endsWith('.js'))) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login
client.login(process.env.TOKEN);