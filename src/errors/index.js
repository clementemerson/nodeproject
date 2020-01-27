'use strict';
const util = require('util');
/**
 * Contains the error classes exposed by the driver.
 * @module errors
 */

/**
 * Base Error
 * @private
 */
function AppError (message) {
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.info = 'Cassandra Driver Error';
  // Explicitly set the message property as the Error.call() doesn't set the property on v8
  this.message = message;
}

util.inherits(DriverError, Error);