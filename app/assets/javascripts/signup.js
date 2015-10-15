$(document).ready(function(){
  $(".header-signup-link").click(function(event){
    event.preventDefault();
    console.log("Fade city")
    fadeInSignUp();
  }); 


  $(".overlay").click(function(event){
    event.preventDefault();
    fadeOutSignUp();
  });

  $(".exit-signup").click(function(event){
    event.preventDefault();
    fadeOutSignUp();
  });
});

var fadeInSignUp = function(){
  $(".overlay").fadeIn("fast");
  $(".sign-up-box").fadeIn("fast");
}

var fadeOutSignUp = function(){
  $(".sign-up-box").fadeOut("fast");
  $(".overlay").fadeOut("fast");
}