'use strict';


$(document).ready(init);

function init(){
  $('#logout').on('click', logout)
}


function logout(e){
  e.preventDefault();
  $.post('/users/logout')
  .done(window.location.replace('/'));

}
