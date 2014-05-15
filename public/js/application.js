$(document).ready(function() {
  $('#clear').on('click', function(e){
    e.preventDefault();
    $("li:nth-child(n)").css("background-color", 'white');
  });

  $('li').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    $.ajax({
      type: 'POST',
      url: '/color',
      dataType: 'JSON',
      success: function(data){
        $this.css("background-color", data.color);
      }
    });
  });
});
