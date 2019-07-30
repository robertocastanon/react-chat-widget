const express = require('express');
const axios = require('axios');
const app = express();

// enter CometChat Pro configurations here
const appID = '{appID}';
const apiKey = '{apiKey}';
const agentUID = '{agentUID}';

const url = 'https://api.cometchat.com/v1';

const headers = {
  'Content-Type': 'application/json',
  appid: appID,
  apikey: apiKey,
};