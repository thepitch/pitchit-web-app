$(document).ready(function(){

  $(document).on("click", "a.header-login-link", function(e){
    e.preventDefault();
    $(this).hide();
    $(".login-form-div").show();
  });


//   $("header").on("submit", "#header-login-form", function(event){
//     event.preventDefault();
//     var action = 'http://pitchitbackend.herokuapp.com/users/login';
//     var method = $(this).attr("method");
//     var data = $(this).serialize();
//     var currentUrl = document.URL
//     $.ajax({
//       url: action,
//       method: method,
//       dataType: 'json',
//       data: data
//     })
//     .done(function(response){
//       console.log("HIT")
//       window.location.replace("/users/" + response.id)
//     });
//   });

  $(".exit-login").click(function(event){
    $("#header-login-form").hide();
    $(".header-login-link").show();
  });


});
