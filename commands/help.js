module.exports = {
    name: 'help',
    oneArg: true,
    description: 'Help',
    execute(message, args, PREFIX) {
        if (args == 'server') {
            message.channel.send('Help server!'); // Call to function to help server
        } else if (args == 'user') {
            message.channel.send('Help user!'); // Call to function to help user
        } else {
            message.channel.send(
                `Commands to use are:\n${PREFIX}help server\n${PREFIX}help user`
            ); // Default answer
        }
    },
};
