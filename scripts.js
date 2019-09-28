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
];






let imagesElt = document.getElementById('memory-game');

for(let i = 0; i < images.length; i++) {
    imagesElt.innerHTML += `<img onclick="onCardClicked('${[i]}')" src="${back}" style="display: block" id="back-${[i]}"/>`;
    imagesElt.innerHTML += `<img src="${images[i]}" style="display: none" id="card-${[i]}"/>`;
  };

// fonction permettant le retournement des cartes : en fonction de l'index [i], 
// on stock dans les variables backElmnt et frontElmnt le lien de ciblage du recto et du verso des cartes
// Enfin, on modifie le CSS

function onCardClicked ([i]) {
  let backElmnt = document.getElementById (`back-${[i]}`);
  let frontElmnt = document.getElementById (`card-${[i]}`);
  backElmnt.style.display = 'none';
  frontElmnt.style.display = 'block';
}


function displayCard() {
  location.reload();
};




