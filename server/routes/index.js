/**
 * Main application routes
 */

'use strict';
var express = require('express');
var router = express.Router();

router.get('/main', function(req, res) {
  console.log("heeee")
  res.send('Hi my dear!');
});

module.exports = router;