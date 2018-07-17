var global = require('../global.js')

const express = global.express;
const router = express.Router();
const MongoClient = global.MongoClient;
// Connect
const connection = (closure) => {
    return MongoClient.connect(global.dbLink, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};
// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
const response = {
    status: 200,
    data: []
};

router.get('/allData', (req, res) => {
    connection((db) => {
        db.collection('info').find({}).toArray(function (err, result) {
            console.log("result",result)
            if (err) throw err;
            response.data = result;
            res.json(response);
            db.close();
        });
    });
});
router.get('/all', (req, res) => {
    connection((db) => {
        db.collection('data').find({}).toArray(function (err, result) {
            console.log("result",result)
            if (err) throw err;
            response.data = result;
            res.json(response);
            db.close();
        });
    });
});
module.exports = router;