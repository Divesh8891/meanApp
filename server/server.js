var global = require('./global.js')
const express = global.express;
const http = global.http;
const app = express();
const db = require('./db/db');
const port = process.env.PORT || global.port;
const server = http.createServer(app);

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    next();
});
app.use('/db', db);
app.set('port', port);
server.listen(port, () => console.log(`API running on localhost:${port}`));

