const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, printf, colorize } = format;
require("winston-mongodb")

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] (${level}): ${message}`;
});

const logger = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        colorize(), 
        myFormat,
        ///// json bo'lishi uchun
        // prettyPrint(),
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: "./log/all-log.log"}),
        new transports.MongoDB({db: process.env.MONGO_URL})
    ]
})
   
module.exports = logger