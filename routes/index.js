'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('home', {title: 'Rooftop Trading: a financial playground for traders'})
});

router.get('/register', function(req, res){
  res.render('register', {title: 'Become a Member!'})
});

router.get('/login', function(req, res){
  res.render('login', {title: 'Please enter your login information!'})
});

module.exports = router;
