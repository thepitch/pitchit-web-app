$(document).ready(function(){
  $(".header-signup-link").click(function(event){
    event.preventDefault();
    fadeInSignUp();
  });
  // $("body").on("submit", '#header-signup-form', sendUserInfo)

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
  var url = 'http://pitchitbackend.herokuapp.com/users'
  var method = $(this).attr("method")
  $.ajax({
    url: url,
    data: data,
    method: "post",
    dataType: "json",
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  }).done(function(response){
    $.post('/set-session', { id: response.id });
    window.location.replace("/users/"  + response.id);
  })
}
