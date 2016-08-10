/**
 * Main application file
 */

'use strict';

const path = require('path');
const express = require('express');
const port = 3030;

// Setup server
var app = express();
var server = require('http').createServer(app);
//TODO later add chat implemented with sockets 
// var socketio = require('socket.io')(server, {
//   serveClient: (config.env === 'production') ? false : true,
//   path: '/socket.io-client'
// });
// app.set('socketio', socketio);
// require('./config/socketio')(socketio);


require('./config/express')(app);
require('./routes')(app);



// Start server
server.listen(port, function () {
  console.log('Express server listening to', port);
});

// Expose app
exports = module.exports = app;
