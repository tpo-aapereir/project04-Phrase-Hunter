/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game
const startButton = document.getElementById('btn__reset')
const screenKeys = document.querySelectorAll('.key')

startButton.addEventListener('click', () => {
  document.querySelector('#phrase').firstElementChild.innerHTML = ''
  screenKeys.forEach(key => {key.className = 'key'})
  screenKeys.forEach(key => {key.disabled = false})
  const lives = document.querySelectorAll('.tries')
  for (let i = 0; i < 5; i++) {
    lives[i].firstElementChild.src = 'images/liveHeart.png'
  }
  game = new Game()
  game.startGame()
})

screenKeys.forEach(key => {
  key.addEventListener('click', (e) => {
    const button = e.target
    game.handleInteraction(button)
  }) 
})