const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Informasi tentang bot", //Information about the bot
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
            .setAuthor(
              `Commands of ${client.user.username}`,
              client.config.IconURL
            )
            .setColor("#000000")
            .setFooter(
              `To get info of each command type ${
                GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
              }help [Command] | Have a nice Day Brader Wokwkowko!`
            ).setDescription(`${Commands.join("\n")}
            
            Discord Music Bot Version: 0.91 **(Beta Version)**
  [✨ Support Server](https://discord.gg/shehdSk8s3) | [GitHub](https://github.com/syihabuddin) | By [Sh3hub1337](https://github.com/syihabuddin)
  `);
  
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(message.channel, `❌ | Unable to find that command.`);

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.config.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        .setImage('https://cdn.discordapp.com/attachments/752712711556694057/865839960137007144/PicsArt_07-17-01.18.11.jpg')
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true )
         
          .setImage('https://cdn.discordapp.com/attachments/752712711556694057/865839960137007144/PicsArt_07-17-01.18.11.jpg')
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
          
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false
      },
    ],
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );
  
      let Embed = new MessageEmbed()
            .setAuthor(
              `Commands of ${client.user.username}`,
              client.config.IconURL
            )
            .setColor("#000000")
            .setFooter(
              `To get info of each command type ${
                GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
              }help [Command] | Have a nice day!`
            ).setDescription(`${Commands.join("\n")}

  Discord Music Bot Version: 0.91 **(Beta Version)**
  [✨ Support Server](https://discord.gg/shehdSk8s3) | [GitHub](https://github.com/syihabuddin) | By [Sh3hub1337](https://github.com/syihabuddin) 
  https://cdn.discordapp.com/attachments/752712711556694057/865839960137007144/PicsArt_07-17-01.18.11.jpg`);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find((x) => x.aliases && x.aliases.includes(args[0].value));
        if (!cmd)
          return client.sendTime(interaction, `❌ | Unable to find that command.`);
  
        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.config.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          .setImage('https://cdn.discordapp.com/attachments/752712711556694057/865839960137007144/PicsArt_07-17-01.18.11.jpg')
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
           
             )
             .setImage('https://cdn.discordapp.com/attachments/752712711556694057/865839960137007144/PicsArt_07-17-01.18.11.jpg')
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
            }`
          );
  
        interaction.send(embed);
      }
  },
}};
