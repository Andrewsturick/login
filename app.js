'use strict';

//sets port
var PORT = process.env.PORT || 3000;


//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
// var md5 = require('./md5')

//mongo db connection
var mongoUrl = process.env.MONGOLAB_URI|| 'mongodb://localhost/userauth'

var mongoose = require('mongoose');
mongoose.connect(mongoUrl, function(err){
  if(err) console.log('error: ',  err)
  console.log('connected to mongoURL: ', mongoUrl);
})


var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/profile', require('./routes/profile'));

app.listen(PORT, function(){
    console.log('listening to port: ', PORT);
})
