const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const Client = new Discord.Client
({
    intents:
    [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on("ready", () => { console.log("The bot is online"); });
Client.on("messageCreate", (message) =>
{
    if(message.content == "ping")
    {
        message.channel.send("Pong!");
    }
})
Client.login(process.env.TOKEN);