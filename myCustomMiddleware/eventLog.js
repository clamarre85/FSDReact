const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const eventLogs = async (myMessage, logName) => {
    const dateTime = format(new Date(), 'MM/dd/yyyy HH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${myMessage}\n`;

    try {
        const logDir = path.join(__dirname, '..', 'mylogs');
        if (!fs.existsSync(logDir)) {
            await fsPromises.mkdir(logDir);
        }

        await fsPromises.appendFile(path.join(logDir, logName), logItem);
    } catch (err) {
        console.error('Error writing to log file:', err);
    }
};

const logger = (req, res, next) => {
    const logMessage = `${req.method}\t${req.headers.origin}\t${req.url}`;
    eventLogs(logMessage, 'myreqLog.txt');
    console.log(logMessage); // Optional: Log to console as well
    next();
};

module.exports = { logger, eventLogs };
