module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        client.user.setActivity(`${client.users.cache.size} users. ${client.guilds.cache.size} servers hehehe`, {
            type: "WATCHING",
            name: "for /help to whack. max lame"
        });
    
        console.log(`[LOG] ${client.user.tag} is now online!`);
        console.log(`[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers`);
        console.log(`[LOG] Bot serving ${client.users.cache.size} users`);
    }
}
