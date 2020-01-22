const { format, transports } = require('winston');
const expressWinston = require('express-winston');

const { combine, timestamp, printf } = format;
const httpContext = require('express-http-context');

const options = require('./config');

const myFormat = printf((allMessage) => JSON.stringify({
  ...allMessage,
  reqid: httpContext.get('reqId'),
}));

module.exports = expressWinston.logger({
  transports: [
    new transports.File(options.expressFile),
  ],
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    myFormat,
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
});
