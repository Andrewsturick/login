'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var User;

var userSchema = Schema({
  username : {type: String, required: true, unique: true},
  password : {type: String , required: true},
  image: {type: String}
})

userSchema.statics.register = function(user, cb){
  var username = user.username;
  var password = user.password;
  User.findOne({username: username}, function(err, user){
    if(err || user) return cb(err ||'user already exists!!');
    bcrypt.genSalt(13, function(err1, salt){
      bcrypt.hash(password, salt, function(err2, hash){
          if(err1 || err2) return cb(err1 || err2);
          var newUser = new User();
          newUser.username = username;
          newUser.password = hash;
          newUser.save(function(err, savedUser){
            savedUser.password = null;
            cb(null, savedUser);
        })
      })
    })
  })
}

userSchema.statics.authenticate = function(user, cb){
  User.findOne({username: user.username}, function(err, registeredUser){
    if(err || !registeredUser) return cb(err || 'incorrect username or password!')
    bcrypt.compare(user.password, registeredUser.password, function(err, isUser){
      if(err|| !isUser){return cb(err || 'incorrect username or password!')}
      registeredUser.password = null;
      cb(null, registeredUser);
    })
  })


}



User = mongoose.model('User', userSchema);

module.exports = User;
