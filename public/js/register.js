'use strict';


$(document).ready(init)


function init(){
  $('#Register').on('click', registerUser)
}

function registerUser(e){
  e.preventDefault();
  var username = $('#username').val();
  var password = $('#password').val();
  var password2 = $('#password2').val();

  if(password !== password2){
    swal('Error: ', 'Passwords Do Not Match!', 'error')
  }
  else {
      $.post('/users/register', {username: username, password: password})
      .done(function(data){
      window.location.replace('/login');
      })
      .fail(function(err){
        swal('Error:', err, 'error');
      });
    }
}
