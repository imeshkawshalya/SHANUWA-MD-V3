const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iM5AibSZ#xGg06YjoGzJXbr0i7z_hiw5Ztz65EeKn3W2IHZVNprg",  //session id dhan
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/2qD0Syx/6648.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94774609569",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false"
};

