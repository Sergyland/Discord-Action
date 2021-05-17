const core = require('@actions/core');
const github = require('@actions/github');
const Discord = require("discord.js");
//const getUserInfo = require("./github/getuserinfo");

const client = new Discord.Client();

const context = github.context;
//const octokit = github.getOctokit(core.getInput('githubToken'));

const payload = JSON.stringify(context.payload);

client.on('ready', async () => {
    console.log("Payload", payload)
    console.log(`Logged in as ${client.user.tag}!`);
  /* TODO : Add bot activity

  */
    try {
        console.log("Starting to fetch channel")
        client.channels.fetch(core.getInput("channel"))
        .then((channel) => channel.send(payload))
        .then(() => console.log("Message sent")) 
    } catch(e) {
        console.error("An error occured during message sending.")
    }
    process.exit(0)
});

client.login(core.getInput("discordToken"))