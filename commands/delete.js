module.exports = {
    name: 'delete',
    OneArg: true,
    description: 'Delete things',
    execute(message, args) {
        if (firstArg == 'server') {
            message.channel.send('Delete server!'); // Call to function to delete server
        } else if (firstArg == 'user') {
            message.channel.send('Delete user!'); // Call to function to delete user
        }
    },
};
