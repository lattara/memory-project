// Création de constante pour pouvoir générer un nombre variable de cartes en fonction du niveau choisi.
// Cette fonctionnalité est temporairement mise de coté le temps de finir de coder les élements essentiels.
const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;



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


// On crée une fonction pour random les cartes
function shuffle(array) {
  array.sort(() => Math.floor(Math.random() * images.length));
};
shuffle(images);


// On stocke dans imagesElmnt le lien de ciblage de la zone d'insertion des balises images
let imagesElt = document.getElementById('memory-game');


// On génére les Ids des cartes
for(let i = 0; i < images.length; i++) {
    imagesElt.innerHTML += `<img onclick="onCardClicked('${[i]}')" src="${back}" style="display: block" id="back-${[i]}" />`;
    imagesElt.innerHTML += `<img src="${images[i]}" style="display: none" id="card-${[i]}" />`;
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
    //console.log("win");
    // alors on réinitialise le tableau de comparaison pour pouvoir réutiliser la fonction de comparaison
    imgToCompare = [];
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
    onCardClicked = resetonCardClicked;}, 1500);
    


    // on réinitilaise les tableaux pour pouvoir réutiliser la fonction de comparaison et de retournement.
    backElmntArray = [];
    frontElmntArray = [];
    imgToCompare = [];
  };
};


// Fonction permettant de reset les cartes retounées
function displayCard() {
  location.reload();
};