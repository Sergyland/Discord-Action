const core = require('@actions/core');
const Discord = require("discord.js");

const channelId = core.getInput("channel");
const token = core.getInput("channel");

const client = new Discord.Client();
client.login(token);

// most @actions toolkit packages have async methods
async function run() {
  
  try {
    const botchannel = await client.channels.fetch(channelId);
    core.info(`Connected to channel!`);
    botchannel.send("Sent from github!");
    botchannel.send(process.env);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
