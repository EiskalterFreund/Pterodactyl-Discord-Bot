console.log("Starting the bot...");
const nodeactyl = require("nodeactyl-v1-support");
const discord = require("discord.js");
const node = nodeactyl.Application;
const config = require("./config.json");

application.login(config.HOST, config.API_KEY, (logged_in, msg) => {
    console.log(logged_in); // return a Boolean (true/false) if logged in.
});
