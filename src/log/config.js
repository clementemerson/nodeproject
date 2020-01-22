const infoFileName = 'info.json';
const errorFileName = 'error.json';
const exceptionsFileName = 'exceptions.json';
const expressFileName = 'express.json';

// define the custom settings for each transport (file, console)
module.exports = {
  infoFile: {
    level: 'info',
    filename: infoFileName,
    handleExceptions: false,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  errorFile: {
    level: 'error',
    filename: errorFileName,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  exceptionsFile: {
    level: 'error',
    filename: exceptionsFileName,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  expressFile: {
    level: 'info',
    filename: expressFileName,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: false,
    json: true,
    colorize: true,
  },
};
