$(document).ready(function() {
  $('#clear').on('click', function(e){
    e.preventDefault();
    $("li:nth-child(n)").css("background-color", 'white');
  });

  $('li:nth-child(n)').on('click', function(e){
    $("li:nth-child(n)").css("background-color", "blue");
  });
});
