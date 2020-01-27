const qs = require('qs');
const axios = require('axios');

module.exports = (message) => {
  const authString = `Bearer ${process.env.SLACK_CHANNEL}`;
  const url = 'https://slack.com/api/chat.postMessage';

  const options = {
    method: 'POST',
    headers: {
      Authorization: authString,
      'content-type': 'application/json',
    },
    data: qs.stringify({
      channel: process.env.SLACK_CHANNEL,
      text: message,
      username: process.env.SLACK_USERNAME,
      pretty: 1,
    }),
    url,
  };

  try {
    axios(options);
  } catch (e) {
    
  }
};
