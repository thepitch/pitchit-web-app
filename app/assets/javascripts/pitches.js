$(document).on("ready", function(){
  console.log("ready swag")
  $('div.pitch_list').on("click", '.show-video-button', embedVideo)
  $('div.pitch_list').on("click", '.hide-video-button', hideVideo)
  // $('.sort_type a').on("click", sortHot)
})

var sortHot = function(e){
  e.preventDefault();
  var data = {sort_type: $(this).attr("id")}
  console.log(data);
  $.ajax({
    url: 'http://localhost:3000/pitches?sort_type=' + data.sort_type,
    data: data,
    dataType: "json"
  }).done(function(response){
    console.log(response)
    $('ul').html(response)
  })
}


var embedVideo = function(event){
  console.log("lets embed")
  event.preventDefault()
  var id = $(this).parent().parent().attr("id")
  var url = "/pitches/" + id
  $('div#'+ id + ' .hide-video-button').show()
  $(this).hide()
  $.getJSON(url, function(pitchData){
    console.log(pitchData)
    $('div#' + id + '-video').html('<iframe width="560" height="315" src=' + pitchData + ' frameborder="0" allowfullscreen></iframe>')
  })
}

var hideVideo = function(event){
  console.log("let's not embed")
  event.preventDefault()
  $(this).hide()
  $('.show-video-button').show()
  $('iframe').remove()
}

