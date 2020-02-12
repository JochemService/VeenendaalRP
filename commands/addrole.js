const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    message.delete(); 

    var role = member.guild.roles.find("name", "🏡 Bezoeker VeenendaalRP");

    member.addRole(role);

}

module.exports.help = {
    name: "VeenendaalRP"
}