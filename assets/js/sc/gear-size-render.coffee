$ ->
  renderGearSizes()
  $('select').change ->
    renderGearSizes()
    return
  return

renderGearSizes = ->
  calculator = new (GearSize.Calculator)
  rimDiameter = $('#rim-diameter').val()
  rimDiameter = parseInt(rimDiameter, 10)
  tyreSize = $('#tyre-size').val()
  tyreSize = parseInt(tyreSize, 10)

  chainRings = (parseInt ring, 10 for ring in $('#chainring').val().split(','))
  cassette = (parseInt sprocket, 10 for sprocket in $('#cassette').val().split(','))

  gearSizes = calculator.generateGearSizesInInches(chainRings, cassette, rimDiameter, tyreSize)
  template = document.querySelector('#gear-size')
  i = 0
  while i < gearSizes.length
    data = gearSizes[i]
    if i == 0
      clone = template.content.cloneNode(true)
      headingRow = clone.querySelectorAll('td')
      x = 0
      while x < data.length
        headingRow[x + 1].textContent = data[x].sprocket
        x += 1
      template.parentNode.appendChild clone
    clone = template.content.cloneNode(true)
    sizeRow = clone.querySelectorAll('td')
    sizeRow[0].textContent = data[0].chainRing
    y = 0
    while y < data.length
      sizeRow[y + 1].textContent = data[y].gearSize
      sizeRow[y + 1].title = data[y].toString()
      y += 1
    template.parentNode.appendChild clone
    i += 1
  return
