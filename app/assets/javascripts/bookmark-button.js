$(document).ready(function(){
  var isLoggedIn = $("body").hasClass("user-logged-in");

  $(".container").on("click", ".pitch-bookmark", function(){

    var votableId = $(this).attr('id').replace("-bookmark","");
    var votableType = "Pitch";

    if (isLoggedIn) { 
      $(this).toggleClass("user-has-bookmarked");
      $.ajax({
        url: '/votes',
        method: 'POST',
        dataType: 'json',
        data: {votable_id: votableId, votable_type: votableType, bookmarked: true}
      })
      .done(function(response){
        if (response.voteCreated) {
          

          if($(".main-header").hasClass("pitch-show-header")){
            console.log("Pitch show page");
            $(".main-header").find(".pitch-vote-up").addClass("user-has-voted");
            $(".main-header").find(".pitch-vote-count").html(response.newVoteNum)
          } else {
            console.log("Pitch index page");
            $("#" + response.pitchId + "-vote-up").addClass("user-has-voted");
            $("#" + response.pitchId + "-vote-count").html(response.newVoteNum + " votes")
          }
        }

      });
    } else {
      alert("Please log in or sign up to bookmark.");
    } 


  });
})