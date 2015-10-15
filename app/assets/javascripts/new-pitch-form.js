$(document).ready(function(){
  $("#new-pitch-form input, #new-pitch-form textarea").on("focus", function(event){
    event.preventDefault();
    $(this).parent().next().show();
  });

  $("#new-pitch-form input, #new-pitch-form textarea").on("blur", function(event){
    event.preventDefault();
    $(this).parent().next().hide();
  });

});