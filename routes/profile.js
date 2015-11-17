'use strict';

var express = require('express');
var router = express.Router();

var authware = require('../config/auth');


router.get('/', authware, function(req, res){
  res.render('profile', {title: 'Create Profile'})
})


module.exports = router;
