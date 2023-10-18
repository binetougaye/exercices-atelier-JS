// //
// function sum(nb1, nb2) {
//   return nb1 + nb2;
// }
// let n1 = 12;
// let n2 = 14;
// console.log(sum(n1, n2));
// let n3 = 16;
// let n4 = 15;
// console.log(sum(n3, n4));
let addition;
// APPELER UNE FONCTION PAR ELLE-MEME
(function tester(a, b) {
  addition = a + b;
  console.log(addition);
})(2, 4);
