// On stocke nos images dans des tablaux.
const back = 'images/backface.jpg';
const imagesSingle = [
  'images/Kenny.png',
  'images/Cartman.png',
  'images/Kyle.png',
  'images/Stan.png',
  'images/Timmy.png',
  'images/Wendy.png',
];


// On crée un tableau "images", puis on ajoute deux fois chaque carte autant de fois qu'il y a de cartes 
// dans le tableau "imagesSingle".
let images = [];
for (let j = 0 ; j < imagesSingle.length ; j++) {
  images.push(imagesSingle[j]);
  images.push(imagesSingle[j]);
};
// Initialise la varaiable du score puis fonction a appelé pour le calcul du score. 
//Enfin pointage de la div score.
let score = 0;
function addScore() {
  return score +=1;
}
let scoreElt = document.getElementById('score');

let count = 0;
function tryCount() {
  return count += 1  ;
}
let countElt = document.getElementById('count');
// On crée une fonction pour random les cartes
function shuffle(array) {
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffle(images);

// On stocke dans imagesElmnt le lien de ciblage de la zone d'insertion des balises images
let imagesElt = document.getElementById('memory-game');


// On génére les Ids des cartes
for(let i = 0; i < images.length; i++) {
    imagesElt.innerHTML += `<img onclick="onCardClicked('${[i]}');" src="${back}" style="display: block" id="back-${[i]}" class="imgClass"/>`;
    imagesElt.innerHTML += `<img src="${images[i]}" style="display: none" id="card-${[i]}" class="imgClass" />`;
};


// On initialise le tableau qui stocke les différents identifiants (url) des images à comparer
let imgToCompare = [];

// On initialise les tableaux qui stockent les targets links (get.elementById) des cartes comparées. Ils serviront pour le retournement des cartes si différentes
let backElmntArray = [];
let frontElmntArray = [];

// On crée une constante pour sauvegarder la fonction onCardClicked => utlisée lors du else if => pour empecher de pouvoir retourner plus de deux cartes
const resetonCardClicked = onCardClicked;

// On crée la fonction basée sur l'évenement onclick="onCardClicked('${[i]}')" 
function onCardClicked (i) {
  // On stocke l'Id de la carte cliquée
  let backElmnt = document.getElementById (`back-${[i]}`);
  let frontElmnt = document.getElementById (`card-${[i]}`);
  // On modifie les displays sur le click lors du retournement des cartes
  backElmnt.style.display = 'none';
  frontElmnt.style.display = 'block';

  // On stocke les Ids des cartes cliquées dans les tableaux
  backElmntArray.push(backElmnt);
  frontElmntArray.push(frontElmnt);

  // On transfert l'Id dans une variable
  let firstCardFront = frontElmntArray[0];
  let secondCardFront = frontElmntArray[1];
  let firstCardBack = backElmntArray[0];
  let secondCardBack = backElmntArray[1];


  
  // On ajoute une carte aux tableaux des comparaisons
  imgToCompare.push(images[i]);
  
  
  // Si la taille du tableau est égale à 2 ET que l'url de la première image cliquée est égale à celle de la deuxième
  if ((imgToCompare.length === 2) && (imgToCompare[0] === imgToCompare[1])) {

    
    

    // alors on réinitialise le tableau de comparaison pour pouvoir réutiliser la fonction de comparaison
    imgToCompare = [];
    // Appel la fonction du calcul du score et affiche le score dans le HTML
    addScore();
    scoreElt.innerHTML = (`<p> Score player : ${score} </p>`)
    tryCount();
    countElt.innerHTML =(`<p> Try : ${count} </p>` )
    // alors on réinitialise aussi les tableaux contenants les Id des cartes retournées
    backElmntArray = [];
    frontElmntArray = [];

   
  // Alors que si le nombre d'image comparée est égale à 2 mais que les images sont différentes
  } else if ((imgToCompare.length === 2) && (imgToCompare[0] !== imgToCompare[1])){
    //console.log('boulet');

    // on les retourne
    onCardClicked = false;

    setTimeout(function(){
    firstCardFront.style.display = "none";
    firstCardBack.style.display = "block";
    secondCardFront.style.display = "none";
    secondCardBack.style.display = "block";
    onCardClicked = resetonCardClicked;}, 800);

   
    // on réinitilaise les tableaux pour pouvoir réutiliser la fonction de comparaison et de retournement.
    backElmntArray = [];
    frontElmntArray = [];
    imgToCompare = [];
    tryCount();
    countElt.innerHTML = (`<p> Number of tries : ${count} </p>`)
  };
};


// Fonction permettant de reset les cartes retounées
function displayCard() {
  location.reload();
};


//score Bar avatar setup

function showButt (){

    avatarFront = document.getElementById('cartmanfront');
    avatarBack = document.getElementById('cartmanback');
    avatarFront.style.display='none';
    avatarBack.style.display = 'block'; 

  setTimeout(function(){ 
    avatarFront.style.display='block';
    avatarBack.style.display = 'none';  }, 800);

}


function killKenny(){
  avatarFront = document.getElementById('kennyfront');
  avatarBack = document.getElementById('kennyback');
  avatarFront.style.display='none';
  avatarBack.style.display = 'block'; 

  setTimeout(function(){ 
    avatarFront.style.display='block';
    avatarBack.style.display = 'none';  }, 800);
 }







   
function randomNumber(number) {  
  return Math.floor(Math.random() * number);
}
