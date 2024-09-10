console.clear();
console.debug('Booting up…');

const express = require('express');
const Discord = require('discord.js');
const { Client, Collection, Intents } = Discord;
const helpers = require('./helpers/index');
const fs = require('fs');
const path = require('path');
const process = require('process');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.send('Hello, this is your website running on port 3001!');
});

app.listen(PORT, () => {
    console.log(`Website is running on http://localhost:${PORT}`);
});

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
});

try {
    client.config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json'), 'utf8'));
} catch (error) {
    console.error('Error reading config.json:', error);
    process.exit(1);
}

client.discord = Discord;
client.commands = new Collection();
client.slash = new Collection();
client.cwd = process.cwd();
module.exports = client;

helpers.runEvents(client);
helpers.getSlashCommands(client);

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('[FATAL] Possibly Unhandled Rejection at: Promise', promise, '\nreason:', reason.message);
});

client.login(process.env.TOKEN).catch((error) => {
    console.error('Error logging in:', error);
    process.exit(1);
});