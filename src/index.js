const core = require('@actions/core');
const github = require('@actions/github');
const Discord = require("discord.js");
const getUserInfo = require("./github/getuserinfo");

const client = new Discord.Client();
var botchannel;

const context = github.context;
const octokit = github.getOctokit(core.getInput('githubToken'));

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
    const payload = context.payload;
    try {
        var embedMessage = new Discord.MessageEmbed()
            .setTitle('New action occured!')
            .addField('Is this bot ready?', 'Absolutly not!', true);
        embedMessage = await getUserInfo(octokit, embedMessage)
        let message = await botchannel.send(embedMessage);
        console.log("Sent message ",message)
        //message = await message.react('\:white_check_mark:')
        //console.log("Reacted to message! ",message)
    } catch(e) {
        console.error("An error occured during message sending.")
    }
    process.exit(0)
});

client.login(core.getInput("discordToken"))