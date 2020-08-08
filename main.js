let field = document.querySelector('#field')
let pallitre = document.querySelector('#clrs')
let input = document.querySelector('input')
let block
let blockColor
let colors = ['#FFFFFF', '#000000', '#FFFF00', '#0000FF', '#008000', '#FF0000', '#FF00FF', '#FFA500', '#FFFFFF']
let color = '#000000'
for (let i = 1; i <= colors.length; i++) {
   blockColor = document.createElement('div')
   blockColor.className = 'blockColor'
   pallitre.append(blockColor)
}

let blockColors = document.querySelectorAll('.blockColor')
for (let i = 0; i < blockColors.length; i++) {
   blockColors[i].style.backgroundColor = colors[i]
   blockColors[i].addEventListener('click', () => {
      color = colors[i]
      input.value = color
      colorBlocks()
   })
}

input.onchange = function() {
   color = input.value
}
for (let i = 1; i <= 400; i++) {
   block = document.createElement('div')
   block.className = 'block'
   field.append(block)
}
let blocks = document.querySelectorAll('.block')
function colorBlocks() {
   for (let i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener('click', () => {
         blocks[i].style.backgroundColor = color
      })
   }
}
colorBlocks()