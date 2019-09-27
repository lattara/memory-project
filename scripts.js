const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;
const double = 2;
/*
const easy = { 
  cardsSP: [
      'images/Kenny.png',
      'images/Cartman.png',
      'images/Kyle.png',
      'images/Stan.png',
      'images/Timmy.png',
      'images/Wendy.png',
  ]
};
*/

const cardsIndex = {
  cardsImg: [
    {
      kenny: 'images/Kenny.png',
      cartman: 'images/Cartman.png',
      kyle: 'images/Kyle.png',
      stan: 'images/Stan.png',
      timmy: 'images/Timmy.png',
      wendy: 'images/Wendy.png'
    }
  ],
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

// transform the loop in a function in factorisation
function displayCard(mode) {
  cardsElt.innerHTML = "";
  for (let i = 0; i < mode; i++) {
    for (let j = 0; j < double; j++) {
      cardsElt.innerHTML += `<div class="memory-card" data-framework=""><img class="back-face" src="images/backface.jpg" alt="JS Badge" /><img class="front-face imgCard" src="${easy.cardsSP[i]}" /></div>`;
    }
  };
};
*/

// function in object
function displayCard(mode) {
  cardsElt.innerHTML = "";
  for (let i = 0; i < mode * 2; i++) {
    //for (let j = 0; j < double; j++) {
      cardsElt.innerHTML += `<div class="memory-card" onclick="flipCard()"><img class="back-face" src="images/backface.jpg" alt="JS Badge" /><img class="front-face imgCard" src="${cardsIndex.cardsImg[i]}" /></div>`;
    //}
  };
};




const cards = document.querySelectorAll('memory-card');
let firstCard;

function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));


