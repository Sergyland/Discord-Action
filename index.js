const core = require('@actions/core');
const Discord = require("discord.js");

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN)

// most @actions toolkit packages have async methods
async function run() {
  try {
    const botchannel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID);
    core.info(`Connected to channel!`);
    botchannel.send("Send from github!");
    botchannel.send(process.env);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
