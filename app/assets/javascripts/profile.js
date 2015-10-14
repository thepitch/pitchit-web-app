$(document).ready(function(){
  $('div.contact h4').click(showContact)
})

var showContact = function(){
  $('.contact-list').toggle()
}
