var express = require('express');
var router = express.Router();


// set up the RESTful API, handler methods are defined in api.js
var api = require('../api/api.js');
router.get('/new', api.newThread);
router.get('/show/:user/:title.:format?', api.show);
router.get('/list', api.list);

module.exports = router;
