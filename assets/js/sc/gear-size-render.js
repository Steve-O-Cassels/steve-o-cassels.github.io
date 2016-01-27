var render;

$(function() {
  $('select').change(function() {
    render();
  });
});

render = function() {
  var calculator, cassette, chainRings, clone, data, gearSizes, headingRow, i, rimDiameter, ring, sizeRow, sprocket, template, tyreSize, x, y;
  calculator = new GearSize.Calculator;
  rimDiameter = $('#rim-diameter').val();
  rimDiameter = parseInt(rimDiameter, 10);
  tyreSize = $('#tyre-size').val();
  tyreSize = parseInt(tyreSize, 10);
  chainRings = (function() {
    var j, len, ref, results;
    ref = $('#chainring').val().split(',');
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      ring = ref[j];
      results.push(parseInt(ring, 10));
    }
    return results;
  })();
  cassette = (function() {
    var j, len, ref, results;
    ref = $('#cassette').val().split(',');
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      sprocket = ref[j];
      results.push(parseInt(sprocket, 10));
    }
    return results;
  })();
  gearSizes = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tyreSize);
  template = document.querySelector('#gear-size');
  i = 0;
  while (i < gearSizes.length) {
    data = gearSizes[i];
    if (i === 0) {
      clone = template.content.cloneNode(true);
      headingRow = clone.querySelectorAll('td');
      x = 0;
      while (x < data.length) {
        headingRow[x + 1].textContent = data[x].sprocket;
        x += 1;
      }
      template.parentNode.appendChild(clone);
    }
    clone = template.content.cloneNode(true);
    sizeRow = clone.querySelectorAll('td');
    sizeRow[0].textContent = data[0].chainRing;
    y = 0;
    while (y < data.length) {
      sizeRow[y + 1].textContent = data[y].gearSize;
      y += 1;
    }
    template.parentNode.appendChild(clone);
    i += 1;
  }
};
