const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "VAJIRA-MD=rE00FSKA#YdxxGwLlh1h8aFDQTEFgIgw4L-n00azAxWLQf2Omeq8",
MONGODB: process.env.MONGODB || "",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
