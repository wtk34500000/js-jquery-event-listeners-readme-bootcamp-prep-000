//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt(){
  $('input').on('keydown', function(){
    if($('input.value')===)
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
});
