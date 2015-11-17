'use strict';

$(document).ready(init);

function init(){
  $('#login').on('click', authenticateUser)

}



function authenticateUser(e){
  e.preventDefault();
  var username = $('#username').val();
  var password = $('#password').val();
  $.post('/users/login', {username: username, password: password})
  .done(function(data){
  window.location.replace('/profile');
  })
}
