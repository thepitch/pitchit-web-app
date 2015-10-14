$(document).ready(function(){
  $('div.pitch_list').on("click", '.show-video-button', embedVideo)
  $('div.pitch_list').on("click", '#hide', hideVideo)
  $('.sort_type a').on("click", sortHot)
})

var sortHot = function(e){
  e.preventDefault()
  var data = {sort_type: $(this).attr("id")}
  console.log(data);
  $.ajax({
    url: '/pitches',
    data: data,
    dataType: "html"
  }).done(function(response){
    // console.log(response)
    $('ul').html(response)
  })
}


var embedVideo = function(e){
  e.preventDefault()
  var id = $(this).parent().parent().attr("id")
  var url = "/pitches/" + id
  $('div#'+ id + ' .hide-video-button').show()
  $(this).hide()
  console.log(url)
  $.get(url, function(data){
    console.log(data)
    $('div#' + id + '-video').html('<iframe width="560" height="315" src=' + data + 'frameborder="0" allowfullscreen></iframe>')
  })
}

var hideVideo = function(e){
  e.preventDefault()
  $(this).hide()
  $('.show-video-button').show()
  $('iframe').remove()
}

