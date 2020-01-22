const express = require('express');
const httpContext = require('express-http-context');

const logger = require('./log/logger');
const expressLog = require('./log/express-logger');
const addReqId = require('./middlewares/add-reqid');

// Routes
const loginRoutes = require('./routes/login');

const app = express();

// Middlewares
app.use(expressLog);
app.use(httpContext.middleware);
app.use(addReqId);

app.use('/login', loginRoutes);

app.listen(3000, () => {
  logger.info('App Started');
});
