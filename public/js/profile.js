'use strict';



$(document).ready(init);

function init(){
  $('#submit').on('click', makeProfile)
}


function makeProfile(e){
  e.preventDefault();
  var emailHash = md5($('#txtEmail').val());
  console.log(emailHash);
}
