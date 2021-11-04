const board = document.querySelector('#board')
const colors = ['#F4A939', '#59359c', '#df3e15', '#22a774', '#881f57']
const SQUARES_NUMBER = 1000

for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function flashColors() {
  for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.querySelectorAll('.square')
  const index = Math.floor(Math.random() * SQUARES_NUMBER)
  setColor(square[index])
  setTimeout(() => {removeColor(square[index])}, 1000);
  }
}

const btn = document.querySelector('.btn')
let flashStart
let bool = true

btn.addEventListener('click', () => {
  if (bool) {
    flashStart = setInterval(() => {flashColors()}, 1500);
    bool = false
  } else {
    clearInterval(flashStart)
    bool = true
  }
})
