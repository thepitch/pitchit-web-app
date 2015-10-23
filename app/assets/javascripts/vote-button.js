$(document).ready(function(){
  var isLoggedIn = $("body").hasClass("user-logged-in");
  //TODO: don't use "a" because it's too aggressive.  Find a
  // more specific selector
  $(".container").on("click",".pitch-vote-up",function(){

    //do ajax call here
    // do dom manipulation ot update the vote count
    // url: e.target.parentElement.href
    var votableId = $(this).attr('id').replace("-vote-up","");
    var votableType = "Pitch";
    var userId = $('body').attr('id')

    if(isLoggedIn){
      if(!$(this).hasClass("user-has-voted")){
        $(this).addClass("user-has-voted");
        var data = {votable_id: votableId, votable_type: votableType, user_id: userId}
        $.ajax({
          url: 'http://pitchitbackend.herokuapp.com/votes',
          method: 'POST',
          dataType: 'json',
          data: data
        })
        .done(function(response){
          if($(".main-header").hasClass("pitch-show-header")){
            $(".main-header").find(".pitch-vote-count").html(response.newVoteNum)
          } else {
            console.log("Pitch index page");
            $("#" + response.pitchId + "-vote-count").html(response.newVoteNum)

          }
        });
      }
    } else {
      alert("Please log in or sign up to vote.");
    }
  });



});
