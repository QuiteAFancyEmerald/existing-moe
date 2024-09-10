const fs = require('fs').promises;
const chalk = require('chalk');
const path = require('path');

const readDirectory = async (dirPath, extension) => {
    try {
        const files = await fs.readdir(dirPath);
        return files.filter(file => file.endsWith(extension));
    } catch (error) {
        console.error(chalk.bgRed.white(`🚨 Error: Unable to read directory at ${dirPath}. Details: ${error.message}`));
        return [];
    }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const runEvents = async function (client) {
    try {
        const eventFolders = await readDirectory(`${client.cwd}/src/events`, "");
        await Promise.all(eventFolders.map(async (folder) => {
            const eventFiles = await readDirectory(`${client.cwd}/src/events/${folder}`, ".js");
            await Promise.all(eventFiles.map(async (file) => {
                const eventPath = path.join(client.cwd, 'src', 'events', folder, file);
                const event = require(eventPath);

                if (event.name) {
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                } else {
                    console.warn(chalk.bgYellow.black(`⚠️ Warning: Event file ${file} in ${folder} is missing a valid name property.`));
                }
            }));
        }));
        console.log(chalk.bgGreen.black('✅ Success: All events have been loaded.'));
    } catch (error) {
        console.error(chalk.bgRed.white(`🚨 Error: Failed to load events. Details: ${error.message}`));
    }
};

const readySlashCommands = async (client, slash, retries = 5) => {
    try {
        console.log(chalk.bgBlue.white(`🔄 Info: Registering ${slash.length} slash commands for all guilds...`));
        await client.application.commands.set(slash);
        console.log(chalk.bgGreen.black('✅ Success: Slash commands registered for all guilds.'));
    } catch (error) {
        if (error.code === 429 && retries > 0) {
            const delayTime = error.retry_after || (6 - retries) * 2000; // Use retry_after if available, otherwise exponential backoff
            console.warn(chalk.bgYellow.black(`⚠️ Warning: Rate limit hit. Retrying in ${delayTime / 1000} seconds...`));
            await delay(delayTime);
            await readySlashCommands(client, slash, retries - 1);
        } else {
            console.error(chalk.bgRed.white(`🚨 Error: Failed to register slash commands after multiple attempts. Details: ${error.message}`));
        }
    }
};

const getSlashCommands = async function (client) {
    try {
        let slash = [];
        const commandFolders = await readDirectory(`${client.cwd}/src/commands/slash`, "");
        await Promise.all(commandFolders.map(async (folder) => {
            const commandFiles = await readDirectory(`${client.cwd}/src/commands/slash/${folder}`, ".js");
            await Promise.all(commandFiles.map(async (file) => {
                const commandPath = path.join(client.cwd, 'src', 'commands', 'slash', folder, file);
                const command = require(commandPath);

                if (command.name) {
                    client.slash.set(command.name, command);
                    slash.push(command);
                } else {
                    console.warn(chalk.bgYellow.black(`⚠️ Warning: Command file ${file} in ${folder} is missing a valid name property.`));
                }
            }));
        }));
        console.log(chalk.bgGreen.black('✅ Success: All commands have been loaded.'));

        client.on("ready", async () => {
            await readySlashCommands(client, slash);
        });

        client.on('rateLimit', async (info) => {
            console.warn(chalk.bgYellow.black(`⚠️ Warning: Rate limit hit. Timeout: ${info.timeout}ms, Limit: ${info.limit}, Method: ${info.method}, Path: ${info.path}, Route: ${info.route}`));
            await delay(info.timeout);
            console.log(chalk.bgBlue.white(`🔄 Info: Retrying after rate limit timeout of ${info.timeout}ms`));
            await readySlashCommands(client, slash);
        });
    } catch (error) {
        console.error(chalk.bgRed.white(`🚨 Error: Failed to load slash commands. Details: ${error.message}`));
    }
};

module.exports = {
    runEvents,
    getSlashCommands
};