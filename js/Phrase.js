/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

/**
 * displays phrase on gamne board
 * each letter is presented by an empty box, one li for each
 */
  addPhraseToDisplay () {
    const phraseUL = document.querySelector('#phrase').firstElementChild
    for (let i = 0; i < this.phrase.length; i++) {
      const character = this.phrase[i]
      const space = '<li class="space"> </li>'
      const letter = `<li class="hide letter ${character}">${character}</li>`
      if (character === ' ') {
        phraseUL.innerHTML += space
      } else {
        phraseUL.innerHTML += letter
      }
    }
  }

// checks if passed letter is in phrase
  checkLetter (letter) {
    if (this.phrase.includes(letter)) {
      return true
    } else {
      return false
    }
  }

/** 
 * displays the passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 * -loops though all letters in phrase
 * -if match, class change to show
 * -allows all matched letters to be displayed
*/
  showMatchedLetter (letter) {
    const letterList = document.querySelector('#phrase').firstElementChild.children

    for (let i = 0; i < letterList.length; i++) {
      if (letterList[i].textContent === letter) {
        letterList[i].classList.replace('hide', 'show')
      }
    }
  }
}
