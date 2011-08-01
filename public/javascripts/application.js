// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var Shutl = {};

Shutl.closeMessages = function(){
  $('.success').fadeOut('slow');
};

Shutl.deleteTask = function(){
  $('.delete_task').bind('ajax:success', function(){
    var len = $(this).closest('table').find('tr').length;
    $(this).closest('tr').fadeOut(300, function(){
      $(this).remove();
    });
    if(len == 1){
      $('h1').after('<p>No tasks</p>');
    }
  });
}

$(document).ready(function(){
  Shutl.deleteTask();
  setTimeout('Shutl.closeMessages()', 1000);
  ich.grabTemplates();

  $('.hide_with_js').hide();
  $('.show_with_js').show();

  var new_task_form = ich.template_new_task;
  $('#new_task').html(new_task_form);
});
