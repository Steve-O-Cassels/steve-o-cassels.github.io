$(function() {
  $( "select" )
    .change(function () {
      render();
    })
});

var render = function()
{
  var calculator = new GearSize.Calculator();
  var rimDiameter = 622
  var tyreSize = 28

  var chainRings = $('#chainring').val().split(',');
  for (n in chainRings ) {
    chainRings[n] = parseInt(chainRings[n], 10);
  }
  var cassette =  $('#cassette').val().split(',');
  for (n in cassette ) {
    cassette[n] = parseInt(cassette[n], 10);
  }

  var gearSizes = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tyreSize);

  var template = document.querySelector('#gear-size');
  for (var i = 0; i < gearSizes.length; i += 1) {
    var data = gearSizes[i];
    if(i === 0){
      var clone = template.content.cloneNode(true);
      var headingRow = clone.querySelectorAll('td');
      for (var x = 0; x < data.length; x += 1) {
        headingRow[x + 1].textContent = data[x].sprocket;
      }
      template.parentNode.appendChild(clone);
    }
    clone = template.content.cloneNode(true);
    var sizeRow = clone.querySelectorAll('td');
    sizeRow[0].textContent = data[0].chainRing;
    for (var y = 0; y < data.length; y += 1) {
      sizeRow[y + 1].textContent = data[y].gearSize;
    }
    template.parentNode.appendChild(clone);
  };
}
