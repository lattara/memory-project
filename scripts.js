const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;
const double = 2;
/*
const cards = document.getElementsByClassName('memory-card');
let firstCard;

function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
*/

const back = 'images/backface.jpg';

const images = [
  'images/Kenny.png',
  'images/Cartman.png',
  'images/Kyle.png',
  'images/Stan.png',
  'images/Timmy.png',
  'images/Wendy.png',
]

const cartesIndex = [];
const backIndex = [];

let imagesElt = document.getElementById('memory-game');

for(let i = 0; i < images.length; i++) {
  for(let j = 0; j < 2; j++) {
    imagesElt.innerHTML += `<img src="${back}" style="display: block" id="back-${[i + 1]}"/>`;
    imagesElt.innerHTML += `<img src="${images[i]}" style="display: none" id="card-${[i + 1]}""/>`;
  };
  backIndex[i] = document.getElementById(`back-${[i + 1]}`);
  cartesIndex[i] = document.getElementById(`card-${[i + 1]}`);
};

console.log(cartesIndex);
console.log(backIndex);



function displayCard() {
  location.reload();
};




>>>>>>> dev
