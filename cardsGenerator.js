const easyMode = 4;
const easyMedium = 6;
const easyHard = 8;
const double = 2;
const triple = 3;

const easy = { 
  cards: [
      'images/Kenny.png',
      'images/Cartman.png',
      'images/Kyle.png',
      'images/Stan.png',
      'images/Timmy.png',
      'images/Wendy.png',
  ]
};

const cardsElt = document.getElementById('memory-game');

/* // boucle de base
for (let i = 0; i < easyMode; i++) {
  for (let j = 0; j < double; j++) {
    cardsElt.innerHTML += `<img src="${easy.cards[i]}" />`;
  }
};

function displayCard() {
  alert('le bouton marche !!!')
};
*/

function displayCard() {
  for (let i = 0; i < easyMode; i++) {
    for (let j = 0; j < double; j++) {
      cardsElt.innerHTML += `<div class="memory-card" data-framework=""><img class="back-face" src="https://via.placeholder.com/150x150" alt="JS Badge" /><img class="front-face imgCard" src="${easy.cards[i]}" /></div>`;
    }
  };
};

const cards = document.getElementsByClassName('memory-card');
let firstCard;

function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));


