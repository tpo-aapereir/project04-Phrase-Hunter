/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
const startButton = document.getElementById('btn__reset')
const screenKeys = document.querySelectorAll('.key')

startButton.addEventListener('click', () => {
  document.querySelector('#phrase').firstElementChild.innerHTML = ''
  screenKeys.forEach(key => { key.className = 'key' })
  screenKeys.forEach(key => { key.disabled = false })
  const lives = document.querySelectorAll('.tries')
  for (let i = 0; i < 5; i++) {
    lives[i].firstElementChild.src = 'images/liveHeart.png'
  }
  game = new Game()
  game.startGame()
})

// cick functionality onscreen keys
screenKeys.forEach(key => {
  key.addEventListener('click', (e) => {
    const button = e.target
    game.handleInteraction(button)
  })
})

// functionality for keyup
document.addEventListener('keyup', (e) => {
  screenKeys.forEach(button => {
    if (button.textContent === e.key) {
      game.handleInteraction(button)
    }
  })
})
