const cards = document.querySelectorAll('.memory-card');
let firstCard;

function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));


let cards= 






const cards = {
  name: 22 , 
  age: 28,
  carte: [ 
  kenny: Card1.png;
  cartman: Cartman.png;
  kyle: Kyle.png;]
};

let cardsElt = document.getElementsById('memory-card'); 

for (let i in cards.carte) {
  cardsElt.innerHTML += `<img src="${cards.carte[1]}" onclick="onCarteClicked/>`;
}

/*let avatarsElt = document.getElementById('avatars');
for (let i in user.avatars) {
  avatarsElt.innerHTML += `<img src="${user.avatars[i]}" onclick="onAvatarClicked()" />`;
}*/




/*let memory-cards = document.getElementsByClassName('memory-card');
for(let num = 0; num < 2; num++){
      memory-cards[num].style.transform = 'none';
}*/ 