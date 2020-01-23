//var heapdump = require('heapdump');
const router = require('express').Router();

router.get('/heapdump', (req, res, next) => {
    logger.info(`About to generate headump`);
    heapdump.writeSnapshot(function (err, filename) {
        console.log('headump file is ready to be sent to the caller', filename);
        fs.readFile(filename, "utf-8", function (err, data) {
            res.end(data);
        });
    });
});

module.exports = router;