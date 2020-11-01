module.exports = {
    name: 'create',
    oneArg: true,
    description: 'Create things',
    execute(message, args) {
        const firstArg = args[0].toLowerCase();
        if (firstArg == 'server') {
            message.channel.send('Create server!'); // Call to function to create server
        } else if (firstArg == 'user') {
            message.channel.send('Create user!'); // Call to function to create user
        }
    },
};
