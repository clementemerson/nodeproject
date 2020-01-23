const express = require('express');
const httpContext = require('express-http-context');
const helmet = require('helmet')

const logger = require('./log/logger');
const expressLog = require('./log/express-logger');
const addReqId = require('./middlewares/add-reqid');
const terminate = require('./terminate')

// Routes
const loginRoutes = require('./routes/login');
const maintenanceRoutes = require('./routes/maintenance');
const healthRoutes = require('./routes/health');

const app = express();
app.use(helmet())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

//To shutdown the node properly
const exitHandler = terminate(app, {
  coredump: false,
  timeout: 500
})

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
process.on('SIGINT', exitHandler(0, 'SIGINT'))

// Middlewares
app.use(expressLog);
app.use(httpContext.middleware);
app.use(addReqId);

app.use('/login', loginRoutes);
app.use('/ops', maintenanceRoutes);
app.use('/_health', healthRoutes);

app.listen(3000, () => {
  logger.info('App Started');
});

const tenSecs = 10000;
const rand =  Math.floor(Math.random() * tenSecs) + tenSecs;
logger.info(rand);
setTimeout((function() {
  return process.exit();
}), rand);
