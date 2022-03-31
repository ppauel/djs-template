const { Client, Collection, Partials } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

// Initialization
const client = new Client(
	{
		intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'DirectMessages'],
		partials: [Partials.Message, Partials.Channel, Partials.Reaction]
	});

// Collections
client.commands = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

// Command Handler
for (const file of fs.readdirSync('./commands').filter(file => file.endsWith('.js'))) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Interaction Handler
for (const file of fs.readdirSync('./interactions').filter(file => file.endsWith('.js'))) {
	const interaction = require(`./interactions/${file}`);
	client.interactions.set(interaction.data.id, interaction);
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