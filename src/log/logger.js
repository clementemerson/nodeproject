const { format, transports, createLogger } = require('winston');

const { combine, timestamp, printf } = format;
const httpContext = require('express-http-context');

const options = require('./config');

const myFormat = printf((allMessage) => JSON.stringify({
  ...allMessage,
  reqid: httpContext.get('reqId'),
}));

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    myFormat, // json(),
  ),
  transports: [
    new transports.File(options.infoFile),
    new transports.File(options.errorFile),
  ],
  exceptionHandlers: [
    new transports.File(options.exceptionsFile),
  ],
  exitOnError: true,
});

// If we're not in production then log to the `console` with the format:
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console(options.console));
}

module.exports = logger;
