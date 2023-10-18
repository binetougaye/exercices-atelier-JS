// Filtrer les nombres paires sans méthodes JS
// Recupérer les éléments négatifs d'un tableau les mettre dans un autre
let tab2 = [];
let myArray = [22, -67, 9, -2, 17, -98, -5];
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    tab2.push([myArray[i]]);
    // console.log(tab2);
  }
}
console.log(tab2);
