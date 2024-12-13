# Bugcrowd POC by @nvk0x
Twilio POC by @nvk0x

# Twilio Flex Sample Backend

This project provides a demo backend for Twilio Flex. It supports various plugins such as outbound dialing and real-time statistics dashboards.

## Features
- Outbound dialing
- Real-time statistics dashboard
- WebSocket authentication

## Setup

### Deploy to Heroku
Click the button below to deploy the backend to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jhunter-twilio/twilio-flex-sample-backend/tree/master)

### Environment Variables
Populate the following variables during deployment:

- `TWILIO_OUTBOUND_WORKFLOW_SID`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FLEX_WORKSPACE_SID`
- `EXTERNAL_HOST`

## Local Deployment
1. Clone this repository:  
   ```bash
   git clone https://github.com/jhunter-twilio/twilio-flex-sample-backend.git

