"use strict";
// Find Index of Element Without Using .indexOf()

// Given [10, 20, 30, 40] and a target 30, find its index in the array.

const numbers = [10, 20, 30, 40];
function findIndex(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
      console.log(`The index of the element ${target} is :`, i);
    }
  }
}

findIndex(numbers, 40);

// Remove All Occurrences of a Given Element
// Given [1, 2, 3, 2, 4] and target 2, remove all 2s from the array.

const numArr = [1, 2, 3, 2, 4];
const newNumArr = [];
for (let i = 0; i <= numArr.length - 1; i++) {
  if (numArr[i] === 2) continue;
  newNumArr.push(numArr[i]);
}
console.log(newNumArr);

// 28. Find Product of All Elements
// Given [2, 3, 4], calculate the product of all numbers

const allNum = [4, 5, 4];
let productOfNums = allNum[0];
// productOfNum = allNum[0] * allNum[1] * allNum[2];

for (let i = 1; i <= allNum.length - 1; i++) {
  productOfNums = productOfNums * allNum[i];
}
console.log(productOfNums);

// Find oldest person (Find the person with highest age)

const people = [
  { name: "Anki", age: 55 },
  { name: "Kanchi", age: 85 },
  { name: "Nivi", age: 45 },
];

// let max = people[0].age;
// let personName = people[0].name;

// for (let i = 1; i <= people.length - 1; i++) {
//   if (max < people[i].age) {
//     max = people[i].age;
//     personName = people[i].name;
//   }
// }

// console.log("Highest Age is:", max, personName);

let max = people[0].age;
let index = 0;

for (let i = 1; i <= people.length - 1; i++) {
  if (max < people[i].age) {
    max = people[i].age;
    index = i;
  }
}

console.log("Highest Age is:", people[index].age, people[index].name);
