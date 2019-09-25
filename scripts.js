const cards = document.querySelectorAll('.memory-card');
let firstCard;


function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));

