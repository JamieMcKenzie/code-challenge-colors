$(document).ready(function() {
  $('#clear').on('click', function(e){
    e.preventDefault();
    $("li:nth-child(n)").css("background-color", 'white');
  });

  $('li').on('click', function(e){
    e.preventDefault();
    $(this).css("background-color", "blue");
  });
});
