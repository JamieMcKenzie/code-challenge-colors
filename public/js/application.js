var colors = ['red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red']

// for (var i = 0; i < colors.size; i++){
//   $("li:nth-child(i)").css("background-color", colors[i]);
// }

$(document).ready(function() {
  $('#clear').on('click', function(e){
    e.preventDefault();
    $("li:nth-child(n)").css("background-color", 'white');
  });

  $('#save').on('click', function(e){
    e.preventDefault();
    $('li').each(function(index){
      $('li:nth-child(' + index + ')').css("background-color", colors[index])
    })
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


