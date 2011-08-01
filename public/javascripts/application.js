// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var Shutl = {};

Shutl.closeMessages = function(){
  $('.success').fadeOut('slow');
};

Shutl.deleteTask = function(){
  ich.grabTemplates();
  var elem = $('.delete_task');
  var link = elem.closest('form').attr('action');
  elem.closest('form').remove();

  var stuff = {
    link:link
  };

  var delete_task_link = ich.template_delete_link(stuff);
  $('td.delete_link').html(delete_task_link);

  $('.delete_me').bind('ajax:success', function(){
    $(this).closest('tr').fadeOut();
  });
}

$(document).ready(function(){
  Shutl.deleteTask();
  setTimeout('Shutl.closeMessages()', 1000);
  ich.grabTemplates();

  $('.hide_with_js').hide();

  var new_task_form = ich.template_new_task;
  $('#new_task').html(new_task_form);

});
