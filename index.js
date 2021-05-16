const core = require('@actions/core');
const Discord = require("discord.js");

const client = new Discord.Client();
client.login(core.getInput("token"))
var botchannel;

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  /* TODO : Add bot activity

  */
    try {
        botchannel = await client.channels.fetch(core.getInput("channel"))
    } catch(e) {
        console.error("An error occured during channel access atempt.",e)
    }
    console.log("Connected to channel!");
    try {
        botchannel.send("Sent from github!")
    } catch(e) {
        console.error("An error occured during message sending.")
    }
    process.exit(0)
});
