// Création de constante pour pouvoir générer un nombre variable de cartes en fonction du niveau choisi.
// Cette fonctionnalité est temporairement mise de coté le temps de finir de coder les élements essentiels.
const easyMode = 4;
const mediumMode = 6;
const hardMode = 8;
const double = 2;


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
let name = `${imagesSingle['']}`;
console.log(name);  

// On crée un tableau "images", puis on ajoute deux fois chaque carte autant de fois qu'il y a de cartes 
// dans le tableau "imagesSingle".
let images = [];
for (let j = 0 ; j < imagesSingle.length ; j++) {
  images.push(imagesSingle[j]);
  images.push(imagesSingle[j]);
}



// On stocke dans imagesElmnt le lien de ciblage de la zone d'insertion des balises images
let imagesElt = document.getElementById('memory-game');

// 

for(let i = 0; i < images.length; i++) {
    imagesElt.innerHTML += `<img onclick="onCardClicked('${[i]}')" src="${back}" style="display: block" id="back-${[i]}"/>`;
    imagesElt.innerHTML += `<img src="${images[i]}" style="display: none" id="card-${[i]}"/>`;            
  };



// Fonction permettant le retournement des cartes : En fonction de l'index (i) (!! attention pas ([i]) sinon ([10])=> (1)!!), 
// on stock dans les variables backElmnt et frontElmnt le lien de ciblage du recto et du verso des cartes.
// Enfin, on modifie le CSS.


let objet = {
click: function onCardClicked(i) {
        let backElmnt = document.getElementById(`back-${[i]}`);
        let frontElmnt = document.getElementById(`card-${[i]}`);
        backElmnt.style.display = 'none';
        frontElmnt.style.display = 'block';}
}
for(let click in objet){
  if (typeof(objet[click]) === 'function'){
  objet[click]()}
}

// Fonction permettant de reset les cartes retounées
function displayCard() {
  location.reload();
};
