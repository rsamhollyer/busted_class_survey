'use strict';

const http = require('http');
const app = require("express")();
const rootController = require('./routes/index');
const es6Renderer = require('express-es6-template-engine');
const server = http.createServer(app);
const hostname = '127.0.0.1';
const port = 3000;

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(rootController)

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});



