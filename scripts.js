const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;
const double = 2;


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
    imagesElt.innerHTML += `<img class="front" onclick=“onCardClicked(’${[i]}’)”  style="display: none" src="${back}"  id="back-${[i]}"/>`;
    imagesElt.innerHTML += `<img class="back" onclick=“onCardClicked(’${[i]}’)”  style="display: block" src="${images[i]}" id="front-${[i]}"/>`;
  };
  backIndex[i] = document.getElementById(`back-${[i]}`);
  cartesIndex[i] = document.getElementById(`card-${[i]}`);
};

console.log(cartesIndex);
console.log(backIndex);

function displayCard() {
  location.reload();
};


function onCardClicked ([i]) {
  let backElt = document.getElementById (`back-${[i]}`);
  let frontElt = document.getElementById (`front-${[i]}`);
  console.log(backElt)
  console.log(frontElt);
};