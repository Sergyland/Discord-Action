const core = require('@actions/core');
const Discord = require("discord.js");

const client = new Discord.Client();
client.login(core.getInput("token"))

// most @actions toolkit packages have async methods
async function run() {
  try {
    const botchannel = await client.channels.fetch(core.getInput("channel"));
    botchannel.send("Sent from github!");
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1)
  }
}

run();
