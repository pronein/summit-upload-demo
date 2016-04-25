var express = require('express');
var server = express();

/*
 * Setup View Engine (EJS)
 */
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static('client'));

/*
 * Setup request routes
 */
var routes = require('./routes');
server.use(routes);

/*
 * Start server on port 3000
 */
server.listen(3000, function(){
  console.log('summit-upload-demo listening on port 3000.');
});