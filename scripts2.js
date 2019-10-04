
// Création de constante pour pouvoir générer un nombre variable de cartes en fonction du niveau choisi.
// Cette fonctionnalité est temporairement mise de coté le temps de finir de coder les élements essentiels.
const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;



// On stocke nos images dans des tablaux.
const back = 'images/verso2.jpg';
const imagesSingle = [
  'images/Kenny.png',
  'images/Cartman.png',
  'images/Kyle.png',
  'images/Stan.png',
  'images/Timmy.png',
  'images/Wendy.png',
  'images/Token.png',
  'images/Red.png',
  'images/Craig.png',
];

// bibliotèque de son
let audioLibrary2P = [
'CartmanSounds/Holy crap.mp3',
'CartmanSounds/Im not fat.mp3',
'CartmanSounds/Screw u guys.mp3'
];

let audioLibrary1P = [
  "CartmanSounds/Kenny laughing.mp3",
  "CartmanSounds/Mrph mmph mrh mrph.mp3",
  "CartmanSounds/Kenny blah.mp3",
]



// On crée un tableau "images", puis on ajoute deux fois chaque carte autant de fois qu'il y a de cartes 
// dans le tableau "imagesSingle".
let images = [];
for (let j = 0 ; j < imagesSingle.length ; j++) {
  images.push(imagesSingle[j]);
  images.push(imagesSingle[j]);
};

let score1 = 0;
let score2 = 0;
let popModal = document.getElementById('modal1');
let popModal2 = document.getElementById('modal2');
popModal.style = "bottom: -50vh"
popModal2.style = "bottom: -50vh"

function firstPlayer() {
  score1 += 1;
}

let score1Elt = document.getElementById('score1');

function secondPlayer() {
  score2 += 1;
}

let score2Elt = document.getElementById('score2');



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


//initialisation des variables pour changement de joueurs
let playerOne = true
let playerTwo = false

// On stocke dans imagesElmnt le lien de ciblage de la zone d'insertion des balises images
let imagesElt = document.getElementById('memory-game');


// On génére les Ids des cartes
for(let i = 0; i < images.length; i++) {
    imagesElt.innerHTML += `<img onclick="onCardClicked('${[i]}')" src="${back}" style="display: block" id="back-${[i]}" class="imgClass"/>`;
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
  let firstCardBack = backElmntArray[0];
  let secondCardFront = frontElmntArray[1];
  let secondCardBack = backElmntArray[1];
  
  // On ajoute une carte aux tableaux des comparaisons
  imgToCompare.push(images[i]);
    
  // Si la taille du tableau est égale à 2 ET que l'url de la première image cliquée est égale à celle de la deuxième
  if ((imgToCompare.length === 2) && (imgToCompare[0] === imgToCompare[1])) { 
// changement de couleur des cartes gagantes en fonction du joueur actif
    if (playerOne === true) {
      firstCardFront.style.backgroundColor = "#9d4909";
      secondCardFront.style.backgroundColor = "#9d4909";
      let audioTemp = audioLibrary1P[randomNumber(audioLibrary1P.length)]
      let audio = new Audio(`${audioTemp}`)
      audio.play();
      firstPlayer();

      score1Elt.innerHTML = (`<p> ${score1}</p>`)
      modalScore();

      score1Elt.innerHTML = (`<p> ${score1}</p>`)
      killKenny();

    } else {
      firstCardFront.style.backgroundColor = "#024a4d";
      secondCardFront.style.backgroundColor = "#024a4d";
      let audioTemp = audioLibrary2P[randomNumber(audioLibrary2P.length)]
      let audio = new Audio(`${audioTemp}`)
      audio.play();
      secondPlayer();
      score2Elt.innerHTML = (`<p> ${score2}</p>`) 
      modalScore();
      showButt();
    }

    // alors on réinitialise le tableau de comparaison pour pouvoir réutiliser la fonction de comparaison
    imgToCompare = [];
    // alors on réinitialise aussi les tableaux contenants les Id des cartes retournées
    backElmntArray = [];
    frontElmntArray = [];
  // Alors que si le nombre d'image comparée est égale à 2 mais que les images sont différentes
  } else if ((imgToCompare.length === 2) && (imgToCompare[0] !== imgToCompare[1])){
    //Changement de joueur
    if (playerOne === true) {
      imagesElt.style.cursor = "url(images/CartmanPointer.png), auto";
      playerOne = false;
      playerTwo = true;
      
    }
    else {
      imagesElt.style.cursor = "url(images/KennyPointer.png), auto";
      playerOne = true;
      playerTwo = false;
      
    }
    // on les retourne
    onCardClicked = false;
    setTimeout(function(){
      firstCardFront.style.display = "none";
      firstCardBack.style.display = "block";
      secondCardFront.style.display = "none";
      secondCardBack.style.display = "block";
      onCardClicked = resetonCardClicked;
    }, 1500);
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
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

function closeClick() {
  popModal.style.display = 'none';
}

function closeClick2() {
  popModal2.style.display = 'none';
}

function modalScore() {
    let varcontrol = score2 + score1
    console.log(varcontrol);
  if (score2 + score1 >= 9) {
    if (score1 > score2) { 
      popModal.style = "bottom: 35vh; -webkit-animation: pop-win 2s ease; -moz-animation: pop-win 2s ease; -o-animation: pop-win 2s ease; animation: pop-win 2s ease;";
    }
    else {
      popModal2.style = "bottom: 35vh; -webkit-animation: pop-win 2s ease; -moz-animation: pop-win 2s ease; -o-animation: pop-win 2s ease; animation: pop-win 2s ease;";
    }
    }
  }
  
  //avatars setup > Kenny 1st player, Cartman 2nd player

function showButt (){

   avatarFront = document.getElementById('cartmanfront');
   avatarBack = document.getElementById('cartmanback');
   avatarFront.style.display='none';
   avatarBack.style.display = 'block'; 
   let cartmanNameChange = document.getElementById('cartmanName');
   cartmanNameChange.classList.add ('changeCartmanNameClass')

 setTimeout(function(){ 
   avatarFront.style.display='block';
   avatarBack.style.display = 'none';
   cartmanNameChange.classList.remove('changeCartmanNameClass')  
  }, 800);

 }


function killKenny(){
   avatarFront = document.getElementById('kennyfront');
   avatarBack = document.getElementById('kennyback');
   avatarFront.style.display='none';
   avatarBack.style.display = 'block'; 
   let kennyNameChange = document.getElementById('kennyName');
   kennyNameChange.classList.add ('changeKennyNameClass')
  setTimeout(function(){ 
     avatarFront.style.display='block';
     avatarBack.style.display = 'none'; 
     kennyNameChange.classList.remove ('changeKennyNameClass')
    }, 800);
     
  }
 


