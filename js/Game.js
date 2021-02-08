/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/** game class handles missed, phrases, and activePhrase 
 * initial activePhrase is set to null
*/

 class Game {
    constructor() {
        this.missed = 0
        this.phrases = [
            new Phrase('May the Force be with you'),
            new Phrase('For the Alliance'),
            new Phrase('The road goes ever on and on'),
            new Phrase('More human than human is our motto'),
            new Phrase('This is the weapon of a jedi knight'),
            new Phrase('To boldy go where no one has gone before'),
            new Phrase('The Force is strong in my family'),
            new Phrase('We named the dog Indiana'),
            new Phrase('Dont call me Junior')
        ]
        this.activePhrase = null
}

 /**
   * Begins game by selecting a random phrase and displaying it to user
   * also shows the heartContainer images
  **/

 startGame () {
    document.querySelectorAll('#phrase ul li')
      .forEach(li => li.parentNode.removeChild(li))

    for (let i = 0; i < 5; i++) {
      const heartContainer = document.querySelectorAll('li.tries img')
      heartContainer[i].src = 'images/liveHeart.png'
    }

    document.querySelectorAll('button.key').forEach(button => {
      button.disabled = false
      button.classList.remove('chosen')
      button.classList.remove('wrong')
    })

    document.querySelector('#overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  /**
  * Selects random phrase from phrases property
  * @return random Phrase object chosen to be used
  **/

  getRandomPhrase () {
    const random = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[random]
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  **/

  handleInteraction (button) {
    const isLetterInPhrase = this.activePhrase.checkLetter(button.textContent)
    button.disabled = true

    if (isLetterInPhrase) {
      button.classList.add('chosen')
      this.activePhrase.showMatchedLetter(button.textContent)
      this.checkForWin()

      if (this.checkForWin()) {
        this.gameOver('win')
      }
    } else {
      button.classList.add('wrong')
      this.removeLife()
    }
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player runs out
  **/

  removeLife () {
    const heartLoss = document.querySelectorAll('li.tries img')
    heartLoss[this.missed].src = 'images/lostHeart.png'
    this.missed++

    if (this.missed === 5) {
      this.gameOver('lose')
    }
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game was lost
  **/

  checkForWin () {
    return Array
      .from(document.querySelectorAll('#phrase ul li.letter'))
      .every(element => element.classList.contains('show'))
  }

  /**
  * Displays game over message
  * @param (string) outcome - 'win' for a win, 'lose' for a loss
  **/

 gameOver (outcome) {
    document.querySelector('#overlay').style.display = 'inherit'

    if (outcome === 'win') {
      document.querySelector('#overlay').className = 'win'
      document.querySelector('#game-over-message').textContent = 'You won the game, Congrats!'
    } else {
      document.querySelector('#overlay').className = 'lose'
      document.querySelector('#game-over-message').textContent = 'You lost the game, sorry :('
    }
  }
}