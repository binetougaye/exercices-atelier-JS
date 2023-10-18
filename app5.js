// Filtrer les nombres paires
let myArray = [12, 19, 7, 13];
let myNewArray = [];
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    myNewArray.push(myArray[i]);
  }
}
// console.log(myNewArray);
let withFilter = myArray.filter((test) => test % 2 === 0);
// console.log(withFilter);
let tabReverse = [1, 2, 3, 5];
let test = tabReverse.length - 1;
console.log(tabReverse[test]);
