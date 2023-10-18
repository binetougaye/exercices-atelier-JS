// // Retourner la valeur maximale
// function valeurMaximale(tab) {
//   tab = [12, 13, 27];
// }
// let test = valeurMaximale(12, 13, 27);
// console.log(Math.max(12, 13, 27));
// //   Inverser le tableau
// function valeurInverse(tab) {
//   tab = [10, 20, 30, 40];
//   let tabReverse = tab.reverse(10, 20, 30, 40);
//   console.log(tabReverse);
// }
// valeurInverse();
// // La somme des éléments du tableau
// let tableau = [12, 13, 14];
// function somme(tab) {
//   tab = 0;
//   for (i = 0; i < tableau.length; i++) {
//     tab += tableau[i];
//   }
//   return tab;
// }
// let result = somme(12, 13, 14);
// console.log(result);

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
