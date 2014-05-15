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
    var pickle = new ColorSet("pickle");
    $('li').each(function(index){
      pickle.colors.push($('li:nth-child(' + index + ')').css("background-color"));
    })
    console.log(pickle.name, pickle.colors);
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


