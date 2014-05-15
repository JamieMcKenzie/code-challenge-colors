// This can be used to restore saved settings.

// var colors = ['red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red', 'blue', 'white', 'red']
// $('#save').on('click', function(e){
//     e.preventDefault();
//     $('li').each(function(index){
//       $('li:nth-child(' + index + ')').css("background-color", colors[index])
//     })
//   });
function Collection(){
  colorSets = [];
}

Collection.prototype = {
  addColorSet: function(colorSet){
    this.colorSets.push(colorSet);
  }
}

function ColorSet(name){
  this.name = name;
  this.colors = [];
}

ColorSet.prototype = {
  addColor: function(color) {
    this.colors.push(color);
  }
}

$(document).ready(function() {
  $('#clear').on('click', function(e){
    e.preventDefault();
    $("li:nth-child(n)").css("background-color", 'white');
  });

  $('#save').on('click', function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/save',
      dataType: 'JSON',
      success: function(data){
        console.log(data);
        // var data.name = new ColorSet(data.name)
      }
    })
    // new ColorSet("pickle");
    // $('li').each(function(index){
    //   pickle.colors.push($('li:nth-child(' + index + ')').css("background-color"));
    // })
    // console.log(pickle.name, pickle.colors);
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


