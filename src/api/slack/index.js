const qs = require('qs');
const axios = require('axios');

module.exports = (message) => {
  const authString = `Bearer ${process.env.SLACK_CHANNEL}`;
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
    url: 'https://slack.com/api/chat.postMessage',
  };

  axios(options);
};
