var express = require('express');
var app = express();
var fs = require('fs');
app.use('/', express.static(__dirname + '/'))
app.get('/data', function (req, res) {
   res.send(data);
});
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.listen(9009, function () {
console.log("Listening on 9009");
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
});
