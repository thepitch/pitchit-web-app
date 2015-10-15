$(document).ready(function(){
  $(".header-signup-link").click(function(event){
    event.preventDefault();
    console.log("Fade city")
    fadeInSignUp();
  });
  $("body").on("submit", '#header-signup-form', sendUserInfo)

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

var sendUserInfo = function(e){
  e.preventDefault()
  // console.log("HIT!")
  var data = $(this).serialize()
  var url = 'http://localhost:3000/users'
  var method = $(this).attr("method")
  $.ajax({
    url: url,
    data: data,
    method: "post",
    dataType: "json"
  }).done(function(reseponse){
    console.log(response)

  })
}
