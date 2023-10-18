// // Exercise 1
function is_array(tab) {
  let text = "";
  if (Array.isArray(tab) === true) {
    text = tab + " est un tableau";
    console.log(text);
  } else {
    text = tab + " n'est pas un tableau";
    console.log(text);
  }
  return text;
}
let myArray = is_array([2, 3]);
// Exercise 3
function firstElementOfTheArray(tab) {
  let n = tab[0];
  return n;
}
let firstIndex = firstElementOfTheArray([13, 12, 14]);
// console.log(firstIndex);
// Exercise 4
function lastElementOfTheArray(tab) {
  let n = tab.length - 1;
  let tableau = tab[n];
  return tableau;
}
let lastIndex = lastElementOfTheArray([13, 12, 14]);
// console.log(lastIndex);
// Exercise 5
// Write a Js function to join all elements of the following array into a string
// Exple let array = ["Red", "green","yellow"] get["Red, green, yellow"]
let array = ["Red", "green", "yellow"];
function sampleArray() {
  console.log(array.join(" "));
  // console.log(typeof array.join());
}
sampleArray();
// Exercise 7
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let arr2 = function (a, b) {
  let arr2 = arr1.sort();
  // console.log(arr2);
  return a - b;
};
arr2();
// Exercise 6
let num = [0, 254, 6, 8];
console.log(num.join("-"));
