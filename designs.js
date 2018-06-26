// Select color input
// Select size input

var heightInput = $('#inputHeight');
var weightInput = $('#inputWeight');
var colorInput = $('#colorPicker');

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    
  heightValue = heightInput.val();
  weightValue = weightInput.val();
  pixelCanvas = $('#pixelCanvas');
  pixelCanvas.children().remove();

  for (var h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (var w = 0; w < weightValue; w++) {
    $('tr').append("<td></td>");
  }
}

$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault();
    makeGrid();
});