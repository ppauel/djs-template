const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

// Initialization
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.GuildMember]
});

// Collections
client.commands = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

// Paths
let commandPath = "./commands",
	interactionPath = "./interactions",
	eventPath = "./events";

// Command Handler
for (const file of fs.readdirSync(commandPath).filter(file => file.endsWith('.js'))) {
	const command = require(`${commandPath}/${file}`);
	client.commands.set(command.data.name, command);
}

// Interaction Handler
for (const file of fs.readdirSync(interactionPath).filter(file => file.endsWith('.js'))) {
	const interaction = require(`${interactionPath}/${file}`);
	client.interactions.set(interaction.data.id, interaction);
}

// Event Handler
for (const file of fs.readdirSync(eventPath).filter(file => file.endsWith('.js'))) {
	const event = require(`${eventPath}/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login
client.login(process.env.TOKEN);