module.exports = {

    port: 56,
    express: require('express'),
    http: require('http'),

    MongoClient: require('mongodb').MongoClient,
    ObjectID: require('mongodb').ObjectID,
    dbLink: 'mongodb://localhost:27017/allData',

}