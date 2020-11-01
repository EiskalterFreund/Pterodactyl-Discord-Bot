const { PREFIX, DISCORD_TOKEN, HOST, API_KEY } = require('./config.json');
const fs = require('fs');
const nodeactyl = require('nodeactyl-v1-support');
const discord = require('discord.js');
const application = nodeactyl.Application;
const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

console.log('Starting the bot...');
client.login(DISCORD_TOKEN);

application.login(HOST, API_KEY, (logged_in, msg) => {
    console.log('Pterodactyl log in status: ' + logged_in);
});

for (const file of commandFiles) {
    console.log('Loading ' + file);
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.oneArg && args.length > 1) {
        return message.channel.send(
            `You have provided too many arguments, ${message.author}!`
        );
    }

    try {
        command.execute(message, args, PREFIX);
    } catch (error) {
        message.reply('There was an error trying to execute that command!');
        console.error(error);
    }
});
