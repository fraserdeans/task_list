// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function closeMessages(){
  $('.success').fadeOut('slow');
}

$(document).ready(function(){
 setTimeout('closeMessages()', 1000);
})
